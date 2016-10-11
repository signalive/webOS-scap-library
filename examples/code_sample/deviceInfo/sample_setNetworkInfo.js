function api_setNetworkInfo(callback){
	
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
	
	var wired = {                                                         
	   enabled : true,                                                    
	   method : "manual",                                                 
	   ipAddress : "192.168.0.2",                                         
	   netmask : "255.255.255.0",                                         
	   gateway : "192.168.0.1",                                           
	   dns1 : "156.147.135.180",                                          
	   dns2 : "156.147.135.181"                                           
	};
	
	var wifi = {                                                          
	   enabled : true,                                                    
	   method : "manual",                                                 
	   ipAddress : "192.168.0.2",                                         
	   netmask : "255.255.255.0",                                         
	   gateway : "192.168.0.1",                                           
	   dns1 : "156.147.135.180",                                          
	   dns2 : "156.147.135.181"                                           
	};                                                       
	
	var options = {                                                       
	   wired : wired,                                                     
	   wifi : wifi                                                        
	};                                                       
	
	deviceInfo.setNetworkInfo(successCb, failureCb, options);             

}