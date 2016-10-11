function api_setDigitalAudioInputMode(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.
	var successCb = function (){
		console.log("successfully Set");
		callback("Set digital audio input mode successful");
	};
	
	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};

	// digitalAudioInputList parameters.
	// the digitalAudioInputList is am object where each input URI is mapped to a Signage.DigitalAudioInput to use for the input.
	var options = {
			digitalAudioInputList : {
				'ext://hdmi:1' : Signage.DigitalAudioInput.HDMI_DP,
			 	'ext://hdmi:2' : Signage.DigitalAudioInput.HDMI_DP,
			 	'ext://dp:1' :   Signage.DigitalAudioInput.AUDIO_IN
			 }	
	};
	
	// Create signage object and invoke the API with parameters.

	var signage = new Signage();

	signage.setDigitalAudioInputMode(successCb, failureCb, options);
}