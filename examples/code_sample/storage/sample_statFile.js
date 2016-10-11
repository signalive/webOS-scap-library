function api_statFile(callback){
	// This API will get the information for a given file.
	
	var successCb = function (cbObject){
		console.log( "Show File Stat: " ); 
		console.log( "File Type: " + cbObject.stat.type );
		console.log( "File size (bytes): " + cbObject.stat.size );
		console.log( "Last Accessed: " + cbObject.stat.atime );
		console.log( "Last Modified: " + cbObject.stat.mtime );
		console.log( "Created: " + cbObject.stat.ctime );
	}; 

	var failureCb = function(cbObject){ 
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText; 
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
	};

	var options = { 
			path: 'file://internal/myFile.txt',
	}; 

	var storage = new Storage();
	storage.statFile(successCb, failureCb, options);

}