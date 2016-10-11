function api_clearCache(callback){
	
    function successCb() {
        
        callback("clearCache success");
	}
	
	function failureCb(cbObject) {
	   var errorCode = cbObject.errorCode;
	   var errorText = cbObject.errorText;
	   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);
	   callback(cbObject);
	}
	
	var conf = new Configuration();
	conf.clearCache(successCb, failureCb);
}