//Sample Implementation for getSystemMonitoringInfo.
function api_getSystemMonitoringInfo(callback){	
	// Callback for a successful execution.
	var successCb = function (cbObject){
		// True if monitoring for fan events, false otherwise.
		var fan =  cbObject.fan;
		
		// True if monitoring for signal events, false otherwise.		
		var signal =  cbObject.signal;
		
		// True if monitoring for lamp events, false otherwise.		
		var lamp =  cbObject.lamp;
		
		// True if monitoring for screen events, false otherwise.
		var screen =  cbObject.screen;

		// True if monitoring for temperature events, false otherwise.
		var temperature =  cbObject.temperature;		
		
		console.log("Monitor Fan: " + fan);
		console.log("Monitor signal: " + signal);
		console.log("Monitor lamp: " + lamp);
		console.log("Monitor screen: " + screen);
		console.log("Monitor temperature: " + temperature);

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
	signage.getSystemMonitoringInfo(successCb, failureCb);	
}