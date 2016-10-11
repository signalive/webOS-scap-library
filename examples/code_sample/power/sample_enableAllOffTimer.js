

function api_enableAllOffTimer(callback){
	
    var options = {};
    options.allOffTimer = true;
	
    function successCb() {
    	callback("enableAllOffTimer success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Power().enableAllOffTimer(successCb, failureCb, options);
}