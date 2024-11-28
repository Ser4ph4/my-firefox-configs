/* Source file made available under Mozilla Public License v. 2.0 See the main repository for updates as well as full license text. 
   https://github.com/Godiesc/opera-gx */

/* Default rules */
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("svg.context-properties.content.enabled", true); 
user_pref("layout.css.color-mix.enabled", true);
user_pref("browser.tabs.delayHidingAudioPlayingIconMS", 0);
user_pref("layout.css.backdrop-filter.enabled", true);
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.enabled", true);
user_pref("browser.newtabpage.activity-stream.newtabWallpapers.v2.enabled", false);

/** TEMA AJUSTES ***/
user_pref("browser.compactmode.show", true);
user_pref("browser.display.focus_ring_on_anything", true);
user_pref("browser.display.focus_ring_style", 0);
user_pref("browser.display.focus_ring_width", 0);
user_pref("layout.css.prefers-color-scheme.content-override", 2);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS
user_pref("nglayout.initialpaint.delay", 5); // DEFAULT; formerly 250
user_pref("nglayout.initialpaint.delay_in_oopif", 5); // DEFAULT
user_pref("browser.newtab.preload", true); 
user_pref("browser.sessionstore.restore_on_demand", true); // DEFAULT
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);
user_pref("browser.sessionstore.restore_tabs_lazily", true); // DEFAULT
user_pref("browser.startup.preXulSkeletonUI", false);
user_pref("dom.iframe_lazy_loading.enabled", true);
user_pref("gfx.canvas.accelerated.cache-items", 4096); // default=2048; Chrome=4096
user_pref("gfx.canvas.accelerated.cache-size", 512); // default=256; Chrome=512
user_pref("gfx.content.skia-font-cache-size", 20); // default=5; Chrome=20
user_pref("media.gpu-process-decoder", true);

/*To active container tabs without any extension */
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
user_pref("privacy.userContext.longPressBehavior", 2);
user_pref("content.notify.interval", 100000);

/** ROLAGEM SUAVE***/
user_pref("apz.overscroll.enabled", true); // DEFAULT NON-LINUX
user_pref("general.smoothScroll", true); // DEFAULT
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 600);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 650);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 25);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "2");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 250);
user_pref("general.smoothScroll.currentVelocityWeighting", "1");
user_pref("general.smoothScroll.stopDecelerationWeighting", "1");
user_pref("mousewheel.default.delta_multiplier_y", 350); // 250-400; adjust this number to your liking

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 131072);
user_pref("media.cache_readahead_limit", 7800);
user_pref("media.cache_resume_threshold", 3900);
user_pref("browser.cache.jsbc_compression_level", 5);
user_pref("browser.cache.disk.enable", true);
user_pref("browser.cache.disk.smart_size.enabled", false); // force a fixed max cache size on disk
user_pref("browser.cache.disk.capacity", 2048000); // default=256000; size of disk cache; 1024000=1GB, 2048000=2GB
user_pref("browser.cache.disk.max_entry_size", 51200); // DEFAULT (50 MB); maximum size of an object in disk cache
user_pref("browser.cache.disk.metadata_memory_limit", 500);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 92768);
user_pref("browser.cache.disk.preload_chunk_count", 4);
user_pref("browser.cache.frecency_half_life_hours", 6);
user_pref("browser.cache.disk.max_chunks_memory_usage", 40960); // DEFAULT (40 MB)
user_pref("browser.cache.disk.max_priority_chunks_memory_usage", 40960); // DEFAULT (40 MB)
user_pref("browser.cache.check_doc_frequency", 3);
user_pref("dom.script_loader.bytecode_cache.enabled", true); // DEFAULT
user_pref("dom.script_loader.bytecode_cache.strategy", 0); // DEFAULT
user_pref("browser.cache.memory.capacity", -1); // DEFAULT; 256000=256 MB; 512000=500 MB; 1048576=1GB, 2097152=2GB
user_pref("browser.cache.memory.max_entry_size", 10240); // (10 MB); default=5120 (5 MB)

/** TELEMETRY ***/
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
user_pref("browser.contentblocking.category", "strict");

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);

/** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** REDE**/
user_pref("network.http.max-connections", 3800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240); 
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.predictor.enabled", false);
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com"); 
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com"); 
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 90000);
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("browser.urlbar.quicksuggest.enabled", false); 
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); 
user_pref("browser.urlbar.suggest.quicksuggest.nonsponsored", false); 
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("image.cache.size", 10485760); 
user_pref("image.mem.decode_bytes_at_a_time", 65536);
user_pref("network.buffer.cache.size", 262144); // 256 kb; default=32768 (32 kb)
user_pref("network.buffer.cache.count", 128); // default=2