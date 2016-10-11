

function api_setPictureMode(callback){
	
    var options = {};
    options.mode = Configuration.PictureMode.VIVID;
    
    function successCb() {
    	callback("setPictureMode success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Configuration().setPictureMode(successCb, failureCb, options);
}