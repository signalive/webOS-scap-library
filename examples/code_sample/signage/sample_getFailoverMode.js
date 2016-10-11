//Sample Implementation for getFailoverMode.
function api_getFailoverMode(callback){
	// Callback for a successful execution.
	var  successCb = function(cbObject){
		// Get failover mode. Refer to the Signage.FailoverMode for details.
		var mode = cbObject.mode;
		
		// Get failover input priority.
		// This priority will determine which input will be used when the current input is lost.
		var priority = cbObject.priority;
		
		console.log('Failover Mode : ' + mode);		
		
		// Priority will be returned as a sorted array where the 0th item has the most priority. 
		for(var i=0;i< priority.length;++i){
			console.log('Priority' +i+ " : " + priority[i]);;
		}
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
	
	// Create signage object.
	var signage = new Signage();
	
	// invoke the method with callbacks.
	signage.getFailoverMode(successCb, failureCb);
}