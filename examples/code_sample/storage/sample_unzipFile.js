function api_unzipFile(callback){
	// This API will unzip a ZIP file stored in the device.

	var successCb = function (){
		console.log("Unzip File successful");
		callback();
	}; 

	var failureCb = function(cbObject){ 
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText; 
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
	};

	var options = { 
			zipPath: 'file://internal/myFile.zip',
			targetPath: 'file://internal/unzip/to/here'  // Unziped contents of the zip file will be stored here.
	};

	var storage = new Storage();
	storage.unzipFile(successCb, failureCb, options);
}