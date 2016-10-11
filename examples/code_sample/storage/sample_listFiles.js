function api_listFiles(callback){
	// Callback for a successful execution.
	var successCb = function (cbObject){
		// Get the list of file info in given directory, as an array.
		var files = cbObject.files;
		for(var i = 0 ; i < files.length; ++i){
			var fileInfo = files[i];	
			// Name of this file.
			console.log("File Name: " + fileInfo.name);
		}

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
	
	// Create storage object and invoke the API..	
	var storage = new Storage();
	// The parameters.
	// directory : The URI for the directory where the files will be listed. 
	// It can be directory in the internal memory or in the attached usb storage device.
	var options = { 
			path: 'file://internal/list/me/',
		}; 

	storage.listFiles(successCb, failureCb, options);
	
	var options_usb = { 
			path: 'file://usb:1/list/me/',
		}; 

	storage.listFiles(successCb, failureCb, options_usb);

	
}