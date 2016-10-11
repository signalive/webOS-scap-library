function api_getServerProperty(callback){
    
    
    function successCb(cbObject) {
        
        console.log("cbObject : " + JSON.stringify(cbObject));

        console.log("server IP : " + cbObject.serverIp);
        console.log("server Port : " + cbObject.serverPort);
        console.log("secure Connection : " + cbObject.secureConnection);
        console.log("applicationLaunchMode : " + cbObject.appLaunchMode);
        console.log("fully Qualified Domain Name Mode : " + cbObject.fqdnMode);
        console.log("fully Qualified Domain Name Address: " + cbObject.fqdnAddr);
        
        callback(cbObject);
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Configuration().getServerProperty(successCb, failureCb);
}