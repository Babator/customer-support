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
		});

		Babator.telemetry.on('request', function (_, data) {
			if (data.inRead) {
				FOL_GTM_PushEvent("Video", " inreadplay ", "babator");
			}
		});
	});
})();
