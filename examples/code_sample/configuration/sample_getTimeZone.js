function api_getTimeZone(callback){
    function successCb(cbObject) {
        
        console.log("cbObject : " + JSON.stringify(cbObject));
        
        console.log("timeZone.continent : " + cbObject.timeZone.continent);
        console.log("timeZone.country : " + cbObject.timeZone.country);
        console.log("timeZone.city : " + cbObject.timeZone.city);            
    
        callback(cbObject);
	}
	
	function failureCb(cbObject) {
	   var errorCode = cbObject.errorCode;
	   var errorText = cbObject.errorText;
	   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);
	   callback(cbObject);
	}
	
	conf = new Configuration();
	conf.getTimeZone(successCb, failureCb);
}