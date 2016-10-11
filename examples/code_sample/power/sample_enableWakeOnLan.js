

function api_enableWakeOnLan(callback){
	
    var options = {};
    options.wakeOnLan = true;
	
    function successCb() {
    	callback("enableWakeOnLan success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Power().enableWakeOnLan(successCb, failureCb, options);
}