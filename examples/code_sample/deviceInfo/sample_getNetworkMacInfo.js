function api_getNetworkMacInfo(callback){
    
    function successCb(cbObject) {
    	console.log("cbObject : " + JSON.stringify(cbObject));
        console.log("wiredInfo.macAddress : " + cbObject.wiredInfo.macAddress);
        
        callback(cbObject);
	}
	
	function failureCb(cbObject) {
	   var errorCode = cbObject.errorCode;
	   var errorText = cbObject.errorText;
	   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);
	   callback(cbObject);
	}
	
	new DeviceInfo().getNetworkMacInfo(successCb, failureCb);
}