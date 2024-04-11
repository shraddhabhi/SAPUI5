sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("ns.appform.controller.Overview", {
            onInit: function () {

            },
            onSave: function () {
                if (!this.pDialog) {
                  this.pDialog = this.loadFragment({
                    name: "ns.appform.view.Dialog"
                  });
                }
                this.pDialog.then(function (oDialog) {
                  oDialog.open();
                });
              },
              onCloseDialog: function () {
                this.byId("dialog").close();
              },
              onCustomerselect:function(oEvent){
                var oBindingContext = oEvent.getParameter("listItem").getBindingContext();
                this.byId("bookingTable").setBindingContext(oBindingContext);
              },
              onNavToDetails: function (oEvent) {
                var oItem= oEvent.getSource();
                var oRouter = this.getOwnerComponent().getRouter();
                oRouter.navTo("detail",{
                  customerId:oItem.getBindingContext().getPath().substring("/Customers/".length)  
                });


              }
        });
    });
