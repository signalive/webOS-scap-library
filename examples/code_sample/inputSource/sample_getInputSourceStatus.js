
function api_getInputSourceStatus(callback){
    function successCb(cbObject) {
    	var inputSourceList = cbObject.inputSourceList;
        for ( var i = 0; i < inputSourceList.length; i++) {
            console.log("inputSourceList[" + i + "] : " + JSON.stringify(inputSourceList[i]));
            console.log("inputSourceList[" + i + "].inputPort : " + inputSourceList[i].inputPort);
        }
        console.log("currentInputSource : " + cbObject.currentInputSource);
        console.log("currentSignalState : " + cbObject.currentSignalState);
        
        callback(cbObject);
	}
	
	function failureCb(cbObject) {
	   var errorCode = cbObject.errorCode;
	   var errorText = cbObject.errorText;
	   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);
	   callback(cbObject);
	}
	
	new InputSource().getInputSourceStatus(successCb, failureCb);
}