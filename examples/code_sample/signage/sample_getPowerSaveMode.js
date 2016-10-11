//Sample Implementation for getFailoverMode.
function api_getPowerSaveMode(callback){
	// Callback for a successful execution.
	var  successCb = function(cbObject){
		// Boolean value for Smart Energy Saving mode on/off.
		var ses = cbObject.ses;					
		
		// The Display Power Management mode. Refer to the Signage.DpmMode for detail. 
		var dpmMode = cbObject.dpmMode;
		
		// Boolean value for automaticStandby mode. Refer to the Signage.AutomaticStandbyMode for detail.
		var automaticStandby = cbObject.automaticStandby;
		
		// Boolean value for 15 Minutes Off mode on/off.
		var do15MinOff = cbObject.do15MinOff;
			
		// Print out values on the console, and create the return value.
		console.log("Smart Energy Saving: " + ses);
		console.log("Display Power Management: " + dpmMode);
		console.log("automaticStandby Mode: " + automaticStandby);		
		console.log("15 Minutes Off: " + do15MinOff);
		
		callback(cbObject);
	};
	
	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){	
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		
		callback(cbObject);
	};
	
	// Create the signage object.
	var signage = new Signage();
	
	// invoke the method with callbacks.
	signage.getPowerSaveMode(successCb, failureCb);
}

