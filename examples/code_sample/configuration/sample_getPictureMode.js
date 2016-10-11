
function api_getPictureMode(callback){
	
    function successCb(cbObject) {
        console.log("cbObject : " + JSON.stringify(cbObject));
        console.log("mode : " + cbObject.mode);

        callback(cbObject);
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        
        callback(cbObject);
    }
	
	new Configuration().getPictureMode(successCb, failureCb);
}