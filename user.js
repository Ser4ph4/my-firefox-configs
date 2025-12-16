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
user_pref("nglayout.initialpaint.delay", 5);
user_pref("nglayout.initialpaint.delay_in_oopif", 5);

/* --------- ABAS E SESSÃO --------- */
user_pref("browser.newtab.preload", true);
user_pref("browser.sessionstore.restore_on_demand", true);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.sessionstore.restore_tabs_lazily", true);
user_pref("browser.sessionstore.interval", 90000);

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

/* --------- ROLAGEM SUAVE (144Hz) --------- */
user_pref("general.smoothScroll", true);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 350);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 300);
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 300);
user_pref("layout.frame_rate", -1);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 15);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 15);
user_pref("general.smoothScroll.currentVelocityWeighting", "1.0");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1.0");
user_pref("mousewheel.default.delta_multiplier_y", 190);
user_pref("apz.overscroll.enabled", true);

/* --------- CACHE DE MÍDIA (CORRIGIDO - principal causa do alto uso de RAM) --------- */
user_pref("media.memory_cache_max_size", 524288);       // 512 MB (ajuste para 262144 se quiser mais economia)
user_pref("media.cache_readahead_limit", 5000);
user_pref("media.cache_resume_threshold", 3000);

/* --------- CACHE GERAL --------- */
user_pref("browser.cache.jsbc_compression_level", 5);
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.smart_size.enabled", true);  // Deixa o Firefox gerenciar automaticamente
user_pref("browser.cache.disk.capacity", 524288);         // 512 MB em disco
user_pref("browser.cache.disk.max_entry_size", -1);
user_pref("browser.cache.disk.metadata_memory_limit", 500);
user_pref("browser.cache.memory.capacity", 524288);        // 512 MB em memória (era -1 = ilimitado)
user_pref("browser.cache.memory.max_entry_size", 10240);

/* --------- CACHE DE IMAGENS --------- */
user_pref("image.cache.size", 10485760);                   // 10 MB (mantido - bom custo-benefício)
user_pref("image.mem.decode_bytes_at_a_time", 65536);
user_pref("image.mem.max_decoded_image_kb", 512000);       // Limite total de imagens decodificadas (~500 MB)
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
user_pref("network.http.max-connections", 600);
user_pref("network.http.max-persistent-connections-per-server", 10);
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
