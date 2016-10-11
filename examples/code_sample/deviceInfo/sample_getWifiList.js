function api_getWifiList(callback){
	
	
	function successCb(cbObject) {                                                           
        
	   console.log("cbObject : " + JSON.stringify(cbObject));                                
	                                                                                         
	   for(var i=0; i < cbObject.networkInfo.length; i++) {                                  
	       console.log("network info : ssid " + cbObject.networkInfo[i].ssid);               
	       console.log("network info : signalLevel " + cbObject.networkInfo[i].signalLevel); 
	   }                                                                                     
	   
	   callback(cbObject);
	}                                                                                        
	                                                                                         
	function failureCb(cbObject) {                                                           
	   var errorCode = cbObject.errorCode;                                                   
	   var errorText = cbObject.errorText;                                                   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);      
	   
	   callback(cbObject);
	}                                                                                        
	                                                                                         
	var deviceInfo = new DeviceInfo();                                                       
	deviceInfo.getWifiList(successCb, failureCb);                                            

}