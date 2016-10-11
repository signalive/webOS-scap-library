

function api_setPictureProperty(callback){
	
    var options = {};
    options.backlight = 50;
    options.contrast = 50;
    options.brightness = 50;
    options.color = 50;
    options.tint = 50;
	
    function successCb() {
    	callback("setPictureProperty success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Configuration().setPictureProperty(successCb, failureCb, options);
}