function api_mkdir(callback){
	// Callback for a successful execution.
	var successCb = function (){
		console.log( "Direcotry created"); 

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
	var storage = new Storage();

	// parameters for mkdir options..
	// directory can be craeted in the internal memory or in the connected usb.
	var mkdirOption = { 
			path: "file://internal/create/this/directory"
	}; 
	
	// Directory will be created recursively.
	storage.mkdir(successCb, failureCb, mkdirOption);
	
	// parameters for mkdir options..
	// directory can be craeted in the internal memory or in the connected usb.
	var mkdirOption_usb = { 
			path: "file://usb:1/create/this/directory"
	}; 
	
	// Directory will be created recursively.
	storage.mkdir(successCb, failureCb, mkdirOption_usb);

}