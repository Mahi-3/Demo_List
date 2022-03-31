/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"project1fiori1/project1_fiori/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
