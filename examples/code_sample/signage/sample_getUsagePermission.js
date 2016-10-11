//Sample Implementation for getUsagePermission.
function api_getUsagePermission(callback){	

	// Callback for a successful execution.
	var successCb = function (cbObject){
		// Set the remote key control mode. Refer to the Signage.KeyOperationMode for more detail.
		var remoteKeyOperationMode = cbObject.remoteKeyOperationMode;
		
		// Set the local built-in key control mode. Refer to the Signage.KeyOperationMode for more detail.
		var localKeyOperationMod = cbObject.localKeyOperationMod;

		console.log("remoteKeyOperationMode: " + remoteKeyOperationMode);
		console.log("localKeyOperationMode: " + localKeyOperationMod);
		
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
	signage.getUsagePermission(successCb, failureCb);	
}