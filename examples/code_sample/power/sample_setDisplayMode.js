

function api_setDisplayMode(callback){
	
    var options = {};
    options.displayMode = Power.DisplayMode.DISPLAY_OFF;
	
    function successCb() {
    	callback("setDisplayMode success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Power().setDisplayMode(successCb, failureCb, options);
}