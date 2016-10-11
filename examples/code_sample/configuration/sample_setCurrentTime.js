
function api_setCurrentTime(callback){
	
    var options = {};
    options.year = 2014;
    options.month = 1;
    options.day = 6;
    options.hour = 14;
    options.minute = 40;
    options.sec = 50;

    function successCb() {
    	callback("setCurrentTime success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Configuration().setCurrentTime(successCb, failureCb, options);
}