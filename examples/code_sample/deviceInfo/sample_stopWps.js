function api_stopWps(callback){
	
	
	function successCb() {                                           
	   console.log("successCb");
	   callback("stopWps success");
	}                                                                
	                                                                 
	function failureCb(cbObject) {                                   
	   var errorCode = cbObject.errorCode;                           
	   var errorText = cbObject.errorText;                           
	   console.log ("Error Code [" + errorCode + "]: " + errorText);
	   callback(cbObject);
	}                                                                
	                                                                 
	var deviceInfo = new DeviceInfo();                               
	                                                                 
	deviceInfo.stopWps(successCb, failureCb);                        
	
}