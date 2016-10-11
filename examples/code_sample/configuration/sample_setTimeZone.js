
function api_setTimeZone(callback){
	
    var timeZone = {
        continent : "Asia",
        country : "South Korea",
        city : "Seoul"
    };
    
    var options = {
            timeZone : timeZone
    };
    
    function successCb() {
    	callback("setCurrentTime success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Configuration().setTimeZone(successCb, failureCb, options);
}