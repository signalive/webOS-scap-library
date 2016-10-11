function api_downloadFirmware(callback){
    // Callback for a successful execution.
    // This callback will be called without any parameter.  
    var successCb = function (){
        console.log("download firmware is done.");
        callback("download firmware is done.");      
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
    var options = {
        uri : "http://example.org/myModel-secured_usb_V3_SECURED.epk" 
    }; 

    storage.downloadFirmware(successCb, failureCb, options);
}