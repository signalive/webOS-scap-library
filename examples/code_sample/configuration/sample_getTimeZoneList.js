function api_getTimeZoneList(callback){
    function successCb(cbObject) {
        
        console.log("cbObject : " + JSON.stringify(cbObject));
        
        for (var i = cbObject.timeZone.length-1; i>=0; i--) {
            console.log("timeZone [" + i + "].continent : " + cbObject.timeZone[i].continent);
            console.log("timeZone [" + i + "].country : " + cbObject.timeZone[i].country);
            console.log("timeZone [" + i + "].city : " + cbObject.timeZone[i].city);            
        }
        
        callback(cbObject);
	}
	
	function failureCb(cbObject) {
	   var errorCode = cbObject.errorCode;
	   var errorText = cbObject.errorText;
	   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);
	   callback(cbObject);
	}
	
	conf = new Configuration();
	conf.getTimeZoneList(successCb, failureCb);
}