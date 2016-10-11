function api_setServerProperty(callback){
    
    var options = {};
    options.serverIp = "192.168.0.2";
    options.serverPort = 80;
    options.secureConnection = false;
    options.appLaunchMode = Configuration.AppMode.LOCAL;
    options.fqdnMode = false;
    options.fqdnAddr = "http://signage.domain.com/index.html";
    
    function successCb() {
        callback("setPictureProperty success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Configuration().setServerProperty(successCb, failureCb, options);
}