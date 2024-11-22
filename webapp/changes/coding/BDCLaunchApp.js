sap.ui.define(
    [
        'sap/ui/core/mvc/ControllerExtension'
        // ,'sap/ui/core/mvc/OverrideExecution'
    ],
    function (
        ControllerExtension
        // ,OverrideExecution
    ) {
        'use strict';
        return ControllerExtension.extend("customer.zextsalesprice1.BDCLaunchApp", {
            metadata: {
                // 	// extension can declare the public methods
                // 	// in general methods that start with "_" are private
                methods: {
                    onBDCPress: {
                        public: true
                    }
                    // 		publicMethod: {
                    // 			public: true /*default*/ ,
                    // 			final: false /*default*/ ,
                    // 			overrideExecution: OverrideExecution.Instead /*default*/
                    // 		},
                    // 		finalPublicMethod: {
                    // 			final: true
                    // 		},
                    // 		onMyHook: {
                    // 			public: true /*default*/ ,
                    // 			final: false /*default*/ ,
                    // 			overrideExecution: OverrideExecution.After
                    // 		},
                    // 		couldBePrivate: {
                    // 			public: false
                    // 		}
                }
            },
            // // adding a private method, only accessible from this controller extension
            // _privateMethod: function() {},
            // // adding a public method, might be called from or overridden by other controller extensions as well
            // publicMethod: function() {},
            // // adding final public method, might be called from, but not overridden by other controller extensions as well
            // finalPublicMethod: function() {},
            // // adding a hook method, might be called by or overridden from other controller extensions
            // // override these method does not replace the implementation, but executes after the original method
            // onMyHook: function() {},
            // // method public per default, but made private via metadata
            // couldBePrivate: function() {},
            // // this section allows to extend lifecycle hooks or override public methods of the base controller
            // override: {
            // 	/**
            // 	 * Called when a controller is instantiated and its View controls (if available) are already created.
            // 	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
            // 	 * @memberOf {{controllerExtPath}}
            // 	 */
            // 	onInit: function() {
            // 	},
            // 	/**
            // 	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
            // 	 * (NOT before the first rendering! onInit() is used for that one!).
            // 	 * @memberOf {{controllerExtPath}}
            // 	 */
            // 	onBeforeRendering: function() {
            // 	},
            // 	/**
            // 	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
            // 	 * This hook is the same one that SAPUI5 controls get after being rendered.
            // 	 * @memberOf {{controllerExtPath}}
            // 	 */
            // 	onAfterRendering: function() {
            // 	},
            // 	/**
            // 	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
            // 	 * @memberOf {{controllerExtPath}}
            // 	 */
            // 	onExit: function() {
            // 	},
            // 	// override public method of the base controller
            // 	basePublicMethod: function() {
            // 	}
            onBDCPress: function (oEvent) {
                debugger;
                var oTable = this.getView().byId("innerUITable");
                var oIndex = oTable.getAggregation("plugins")[0].getSelectedIndex();
                var sPath = oTable.getContextByIndex(oIndex).getPath();
                console.log("BDCAPP");
                if(oIndex >= 0 ) {
                    var oknumh = this.getView().getModel().getProperty(sPath).ConditionRecord;
                    sap.ui.require(["sap/ushell/Container"], async function (Container) {
                        const Navigation = await Container.getServiceAsync("Navigation");
                        // do something with the Navigation service
                        Navigation.navigate({
                            target: {
                                semanticObject: "Product",
                                action: "launchapp1"
                            },
                            params: {
                                "Travel_Id": oknumh //"102343333"
                            }
                        });
    
                    });
                }
                
            }

        });
    }
);
