/**
 * Made By Richard
 */
jQuery.sap.require("dlw.iot.transport.app.util.chartBuildUtil");
jQuery.sap.require("dlw.iot.transport.app.mock.mockData");
sap.ui.controller("dlw.iot.transport.app.view.mainView", {
	onInit: function() {
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl: "i18n/messageBundle.properties"
		});
		this.getView().setModel(i18nModel, "i18n");
		this.bundle = this.getView().getModel("i18n").getResourceBundle();
		var tabFilter = this.getView().byId("tabFilterId");
		var ssModel = dlw.iot.transport.app.mock.mockData.getSingleSeriesJSONDataModel();
		var chart = dlw.iot.transport.app.util.chartBuildUtil.createSSChart("NormalChartPage", "Standard Chart", ssModel);
		chart.setHeight("400px");
		tabFilter.addContent(chart);
	},

	onBeforeRendering: function() {},

	onAfterRendering: function() {},

	onExit: function() {}

});