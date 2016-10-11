function api_writeFile_binary(callback){

	// This example will write binary data to a file.

	var successCb = function (cbObject){
		console.log( "Successfully writen " + cbObject.written + " bytes" ); 
	}; 

	var failureCb = function(cbObject){ 
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText; 
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
	};


	//Read a file as binary with an ajax call.
	var oReq = new XMLHttpRequest();
	oReq.open("GET", '/my_file.data', true);
	oReq.responseType = "arraybuffer";
	oReq.onload = function (oEvent) {
		// Read data as ArrayBuffer
		var arrayBuffer = oReq.response; 

		if (arrayBuffer) {
			var uint8View =  new Int8Array(arrayBuffer);
			var array = [];
			for(var i=0;i < uint8View.length;++i){
				array[i] = uint8View[i];
			}

			
			// Write the binary data
			var options = { 
					data: array,
					path: 'file://internal/data.dat',
					positon : 0,
					flag :'w',
					offset:0,
					length : array.length,
					encoding: 'binary'
			}; 

			var storage = new Storage();
			storage.writeFile(successCb, failureCb, options);
		}
	};

	oReq.send(null);	
} 

function api_writeFile_binary(callback){

	var successCb = function (cbObject){
		console.log( "Successfully writen " + cbObject.written + " bytes" ); 
	}; 

	var failureCb = function(cbObject){ 
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText; 
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
	};

	// write Text data, use utf-8 encoding, write all text.
	var textData = "Hello SCAP!!!!!"; 
	var options = { 
			data: textData,
			path: 'file://internal/text.txt',
			positon : 0,
			flag :'w',
			offset:0,
			length : textData.length,
			encoding: 'utf8'
	}; 

	var storage = new Storage();
	storage.writeFile(successCb, failureCb, options);
} 
