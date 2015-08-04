jQuery.sap.declare("dlw.iot.transport.app.mock.mockData");
dlw.iot.transport.app.mock.mockData = {
    getSingleSeriesJSONDataModel: function() {
		var testdata = [];
		var date = new Date();
		var currentYear = date.getFullYear();
		var i;
		for (i = currentYear - 10; i < currentYear; i++) {
			var rev = 500000 + (Math.random() * 200000);
			testdata.push({
				year: i,
				revenue: rev,
				cost: 500000 - (Math.random() * 110000)
			});
		}
		this.SSTestData = {
			mydata: testdata
		};
		var model = new sap.ui.model.json.JSONModel();
		model.setData(this.SSTestData);
		model.setSizeLimit(10000);
		return model;
	}
}
