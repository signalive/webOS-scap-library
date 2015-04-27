function api_removeFile(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.	
	var successCb = function (){
		console.log("Removing File done.");

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
	
	// Create storage object and invoke the API.	
	var storage = new Storage();
	// The parameters.
	// file : The name of the file to be removed. Only files in the internal memory can be removed.
	var options = { 
		file: 'file://internal/delete_me.txt',
	}; 

	storage.removeFile(successCb, failureCb, options);
}