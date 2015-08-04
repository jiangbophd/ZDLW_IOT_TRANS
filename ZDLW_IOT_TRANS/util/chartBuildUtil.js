jQuery.sap.declare("dlw.iot.transport.app.util.chartBuildUtil");
jQuery.sap.require("sap.m.MessageBox");
jQuery.sap.require("sap.makit.Chart");

dlw.iot.transport.app.util.chartBuildUtil = {

	createSSChart: function(id, title, model) {
		// Chart
	var oChart = new sap.makit.Chart({
		width : "100%",
		height : "70%",
		type : sap.makit.ChartType.Column,
		showRangeSelector : true,
		showTableView : false,
		showTotalValue : true,
		lineThickness : 2,
		categoryAxis: new sap.makit.CategoryAxis({displayLastLabel:true}),
		category : new sap.makit.Category({
			column : "yearCategory"
		}),
		values : [new sap.makit.Value({
			expression : "revenueValue",
			format : "currency"
		})]
	});

	oChart.addColumn(new sap.makit.Column({name:"yearCategory", value:"{year}"}));
	oChart.addColumn(new sap.makit.Column({name:"country", value:"{country}"}));
	oChart.addColumn(new sap.makit.Column({name:"revenueValue", value:"{revenue}", type:"number"}));
	oChart.addColumn(new sap.makit.Column({name:"costValue", value:"{cost}", type:"number"}));

	var row = new sap.makit.Row();
	row.addCell(new sap.makit.Column({name:"yearCategory", value:"{year}"}));
	row.addCell(new sap.makit.Column({name:"country", value:"{country}"}));
	row.addCell(new sap.makit.Column({name:"revenueValue", value:"{revenue}", type:"number"}));
	row.addCell(new sap.makit.Column({name:"costValue", value:"{cost}", type:"number"}));

	oChart.setType(sap.makit.ChartType.Line);
	oChart.setShowRangeSelector(false);
	
	oChart.setModel(model);
	oChart.bindRows("/mydata");

	//var oButton = generateConfigPopover(oChart);

	var oPage = new sap.m.Page(id);
	oPage.setShowHeader(false);

	
	var va = oChart.getValues()[0];
	va.setExpression("revenueValue");


	oPage.addContent(oChart);

	return oChart;
	}
};