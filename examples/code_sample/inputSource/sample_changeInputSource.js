
function api_changeInputSource(callback){
	
	var options = {};
	options.src = "ext://hdmi:1";
	
    function successCb() {
    	callback("changeInputSource success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new InputSource().changeInputSource(successCb, failureCb, options);
}