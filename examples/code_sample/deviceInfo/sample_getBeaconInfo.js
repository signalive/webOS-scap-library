function api_getBeaconInfo(callback){
	
	
	function successCb(cbObject) {                                                           
        
	   console.log("cbObject : " + JSON.stringify(cbObject));                                
	                                                                                         
	   console.log("enabled : " + cbObject.enabled);
	   console.log("uuid : " + cbObject.uuid);
	   console.log("major : " + cbObject.major);
	   console.log("minor : " + cbObject.minor);
	   
	   callback(cbObject);
	}                                                                                        
	                                                                                         
	function failureCb(cbObject) {                                                           
	   var errorCode = cbObject.errorCode;                                                   
	   var errorText = cbObject.errorText;                                                   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);      
	   
	   callback(cbObject);
	}                                                                                        
	                                                                                         
	var deviceInfo = new DeviceInfo();                                                       
	deviceInfo.getBeaconInfo(successCb, failureCb);                                            

}