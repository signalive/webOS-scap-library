

function api_getVideoStatus(callback){
	
    function successCb(cbObject) {
        console.log("cbObject : " + JSON.stringify(cbObject.source));

        console.log("source.x : " + cbObject.source.x);
        console.log("source.y : " + cbObject.source.y);
        console.log("source.width : " + cbObject.source.width);
        console.log("source.height : " + cbObject.source.height);
        
    	callback(cbObject);
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Video().getVideoStatus(successCb, failureCb);
}