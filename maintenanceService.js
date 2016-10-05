(function() {
	//var rnparvaldnieksService = require('rnparvaldnieksService');
	//var rnparvaldnieksParserService = require('rnparvaldnieksParserService');

	var maintenanceService;

	maintenanceService = {
		get: function () {
			return rnparvaldnieksService.maintenance()
				.then(rnparvaldnieksParserService.maintenance)
		}
	};

	typeof window != 'null' && (window.maintenanceService = maintenanceService);
	typeof angular != 'null' && angular.module('rnpApp').service('maintenanceService', function() { return maintenanceService});
})();