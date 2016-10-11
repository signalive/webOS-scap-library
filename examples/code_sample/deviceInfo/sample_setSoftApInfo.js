function api_setSoftApInfo(callback){
	
	
	function successCb() {                                                           
        
	    console.log("successCb");   
	    callback("setNetworkInfo success");
	}                                                                                        
	                                                                                         
	function failureCb(cbObject) {                                                           
	   var errorCode = cbObject.errorCode;                                                   
	   var errorText = cbObject.errorText;                                                   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);      
	   
	   callback(cbObject);
	}                                                                                        
	                                                                                         
	var deviceInfo = new DeviceInfo();                    
	var options = {
	           enabled : true,
	           ssid : "1A2B3C4D5E1A2B3C4D5E1A2B3C4D5EFF",
	           securityKey :"123456"
	};
	
	deviceInfo.setSoftApInfo(successCb, failureCb, options);                                            

}