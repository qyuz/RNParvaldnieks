(function() {
	var rnparvaldnieksParserService;

	rnparvaldnieksParserService = {
		maintenance: function (htmlText) {
			return maintenanceRowList(htmlText)
				.map(function (i, maintenanceElement) {
					var maintObj, formattedMaintObj;

					maintObj = maintenanceObject(maintenanceElement);
					formattedMaintObj = formatMaintenanceObject(maintObj);

					return formattedMaintObj;
				})
				.get();
		}
	};

	function maintenanceRowList(htmlText) {
		return jQuery(htmlText).find('.piegades-partraukumi');
	}

	function maintenanceObject(maintenanceElement) {
		var $maintenanceElement;

		$maintenanceElement = jQuery(maintenanceElement);
		$descriptionRows = $maintenanceElement.find('div');

		return {
			date: $descriptionRows.eq(0).text(),
			type: $descriptionRows.eq(1).text(),
			address: $descriptionRows.eq(2).text(),
			contact: $descriptionRows.eq(3).text()
		}
	}

	function formatMaintenanceObject(maintenanceObject) {
		var match, fromString, toString;

		match = maintenanceObject.date.match(/(\d{2}\.\d{2}\.\d{4} (\(\d{1,2}\.\d{2}\))?)[^\d]+(.*)/);
		fromString = match[1];
		toString = match[3];

		return {
			from: moment(fromString, "DD.MM.YYYY (h.mm)").toDate(),
			to: moment(toString, "DD.MM.YYYY (h.mm)").toDate(),
			type: maintenanceObject.type,
			contact: maintenanceObject.contact,
			address: maintenanceObject.address
		}
	}

	window.rnparvaldnieksParserService = rnparvaldnieksParserService;
})();