(function() {
	var rnparvaldnieksService;

	rnparvaldnieksService = {
		maintenance: function() {
			return fetch('https://www.rnparvaldnieks.lv/lv/partraukumi/')
				.then(function(response) {
					return response.text();
				});
		}
	};

	window.rnparvaldnieksService = rnparvaldnieksService;
})();