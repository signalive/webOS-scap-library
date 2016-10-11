


function api_addOffTimer(callback){
	
    var options = {};
    options.hour = 9;
    options.minute = 0;
    options.week = Power.TimerWeek.MONDAY + Power.TimerWeek.FRIDAY;
	
    function successCb() {
    	callback("addOffTimer success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Power().addOffTimer(successCb, failureCb, options);
}