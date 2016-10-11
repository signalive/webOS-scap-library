

function api_getProperty(callback){
	
    function successCb(cbObject) {
        console.log("cbObject : " + JSON.stringify(cbObject));

        callback(cbObject);
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        
        callback(cbObject);
    }
    
    var options = '{"keys":["alias"]}';
	
	new Configuration().getProperty(successCb, failureCb, options);
}