function api_copyFile(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		callback("File Copy successful");
	};

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};
	
	// copy file parameters.
	// source : The file to copy from. This file can be a remote file, a local internal file, or a file in a USB memory stick.
	// destination : This is where this file is copied to. It can only be a file in internal memory.
	var options = {
			source: 'http://10.177.172.186:2714/readme.txt',
			destination : 'file://internal/new_one.txt'
	};
	
	// Create storage object and invoke the API with parameters.	
	var storage = new Storage();
	storage.copyFile(successCb, failureCb, options);
}