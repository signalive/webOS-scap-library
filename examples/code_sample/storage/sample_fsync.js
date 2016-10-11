function api_fsync_file(callback){
	  
	// This example will fsync a file data written in USB.
	  
    var successCb = function (){
        console.log("fsync done.");
        callback();
    };

    // Callback for a failed execution.
    // Failure callback will be invoked with the error code and the error text.
    var failureCb = function(cbObject){
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        
        callback(cbObject);
    };
	  
    var options = {
    	path : "file://usb:1/just/copied.txt"	
    };
    
    
    storage.fsync(successCb, failureCb , options);	
}

function api_fsync_disk(callback){
	  
	// This example will fsync the whole disk.
	  
    var successCb = function (){
        console.log("fsync done.");
        callback();        
    };

    // Callback for a failed execution.
    // Failure callback will be invoked with the error code and the error text.
    var failureCb = function(cbObject){
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        console.log( " Error Code [" + errorCode + "]: " + errorText); 
        
        callback(cbObject);
    };
	      
    storage.fsync(successCb, failureCb);	
}