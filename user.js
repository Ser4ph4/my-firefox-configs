/* ============================================================
   User.js Otimizado: Ser4ph4 Edition ⚡
   ============================================================ */

/* --------- RECURSOS BÁSICOS --------- */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true);
user_pref("layout.css.color-mix.enabled", true);
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("browser.tabs.delayHidingAudioPlayingIconMS", 0);

/* --------- NEW TAB --------- */
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.enabled", true);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled", false);

/* --------- UI / TEMA --------- */
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref("browser.privateWindowSeparation.enabled", false);
user_pref("browser.startup.preXulSkeletonUI", false);

/* --------- ABAS E SESSÃO --------- */
user_pref("browser.newtab.preload", true);
user_pref("browser.sessionstore.restore_on_demand", true);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.sessionstore.restore_tabs_lazily", true);
user_pref("browser.sessionstore.interval", 90000);
user_pref("browser.sessionhistory.max_entries", 3);

/* --------- LAZY LOADING --------- */
user_pref("dom.iframe_lazy_loading.enabled", true);

/* --------- GPU / CANVAS --------- */
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);
user_pref("media.gpu-process-decoder", true);

/* --------- CONTAINERS --------- */
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 2);

/* ============================================================
   MELHORIAS FOCADAS EM QUALIDADE DE IMAGEM E ROLAGEM SUAVE
   ============================================================ */

/* --------- QUALIDADE DE IMAGEM (Gerenciamento de Cores ICC) --------- */
// Ativa o gerenciamento de cores completo para máxima qualidade e precisão.
// O valor '1' aplica gerenciamento de cores a todas as imagens (marcadas e não marcadas),
// usando sRGB para imagens sem perfil, prevenindo saturação excessiva em monitores Wide Gamut.
user_pref("gfx.color_management.mode", 1);
// Ativa o suporte a perfis ICC v4, que são mais modernos e precisos.
user_pref("gfx.color_management.enablev4", true);
// Define a intenção de renderização para 'Perceptual' (1), ideal para fotografia e design,
// priorizando a relação visual das cores em detrimento da precisão absoluta.
// Alternativa: 'Relative Colorimetric' (2) para maior precisão de cores.
user_pref("gfx.color_management.rendering_intent", 1);

/* --------- ROLAGEM SUAVE (Otimizada 144Hz) --------- */
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.enabled", true);

// Ajuste de resposta (Menos 'borracho', mais precisão) - MANTIDO
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 450);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 450);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 400);

// Sincronização com a taxa de atualização
// O valor -1 (padrão) permite que o Firefox detecte automaticamente a taxa de atualização (144Hz).
// Isso é geralmente mais confiável em versões modernas do Firefox.
// Se quiser forçar 144Hz, use: user_pref("layout.frame_rate", 144);
user_pref("layout.frame_rate", -1);

// Rolagem mais suave: Reduz o valor para que a rolagem do mouse seja menos "saltitante".
// O valor 30 é muito alto para "rolagem suave". O padrão é 5-10.
user_pref("mousewheel.min_line_scroll_amount", 12);

// Performance de renderização - MANTIDO
user_pref("gfx.webrender.all", true); // Garante o uso da GPU moderna
user_pref("gfx.webrender.precache-shaders", true);
user_pref("layers.gpu-process.enabled", true);

/* --------- CACHE DE MÍDIA (CORRIGIDO - principal causa do alto uso de RAM) --------- */
user_pref("media.memory_cache_max_size", 524288);       // 512 MB (ajuste para 262144 se quiser mais economia)
user_pref("media.cache_readahead_limit", 5000);
user_pref("media.cache_resume_threshold", 3000);

/* --------- CACHE GERAL --------- */
user_pref("browser.cache.jsbc_compression_level", 5);
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.smart_size.enabled", true);  // Deixa o Firefox gerenciar automaticamente
user_pref("browser.cache.disk.max_entry_size", -1);
user_pref("browser.cache.disk.metadata_memory_limit", 500);
user_pref("browser.cache.memory.capacity", 524288);        // 512 MB em memória (era -1 = ilimitado)
user_pref("browser.cache.memory.max_entry_size", 10240);

/* --------- CACHE DE IMAGENS --------- */
user_pref("image.cache.size", 10485760);                   // 10 MB (mantido - bom custo-benefício)
user_pref("image.mem.decode_bytes_at_a_time", 65536);
user_pref("image.mem.max_decoded_image_kb", 262144);       // Limite total de imagens decodificadas (~256MB)
user_pref("browser.cache.disk.preload_chunk_count", 4);
user_pref("browser.cache.frecency_half_life_hours", 6);
user_pref("browser.cache.disk.max_chunks_memory_usage", 40960);
user_pref("browser.cache.disk.max_priority_chunks_memory_usage", 40960);
user_pref("browser.cache.check_doc_frequency", 3);

/* --------- BYTECODE JS --------- */
user_pref("dom.script_loader.bytecode_cache.enabled", true);
user_pref("dom.script_loader.bytecode_cache.strategy", 0);

/* --------- TELEMETRIA --------- */
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/* --------- TRACKING --------- */
user_pref("browser.contentblocking.category", "strict");
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");

/* --------- CRASH REPORTS --------- */
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/* --------- URL BAR --------- */
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false);
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false);
user_pref("browser.urlbar.groupLabels.enabled", false);

/* --------- POCKET --------- */
user_pref("extensions.pocket.enabled", false);

/* --------- REDE --------- */
user_pref("network.http.max-connections", 200);
user_pref("network.http.max-persistent-connections-per-server", 8);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enabled", false);
user_pref("network.http.http3.enabled", true);
user_pref("network.buffer.cache.size", 262144);
user_pref("network.buffer.cache.count", 128);

/* --------- SEGURANÇA --------- */
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);

/* --------- FONTES (Alta qualidade mantida) --------- */
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);
user_pref("gfx.font_rendering.cleartype_params.gamma", 2200);
user_pref("gfx.font_rendering.cleartype_params.enhanced_contrast", 60);
user_pref("gfx.font_rendering.cleartype_params.level", 120);
user_pref("gfx.font_rendering.cleartype_params.pixel_structure", 1);
user_pref("gfx.font_rendering.directwrite.enabled", true);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_max_size", 0);
user_pref("gfx.font_rendering.cleartype_params.disable_hardware_acceleration", false);

/* --------- EXTRA: Controle de processos (opcional, ajuda na memória) --------- */
user_pref("dom.ipc.processCount.webIsolated", 6);  // Ajuste entre 4-8 conforme sua CPU/RAM
user_pref("dom.ipc.processPriorityManager.enabled", true);

/* --------- AI / MACHINE LEARNING --------- */
user_pref("browser.ml.enable", false);
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.image-editor.enabled", false);

// Força o Garbage Collector (GC) a ser mais rápido em sistemas com muita RAM
user_pref("javascript.options.mem.gc_high_frequency_heap_growth_max", 150);
user_pref("javascript.options.mem.gc_low_frequency_heap_growth_max", 120);
