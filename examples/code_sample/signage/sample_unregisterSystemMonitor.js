function api_unregisterSystemMonitor(callback) {

    // Callback for a successful execution.
    // This callback will be called without any parameter.

    var successCb = function() {

        console.log("successfully unregister");
        callback("unregister system monitor successful");
    };

    // Callback for a failed execution.
    // Failure callback will be invoked with the error code and the error text.

    var failureCb = function(cbObject) {

        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        console.log(" Error Code [" + errorCode + "]: " + errorText);

        callback(cbObject);

    };

    // Create signage object and invoke the API with parameters.
    var signage = new Signage();
    signage.unregisterSystemMonitor(successCb, failureCb);

}
