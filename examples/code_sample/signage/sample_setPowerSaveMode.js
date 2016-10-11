function api_setPowerSaveMode(callback){	
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		callback("Set power save mode successful");
	};

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};

	// Power Save mode parameters.
	// ses: Enable/disable Smart Energy Saving mode
	// dpmMode: Set Display Power Managerment mode. Refer to Signage.DpmMode for more information.
	// automaticStandby: Set Automatic Standby mode. Refer to Signage.AutomaticStandbyMode for more information.
	// do15MinOff: Enable/disable 15 Minute Off feature.	
	var options = {
			powerSaveMode: {
				ses: true,
				dpmMode: Signage.DpmMode.OFF,
				automaticStandby: Signage.AutomaticStandbyMode.OFF,
				do15MinOff: true,
			}

	};

	// Create signage object and invoke the API with parameters.
	var signage = new Signage();
	signage.setPowerSaveMode(successCb, failureCb, options);
}