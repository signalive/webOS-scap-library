function api_setPortraitMode(callback, params){
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		callback("Set portrait mode successful");
	};

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};

	// Portrait Mode to set.
	// Refer to the Signage.OsdPortraitMode for more information.
	var options = {
			portraitMode : Signage.OsdPortraitMode.OFF
	};
	
	// Create signage object and invoke the API with parameters.
	var signage = new Signage();
	signage.setPortraitMode(successCb, failureCb, options);
}