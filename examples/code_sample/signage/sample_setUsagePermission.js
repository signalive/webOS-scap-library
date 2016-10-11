function api_setUsagePermission(callback, params){
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		callback("Set usage permission successful");
	};

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};

	//Usage Permission parameters.
	// remoteKeyOperationMode : Usage permission policy for the remote key inputs. refer to the Signage.KeyOperationMode for available modes.
	// localKeyOperationMode : Usage permission policy for the built in local key inputs. refer to the Signage.KeyOperationMode for available modes.
	var options = {
			policy: {
				remoteKeyOperationMode: Signage.KeyOperationMode.POWER_ONLY,
				localKeyOperationMode: Signage.KeyOperationMode.POWER_ONLY,
			}
	};

	// Create signage object and invoke the API with parameters.
	var signage = new Signage();
	signage.setUsagePermission(successCb, failureCb, options);
}