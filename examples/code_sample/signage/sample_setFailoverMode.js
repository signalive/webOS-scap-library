//Sample Implementation for setFailoverMode.
function api_setFailoverMode(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.
	var successCb = function (){
		console.log("successfully Set");
		callback("Set Failover mode successful");
	}; 

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		returnStr +=" Error Code [" + errorCode + "]: " + errorText;

		callback(returnStr);
	};

	// Failover parameters.
	// mode is of Signage.FailoverMode type.
	// priority is an ordered array where 0th input has the highest priority.
	// Note: when mode is AUTO, priority parameter is NOT ALLOWED!!!
	var options = {
			failoverMode : {
			    mode: Signage.FailoverMode.MANUAL,
			    priority : ['ext://hdmi:1','ext://hdmi:2','ext://dvi:1','ext://dp:1','ext://internal_memory']
			}
	};

	// Create signage object and invoke the API with parameters.
	var signage = new Signage();

	signage.setFailoverMode(successCb, failureCb, options);

}