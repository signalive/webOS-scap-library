function api_getNetworkInfo(callback){
    function successCb(cbObject) {
    	console.log("cbObject : " + JSON.stringify(cbObject));
        console.log("isInternetConnectionAvailable : " + cbObject.isInternetConnectionAvailable);
        console.log("wired.state : " + cbObject.wired.state);
        console.log("wired.method : " + cbObject.wired.method);
        console.log("wired.ipAddress : " + cbObject.wired.ipAddress);
        console.log("wired.netmask : " + cbObject.wired.netmask);
        console.log("wired.dns1 : " + cbObject.wired.dns1);
        console.log("wired.dns2 : " + cbObject.wired.dns2);
        console.log("wifi.state : " + cbObject.wifi.state);
        console.log("wifi.method : " + cbObject.wifi.method);
        console.log("wifi.ipAddress : " + cbObject.wifi.ipAddress);
        console.log("wifi.netmask : " + cbObject.wifi.netmask);
        console.log("wifi.dns1 : " + cbObject.wifi.dns1);
        console.log("wifi.dns2 : " + cbObject.wifi.dns2);
        
        callback(cbObject);
	}
	
	function failureCb(cbObject) {
	   var errorCode = cbObject.errorCode;
	   var errorText = cbObject.errorText;
	   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);
	   callback(cbObject);
	}
	
	new DeviceInfo().getNetworkInfo(successCb, failureCb);
}