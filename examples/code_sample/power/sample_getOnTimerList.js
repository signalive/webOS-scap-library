
function api_getOnTimerList(callback){

    function successCb(cbObject) {
        var timerList = cbObject.timerList;
        for ( var i = 0; i < timerList.length; i++) {
            console.log("timerList[" + i + "] : " + JSON.stringify(timerList[i]));
            console.log("timerList[" + i + "].hour : " + timerList[i].hour);
            console.log("timerList[" + i + "].minute : " + timerList[i].minute);
            console.log("timerList[" + i + "].week : " + timerList[i].week);
            console.log("timerList[" + i + "].inputSource : " + timerList[i].inputSource);
        }
        
        callback(cbObject);
	}
	
	function failureCb(cbObject) {
	   var errorCode = cbObject.errorCode;
	   var errorText = cbObject.errorText;
	   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);
	   callback(cbObject);
	}
	
	new Power().getOnTimerList(successCb, failureCb);
}