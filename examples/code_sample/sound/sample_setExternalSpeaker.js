



function api_setExternalSpeaker(callback){
	
    var options = {};
    options.externalSpeaker = true;
	
    function successCb() {
    	callback("setExternalSpeaker success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Sound().setExternalSpeaker(successCb, failureCb, options);
}