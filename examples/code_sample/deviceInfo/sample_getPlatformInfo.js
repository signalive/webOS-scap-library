
function api_getPlatformInfo(callback){
    function successCb(cbObject) {
    	console.log("cbObject : " + JSON.stringify(cbObject));
        console.log("hardwareVersion : " + cbObject.hardwareVersion);
        console.log("modelName : " + cbObject.modelName);
        console.log("osdResolution : " + cbObject.osdResolution);
        console.log("platformName : " + cbObject.platformName);
        console.log("sdkVersion : " + cbObject.sdkVersion);
        console.log("serialNumber : " + cbObject.serialNumber);
        console.log("firmwareVersion : " + cbObject.firmwareVersion);
        
        callback(cbObject);
	}
	
	function failureCb(cbObject) {
	   var errorCode = cbObject.errorCode;
	   var errorText = cbObject.errorText;
	   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);
	   callback(cbObject);
	}
	
	new DeviceInfo().getPlatformInfo(successCb, failureCb);
}