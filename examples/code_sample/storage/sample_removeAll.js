function api_removeAll(callback){
	// This API will remove all files in USB or internal storage.
	
	var successCb = function (){
		console.log( "Removed all files " );
		callback();
	}; 

	var failureCb = function(cbObject){ 
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText; 
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
	};

	var options_internal = { 
			device: 'internal' // This will remove all files in the internal memory space.	
							   // If the value of 'device' is 'usb:1', files in /procentric/scap/application/content for usb storage device
							   // inserted at USB port 1 will be removed.
	};

	var storage = new Storage();
	storage.removeAll(successCb, failureCb, options_internal);
}

