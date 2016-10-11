function _arrayBufferToBase64( buffer ) {
	var binary = '';
	var bytes = new Uint8Array( buffer );
	var len = bytes.byteLength;
	for (var i = 0; i < len; i++) {
		binary += String.fromCharCode( bytes[ i ] );
	}
	return window.btoa( binary );
}


function api_readFile_binary(callback){
	// This example will read file as binary.
	var successCb = function (cbObject){
		// If file is read as binary, array of uint8 will be returned. 
		// Create an image element, and set the source as the binary data.

		var binary_data = cbObject.data;	// This will be an ArrayBuffer
		var data_base64 = _arrayBufferToBase64(binary_data);
		var ele = document.createElement('img');
		ele.src = "data:image/jpeg;base64, " + data_base64;
		document.body.appendChild(ele); 
	}; 

	var failureCb = function(cbObject){ 
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText; 
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
	};
	// Read file from the start, read the whole file, and read as binary
	var options = { 
			path: "file://internal/image.jpg",
			positon : 0,
			encoding: 'binary'
	}; 

	var storage = new Storage();

	storage.readFile(successCb, failureCb, options);
}


function api_readFile_base64(callback){
	// This example will read binary file data as base64 encoded string.
	var successCb = function (cbObject){
		// If file is read as binary and base64 encoded string will return.
		// Create an image element, and set the source as the binary data.
		var base64_data = cbObject.data;	//Binary data encoded in base64 format.
		var ele = document.createElement('img');
		ele.src = "data:image/jpeg;base64, " + base64_data;
		document.body.appendChild(ele); 
	}; 

	var failureCb = function(cbObject){ 
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText; 
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
	};
	
	var options = { 
			path: "file://internal/text.txt",
			positon : 0,
			encoding: 'base64'
	}; 

	var storage = new Storage();

	storage.readFile(successCb, failureCb, options);
	
}

function api_readFile_text(callback){
	// This example will read file as text.
	var successCb = function (cbObject){
		// If file is read as text, utf encoded string will return.
		// Create an image element, and set the source as the binary data.
		var data_text = cbObject.data;
		var ele = document.createElement('div');
		ele.innerHTML = "Text is read: " + data_text;
		document.body.appendChild(ele); 
	}; 

	var failureCb = function(cbObject){ 
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText; 
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
	};

	var options = { 
			path: "file://internal/text.txt",
			positon : 0,
			encoding: 'utf8'
	}; 

	var storage = new Storage();

	storage.readFile(successCb, failureCb, options);
}



