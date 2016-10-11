function api_connectWifi(callback){
	
	
	function successCb() {                                          
	   console.log("successCb");         
	   callback("connectWifi success");
	}                                                               
	                                                                
	function failureCb(cbObject) {                                  
	   var errorCode = cbObject.errorCode;                          
	   var errorText = cbObject.errorText;                          
	   console.log ("Error Code [" + errorCode + "]: " + errorText);
	   callback(cbObject);
	}                                                               
	                                                                
	var deviceInfo = new DeviceInfo();                              
	                                                                
	var options = {                                                 
	   ssid : "AP_NAME",                                            
	   password : "12341234"                                        
	};                                                              
	                                                                
	deviceInfo.connectWifi(successCb, failureCb, options);          
	
}