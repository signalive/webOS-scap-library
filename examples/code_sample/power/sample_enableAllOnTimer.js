

function api_enableAllOnTimer(callback){
	
    var options = {};
    options.allOnTimer = true;
	
    function successCb() {
    	callback("enableAllOnTimer success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Power().enableAllOnTimer(successCb, failureCb, options);
}