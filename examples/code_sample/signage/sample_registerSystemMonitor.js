function api_registerSystemMonitor(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		callback("Register system monitor successful");
	}; 

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		
		callback(cbObject);
	};

	// Event Handelr callback.
	// Thie function will be invoked when system events are emitted.
	// Event type will have event source, event type, and event data as its attributes.
	// For more information on the Event type and event data, refer to Signage.EventType and Signage.MonitoringSource for event source.
	var eventHandlercb = function(event){
		console.log("Received Event from : " + event.source);
		console.log("Event Type is : " + event.type);
		console.log("Additional Info : " + event.data);
	}
	
	// registerSystemMonitor parameters.
	// If any of the input value for the monitorConfiguration is true, events from that input source will be emitted.
	// Those events will be handled by the event handler call back method.
	var options = {
			monitorConfiguration : {
				fan: true,
				signal : true,
				lamp : true,
				screen : true,
				temperature: true
			},
			eventHandler : eventHandlercb				
	};

	// Create signage object and invoke the API with parameters.
	var signage = new Signage();
	signage.registerSystemMonitor(successCb, failureCb, options);
}