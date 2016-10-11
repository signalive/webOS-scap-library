function api_setIsmMethod(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		callback("Set ISM mode successful");
	}; 

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		
		callback(cbObject);
	};

	// The ISM (Image Sticking Minimization method to set).
	// Refer to the Signage.IsmMethod for more information.
	var options = {
			ismMethod : Signage.IsmMethod.COLORWASH
	};

	// Create signage object and invoke the API with parameters.
	var signage = new Signage();
	
	signage.setIsmMethod(successCb, failureCb, options);
}