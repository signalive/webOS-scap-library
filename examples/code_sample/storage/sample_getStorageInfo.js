function api_getStorageInfo(callback){
	// Callback for a successful execution.
	var successCb = function (cbObject){
		// Total internal memory size, in KB.
		var total = cbObject.totalSpace;

		// Free internal memory, in KB
		var free = cbObject.freeSpace;
		
		//Total used memory, in KB
		var used = cbObject.usedSize;
		
	  	console.log( "Total: " + total + "Kbytes"); 
	  	console.log( "Free: " + free + "Kbytes"); 
	  	console.log( "Used: " + used + "Kbytes"); 

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
	storage.getStorageInfo(successCb, failureCb);
}