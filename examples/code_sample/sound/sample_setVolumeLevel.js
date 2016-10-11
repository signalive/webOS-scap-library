
function api_setVolumeLevel(callback){
	
    var options = {};
    options.level = 15;
	
    function successCb() {
    	callback("setVolumeLevel success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Sound().setVolumeLevel(successCb, failureCb, options);
}