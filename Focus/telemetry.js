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
			FOL_GTM_PushEvent("Video", " play ", "babator");
		});

		Babator.telemetry.on('autoStart', function (_, data) {
			FOL_GTM_PushEvent("Video", " play ", "babator");
		});

		Babator.telemetry.on('autoFirst', function (_, data) {
			FOL_GTM_PushEvent("Video", " inreadautoplay ", "babator");
		});

		Babator.telemetry.on('recommendationClick', function (_, data) {
			FOL_GTM_PushEvent("Video", " inreadplay ", "babator");
		});

		Babator.telemetry.on('autoPlay', function (_, data) {

		});
	});
})();