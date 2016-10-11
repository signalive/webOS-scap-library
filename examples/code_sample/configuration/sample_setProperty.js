

function api_setProperty(callback){
	
    var options = '{"alias":"display_1"}';
	
    function successCb() {
    	callback("setPictureProperty success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Configuration().setProperty(successCb, failureCb, options);
}