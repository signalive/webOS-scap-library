function api_enableCheckScreen(callback){

	var successCb = function (){
		console.log("successfully Set");
		callback("enableCheckScreen successful");
	}; 

	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		
		callback(cbObject);
	};

	var options = {
	        checkScreen : true
	};

	var signage = new Signage();
	
	signage.enableCheckScreen(successCb, failureCb, options);
}