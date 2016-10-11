function api_setBeaconInfo(callback){
	
	
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
	           uuid : "1A2B3C4D5E1A2B3C4D5E1A2B3C4D5EFF",
	           major :1234,
	           minor :4321
	};
	
	deviceInfo.setBeaconInfo(successCb, failureCb, options);                                            

}