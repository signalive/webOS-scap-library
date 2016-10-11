//Sample Implementation for getTileInfo.
function api_getTileInfo(callback){
	// Callback for a successful execution.
	var successCb = function (cbObject){
		 // Enable/Disable tile mode.
		 var enabled = cbObject.enabled;
		 
		 // Total number of rows.		 
		 var row = cbObject.row;
		 
		 // Total number of columns.		 		 
		 var column = cbObject.column;
		 
		 // The tile id for this monitor.
		 var tileId = cbObject.tileId;
		 
		 // Enable/Disable natural mode.
		 var naturalMode = cbObject.naturalMode;
		 
		 console.log("enable: " + enabled);
		 console.log("row: " + row);	
		 console.log("column: " + column);
		 console.log("tileId: " + tileId);	
		 console.log("naturalMode: " + naturalMode);	
		 
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
	
	// Create the signage object.	
	var signage = new Signage();

	// invoke the method with callbacks.
	signage.getTileInfo(successCb, failureCb);	
}