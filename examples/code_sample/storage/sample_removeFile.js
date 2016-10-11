function api_removeFile(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.	
	var successCb = function (){
		console.log("Removing File done.");

		callback("remove file success");	  	
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
	// file : The name of the file to be removed..
	var options_file = { 
		file: 'file://internal/delete_me.txt',
	}; 

	storage.removeFile(successCb, failureCb, options_file);
	
	
	// The parameters.
	// file : The name of the file to be removed. A directory can be removed.
	var options_dir = { 
		file: 'file://internal/delete/this/dir',
		recursive : true		
	}; 

	storage.removeFile(successCb, failureCb, options_dir);
	
	// The parameters.
	// file : The name of the file to be removed. A file in the usb can be removed.
	var options_usb = { 
		file: 'file://usb:1/delete/this/file.txt',
	}; 

	storage.removeFile(successCb, failureCb, options_usb);
	
}