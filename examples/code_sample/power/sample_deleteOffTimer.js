


function api_deleteOffTimer(callback){
	
    var options = {};
    options.hour = 9;
    options.minute = 0;
    options.week = Power.TimerWeek.MONDAY + Power.TimerWeek.FRIDAY;
	
    function successCb() {
    	callback("deleteOffTimer success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + erroCode + "]: " + errorText);
        callback(cbObject);
    }

    new Power().deleteOffTimer(successCb, failureCb, options);
}