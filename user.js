/* ============================================================
   User.js Otimizado — Debian 13 (GNOME + NVIDIA RTX 3060 Ti)
   ============================================================ */

/* ============================================================
   RECURSOS BÁSICOS
   ============================================================ */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.color-mix.enabled", true);
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("browser.tabs.delayHidingAudioPlayingIconMS", 0);

/* ============================================================
   NEW TAB
   ============================================================ */
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.enabled", true);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled", false);

/* ============================================================
   UI / TEMA
   ============================================================ */
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);

/* ============================================================
   ABAS E SESSÃO
   ============================================================ */
user_pref("browser.newtab.preload", true);
user_pref("browser.sessionstore.restore_on_demand", true);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.sessionstore.restore_tabs_lazily", true);
user_pref("browser.sessionstore.interval", 90000);
user_pref("browser.sessionhistory.max_entries", 10); // Aumentado de 2 para 10 (botão voltar funciona melhor)

/* ============================================================
   LAZY LOADING
   ============================================================ */
user_pref("dom.iframe_lazy_loading.enabled", true);

/* ============================================================
   GPU / RENDERIZAÇÃO (WebRender Hardware)
   ============================================================ */
user_pref("gfx.webrender.all", true);
user_pref("gfx.webrender.precache-shaders", false);
user_pref("gfx.canvas.accelerated", true);
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 80);
user_pref("media.gpu-process-decoder", true);
user_pref("layers.gpu-process.enabled", true);
user_pref("layout.display-list.retain", true);
/* Nota: gfx.webrender.compositor removido — é blocklisted no X11 + NVIDIA
   binária (FEATURE_FAILURE_WEBRENDER_COMPOSITOR_DISABLED), pref não tem efeito. */

/* ============================================================
   VÍDEO ACELERADO POR HARDWARE (VA-API/NVDEC)
   ATENÇÃO: no X11 + NVIDIA proprietária, o DMABUF está na blocklist
   do Firefox (bug 1978911) e o HARDWARE_VIDEO_DECODING fica indisível.
   Para destravar o VA-API, use sessão Wayland do GNOME + pacote
   nvidia-vaapi-driver. Deixado aqui porque no Wayland é o caminho certo.
   ============================================================ */
user_pref("media.ffmpeg.vaapi.enabled", true);
user_pref("widget.dmabuf-textures.enabled", true);

/* ============================================================
   X11 (EGL em vez de GLX)
   Firefox usa GLX por padrão em X11; forçar EGL melhora integração
   com WebRender.
   ============================================================ */
user_pref("gfx.x11-egl.force-enabled", true);

/* ============================================================
   CONTAINERS
   ============================================================ */
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 2);

/* ============================================================
   ROLAGEM SUAVE
   ============================================================ */
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 400);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 500);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 500);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", 1.2);
user_pref("layout.frame_rate", -1);
user_pref("mousewheel.min_line_scroll_amount", 40);
user_pref("mousewheel.default.delta_multiplier_y", 100);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 200);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 400);
user_pref("apz.overscroll.enabled", true);

/* ============================================================
   QUALIDADE DE IMAGEM (Gerenciamento de Cores + Decodificação)
   ============================================================ */
user_pref("gfx.color_management.mode", 1);
user_pref("gfx.color_management.enablev4", true);
user_pref("gfx.color_management.rendering_intent", 1);
user_pref("image.jxl.enabled", true);  // JPEG XL — melhor qualidade por byte
user_pref("media.avif.enabled", true);  // garantia, já é default

/* ============================================================
   CACHE E MEMÓRIA (Otimizado)
   ============================================================ */
user_pref("media.memory_cache_max_size", 16384);
user_pref("media.cache_readahead_limit", 5000);
user_pref("media.cache_resume_threshold", 3000);
user_pref("browser.cache.jsbc_compression_level", 5);
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.smart_size.enabled", true);
user_pref("browser.cache.memory.capacity", -1); // Dinâmico — Firefox gerencia conforme RAM disponível
user_pref("browser.cache.memory.max_entry_size", 10240);
user_pref("image.cache.size", 5242880);
user_pref("image.mem.decode_bytes_at_a_time", 65536);
user_pref("image.mem.max_decoded_image_kb", 51200); // 50 MB — evita re-decode de imagens grandes

/* ============================================================
   TELEMETRIA E PRIVACIDADE
   ============================================================ */
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("browser.contentblocking.category", "strict");
user_pref("extensions.pocket.enabled", false);

/* ============================================================
   REDE (Otimizado para Fibra / High Speed)
   ============================================================ */
user_pref("network.http.max-connections", 900); // default nativo, sobrepõe o valor antigo de 200
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.http3.enabled", true);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.dns.disablePrefetch", false);
user_pref("network.prefetch-next", true);

/* ============================================================
   PROCESSOS
   ============================================================ */
user_pref("dom.ipc.processPriorityManager.enabled", true);

/* ============================================================
   AI / MACHINE LEARNING (Desativado)
   ============================================================ */
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.image-editor.enabled", false);
