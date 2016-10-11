

function api_setContentRotation(callback){
	
    var options = {degree : "90", aspectRatio : "full"};
    
    
    function successCb() {
    	callback("setVideoSize success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Video().setContentRotation(successCb, failureCb, options);
}