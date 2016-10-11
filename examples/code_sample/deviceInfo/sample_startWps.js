function api_startWps(callback){
	
	
	function successCb() {                                            
	   console.log("successCb");       
	   callback("startWps success");
	}                                                                 
	                                                                  
	function failureCb(cbObject) {                                    
	   var errorCode = cbObject.errorCode;                            
	   var errorText = cbObject.errorText;                            
	   console.log ("Error Code [" + errorCode + "]: " + errorText);  
	   callback(cbObject);
	}                                                                 
	                                                                  
	var deviceInfo = new DeviceInfo();                                
	                                                                  
	var options = {                                                   
		method : "PBC"                                                 
	};                                                                
	                                                                  
	deviceInfo.startWps(successCb, failureCb, options);               
	
}