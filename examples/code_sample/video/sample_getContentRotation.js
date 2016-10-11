

function api_getContentRotation(callback){
	
    function successCb(cbObject) {
        console.log("cbObject : " + JSON.stringify(cbObject.source));

        console.log("degree : " + cbObject.degree);
        console.log("aspectRatio : " + cbObject.aspectRatio);
        
    	callback(cbObject);
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Video().getContentRotation(successCb, failureCb);
}