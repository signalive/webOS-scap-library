function api_getSoftApInfo(callback){
	
	
	function successCb(cbObject) {                                                           
        
	   console.log("cbObject : " + JSON.stringify(cbObject));                                
	                                                                                         
	   console.log("enabled : " + cbObject.enabled);
	   console.log("ssid : " + cbObject.ssid);
	   console.log("securityKey : " + cbObject.securityKey);
	   
	   callback(cbObject);
	}                                                                                        
	                                                                                         
	function failureCb(cbObject) {                                                           
	   var errorCode = cbObject.errorCode;                                                   
	   var errorText = cbObject.errorText;                                                   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);      
	   
	   callback(cbObject);
	}                                                                                        
	                                                                                         
	var deviceInfo = new DeviceInfo();                                                       
	deviceInfo.getSoftApInfo(successCb, failureCb);                                            

}