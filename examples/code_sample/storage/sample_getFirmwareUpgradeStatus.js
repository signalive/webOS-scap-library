function api_getFirmwareUpgradeStatus(callback){
    // Callback for a successful execution.
    // This callback will be called without any parameter.  
    var successCb = function (result){
        console.log("getFirmwareUpgradeStatus is done." + JSON.stringify(result));
        callback("getFirmwareUpgradeStatus is done." + JSON.stringify(result));      
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

    storage.getFirmwareUpgradeStatus(successCb, failureCb);
}