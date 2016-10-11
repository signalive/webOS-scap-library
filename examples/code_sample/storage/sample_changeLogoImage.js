function api_changeLogoImage(callback){
    // Callback for a successful execution.
    // This callback will be called without any parameter.  
    var successCb = function (){
        console.log("changeLogoImage is done.");
        callback("changeLogoImage is done.");      
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
        uri : "http://192.168.0.2/image.jpg" 
    }; 

    storage.changeLogoImage(successCb, failureCb, options);
}