sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History"
    ],
    function(BaseController,History) {
      "use strict";
  
      return BaseController.extend("ns.appform.controller.Detail", {
        onInit: function() {
          
        },
        onNavToOverview: function () {
            var oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("overview", {}, true);
          }
        })
    })
