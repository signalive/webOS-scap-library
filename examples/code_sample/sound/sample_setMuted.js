

function api_setMuted(callback){
	
    var options = {};
    options.muted = true;
	
    function successCb() {
    	callback("setMuted success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Sound().setMuted(successCb, failureCb, options);
}