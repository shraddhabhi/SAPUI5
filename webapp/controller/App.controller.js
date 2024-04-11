sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/ui/model/json/JSONModel"
    ],
    function(BaseController,JSONModel) {
      "use strict";
  
      return BaseController.extend("ns.appform.controller.App", {
        onInit: function() {
          var oView = this.getView();
          var oModel= new JSONModel();
          oView.setModel(oModel,"customer");
        }
      });
    }
  );
  