function api_moveFile_file(callback){
	// This API will move a file or directory.
	// This example will move a file.
	var successCb = function (){
		console.log("Move done.");
	}; 

	var failureCb = function(cbObject){ 
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText; 
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
	};

	// file://internal/org.txt will be renamed as file://internal/new.txt
	var options = { 
		oldPath: 'file://internal/org.txt',
		newPath : 'file://internal/new.txt'		
	};

	var storage = new Storage();
	storage.moveFile(successCb, failureCb, options);
}

function api_moveFile_dir(callback){
	// This API will move a file or directory.
	// This example will move a directory.

	var successCb = function (){
		console.log("Move done.");
	}; 

	var failureCb = function(cbObject){ 
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText; 
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
	};

	// file://internal/oldDir directory will be renamed as file://internal/newDir
	// The file://internal/newDir directory should be nonexistent or empty for thie API to be successfully executed.
	
	var options = { 
		oldPath: 'file://internal/oldDir',
		newPath : 'file://internal/newDir'
	};

	var storage = new Storage();
	storage.moveFile(successCb, failureCb, options);
}

