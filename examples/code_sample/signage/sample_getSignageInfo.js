//Sample Implementation for getSignageInfo.
function api_getSignageInfo(callback){
	// Callback for a successful execution.
	var successCb = function (cbObject){
		// Portrait mode. Refer to the Signage.OsdPortraitMode for more detail.
		var portraitMode= cbObject.portraitMode;

		// ISM(Image Sticking Minimization) method. Refer to the Signage.IsmMethod for more detail.
		var ismMethod= cbObject.ismMethod;
		
		// Digital Audio Input Mode. An object with input type/Signage.DigitalAudioInput pair.
		var digitalAudioInputMode= cbObject.digitalAudioInputMode;

		console.log("portraitMode: " + portraitMode);
		console.log("ismMethod: " + ismMethod);
		console.log("digitalAudioInputMode: " + digitalAudioInputMode);
		console.log("checkScreen: " + cbObject.checkScreen);
		
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
	signage.getSignageInfo(successCb, failureCb);	
}