function api_exists(callback){
	// Succcess callback.
	var successCb = function (cbObject){
		//the exists property is a boolean value, which will be true if the file exists.
		var exists = cbObject.exists;
		console.log( "The file exists: " + exists); 
	}; 

	// Failure callback
	var failureCb = function(cbObject){ 
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText; 
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
	};

	// Exists parameter. The path to the file or directory which will be checked for the existence.
	// path can be in the internal directory or in the connected usb storage device.
	var existsOption = { 
			path: "file://internal/to/be/or/not/to/be"
	}; 

	var storage = new Storage();
	storage.exists(successCb, failureCb, existsOption);
	
	// Exists parameter. The path to the file or directory which will be checked for the existence.
	// path can be in the internal directory or in the connected usb storage device.
	var existsOption_usb = { 
			path: "file://usb:1/to/be/or/not/to/be"
	}; 

	storage.exists(successCb, failureCb, existsOption_usb);

}