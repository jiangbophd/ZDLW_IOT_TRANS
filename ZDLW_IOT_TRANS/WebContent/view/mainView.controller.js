/**
 * Made By Richard
 */
sap.ui.controller("dlw.iot.transport.app.view.mainView", {

		onInit: function() {
			var i18nModel = new sap.ui.model.resource.ResourceModel({
				bundleUrl : "i18n/messageBundle.properties"
			});
			this.getView().setModel(i18nModel,'i18n');
			this.bundle = this.getView().getModel("i18n").getResourceBundle();
			
			var oVizFrame = this.getView().byId("idVizFrameLine");
		    var oPopOver = this.getView().byId("idPopOver");

		    var oModel = new sap.ui.model.json.JSONModel("test-resources/sap/viz/demokit/dataset/bookstore_fiori/ByYearCity_sum.json");
		    var oDataset = new sap.viz.ui5.data.FlattenedDataset({
		      dimensions: [{
		        name: 'Year',
		        value: "{Year}"
		      }, {
		        name: 'City',
		        value: "{City}"
		      }],
		      measures: [{
		        name: 'Revenue',
		        value: '{Revenue}'
		      }],
		      data: {
		        path: "/book"
		      }
		    });

		    oVizFrame.setVizProperties({
		      valueAxis: {
		        label: {
		          formatString: 'u'
		        }
		      },
		      plotArea: {
		        dataLabel: {
		          visible: true
		        },
		        dataPointStyle: {
		          "rules": [{
		            "dataContext": [{
		              "City": "New York "
		            }],
		            "properties": {
		              "dataLabel": true
		            },
		            "displayName": ""
		          }],
		          "others": {
		            "properties": {
		              "dataLabel": false
		            },
		            "displayName": "Others"
		          }
		        },
		        lineStyle: {
		          rules: [{
		            dataContext: [{
		              City: "New York "
		            }],
		            properties: {
		              width: 4
		            }
		          }]
		        }
		      },
		      legend: {
		        title: {
		          visible: false
		        }
		      },

		      title: {
		        visible: true,
		        text: 'Revenue by City and Year'
		      }
		    });
		    oVizFrame.setDataset(oDataset);
		    oVizFrame.setModel(oModel);

		    var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
		        'uid': "valueAxis",
		        'type': "Measure",
		        'values': ["Revenue"]
		      }),
		      feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
		        'uid': "categoryAxis",
		        'type': "Dimension",
		        'values': ["Year"]
		      }),
		      feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
		        'uid': "color",
		        'type': "Dimension",
		        'values': ["City"]
		      });

		    oVizFrame.addFeed(feedValueAxis);
		    oVizFrame.addFeed(feedCategoryAxis);
		    oVizFrame.addFeed(feedColor);
		    oPopOver.connect(oVizFrame.getVizUid());

		},

		onBeforeRendering: function() {
	
		},


		onAfterRendering: function() {
	
		},

		onExit: function() {
	
		}

});