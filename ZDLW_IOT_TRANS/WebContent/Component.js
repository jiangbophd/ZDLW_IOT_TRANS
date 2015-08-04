/**
 * Create By Richard
 */
jQuery.sap.declare("dlw.iot.transport.app.Component");

sap.ui.core.UIComponent.extend("dlw.iot.transport.app.Component", {
	metadata : {
	    "name" : "LOT_TRANS",
	    "version" : "1.0.0",
	    "library" : "dlw.iot.transport.app",
	    "includes" : [],
	    "dependencies" : {
	      "libs" : [ "sap.m", "sap.me" ],
	      "components" : []
	    }
	  },

	exit: function() {

	},

	init: function() {
		sap.ui.core.UIComponent.prototype.init.apply(this, arguments);
	},

	createContent : function() {
	    var oViewData = {
	      component : this
	    };

	    return sap.ui.view({
	      viewName : "dlw.iot.transport.app.view.mainView",
	      type : sap.ui.core.mvc.ViewType.XML,
	      viewData : oViewData
	    });
	  }
});
