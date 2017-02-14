;(function () {
	function onBabatorReady(callback) {
		if (Babator && Babator.isReady) {
			callback();
		} else {
			window.addEventListener('babator-ready', function babatorReadyListener() {
				window.removeEventListener('babator-ready', babatorReadyListener);
				callback();
			});
		}
	}

	onBabatorReady(function () {
		Babator.telemetry.on('start', function (_, data) {
			if (data.inRead) {
				FOL_GTM_PushEvent("Video", " play ", "babator");
			}

			if (data.byBabator) {
				FOL_GTM_PushEvent('Video', 'sniperplay', 'play_sniper_cx_' + data.videoNumber);
			}
		});

		Babator.telemetry.on('request', function (_, data) {
			if (data.inRead) {
				if (data.isAutoPlay) {
					FOL_GTM_PushEvent("Video", " inreadautoplay", "babator");

					////////////////////////////////////////////////////////////////
					ga(function () {
						var bbtrTracker = ga.getByName('babator');
						bbtrTracker.send("event", "Video", " inreadautoplay", "babator");
					});
					////////////////////////////////////////////////////////////////
					
				} else {
					FOL_GTM_PushEvent("Video", " inreadplay ", "babator");
					
					////////////////////////////////////////////////////////////////
					ga(function () {
						var bbtrTracker = ga.getByName('babator');
						bbtrTracker.send("event", "Video", " inreadplay ", "babator");
					});
					////////////////////////////////////////////////////////////////
				}
			}
		});
	});
})();
