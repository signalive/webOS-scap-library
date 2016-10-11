function api_removeApplication(callback) {
    
    // Callback for a successful execution.
    // This callback will be called without any parameter.  
    var successCb = function (){
        console.log("Upgrading local application done.");
        callback(cbObject);     
    };

    // Callback for a failed execution.
    // Failure callback will be invoked with the error code and the error text.
    var failureCb = function(cbObject){
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        
        callback(cbObject);
    };
    
    // Create storage object and invoke the API.    
    var storage = new Storage();
    // The parameters.
    // from : Where the application data will be downloaded from. The source can be either 'remote', the Pro:Centric IP server,
    //  or 'usb', the inserted USB storage. 
    var options = {
        to : Storage.AppMode.LOCAL
    };

    storage.removeApplication(successCb, failureCb, options);
}