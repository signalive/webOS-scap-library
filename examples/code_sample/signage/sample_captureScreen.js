function api_captureScreen(callback){
	// Callback for a successful execution.
	var successCb = function (cbObject){
		// Internal path for where the screen capture image is stored.
		var caputre_image_path = cbObject.imagePath;

		console.log("Captured screen image stored at : " + caputre_image_path);
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
	
	var options = { 
        save : false
    }; 

	// invoke the method with callbacks.
	signage.captureScreen(successCb, failureCb, options);	
}