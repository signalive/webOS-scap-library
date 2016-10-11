function api_setTileInfo(callback, params){		
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		callback("Set tile mode successful");
	};

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};
	
	// setTileInfo parameters.
	// enable: Enable/diable set tile info.
	// row : number of rows. (1~15)
	// column : number of columns. (1~15)
	// tileId : Tile id for this monitor (1 ~ row * column)
	// naturalMode : Enable/diable naturalMode
	var options = {
		    tileInfo: {
		            enabled: true,
		            row : 2,
		            column : 2,
		            tileId: 2,
		            naturalMode : true
		   }
		};
	
	// Create signage object and invoke the API with parameters.	
	var signage = new Signage();
	signage.setTileInfo(successCb, failureCb, options);
}