
function api_deleteOnTimer(callback){
	
    var options = {};
    options.hour = 9;
    options.minute = 0;
    options.week = Power.TimerWeek.MONDAY + Power.TimerWeek.FRIDAY;
    options.inputSource = "ext://hdmi:1";
    
	
    function successCb() {
    	callback("deleteOnTimer success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Power().deleteOnTimer(successCb, failureCb, options);
}