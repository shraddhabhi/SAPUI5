sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/routing/History"
    ],
    function(BaseController,History) {
      "use strict";
  
      return BaseController.extend("ns.appform.controller.Detail", {
        onInit: function() {
            var oRouter = this.getOwnerComponent().getRouter();
             oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
              
        },
        onNavBack: function () {
            var oHistory = History.getInstance();
            var sPreviousHash = oHistory.getPreviousHash();
          
            if (sPreviousHash !== undefined) {
              window.history.go(-1);
            } else {
              var oRouter = this.getOwnerComponent().getRouter();
              oRouter.navTo("overview", {}, true);
            }
          },
          _onObjectMatched: function (oEvent) {
            this.getView().bindElement("/Customers" + oEvent.getParameter("arguments").customerId);
            var oModel = this.getOwnerComponent().getModel("dataforDetails");
            let valObj = oModel.getProperty("/Customers").find(
             oObject => oObject.CustomerNumber === oEvent.getParameter("arguments").customerId
         );
         console.log(oEvent.getParameter("arguments").customerId);
         
         var valModel = { val: valObj }
         var oModel = new sap.ui.model.json.JSONModel({valObj});
        // console.log(oModel);
         this.getView().setModel(oModel,"customerDetails");
          }

      });
    }
  );