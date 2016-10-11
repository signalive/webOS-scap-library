//Sample Implementation for getUsageData.
function api_getUsageData(callback){
	// Callback for a successful execution.
	var successCb = function (cbObject){
		// Get the up time data, in hour.
		var uptime= cbObject.uptime;
		
		// Get the total used time, in hour.
		var totalUsed= cbObject.totalUsed;

		console.log("Uptime: " + uptime);
		console.log("Total Used: " + totalUsed);
				
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
	signage.getUsageData(successCb, failureCb);	
}