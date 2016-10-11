

function api_getPowerStatus(callback){
    
	function successCb(cbObject) {
        console.log("cbObject : " + JSON.stringify(cbObject));
        console.log("wakeOnLan : " + cbObject.wakeOnLan);
        console.log("displayMode : " + cbObject.displayMode);
        console.log("allOnTimer : " + cbObject.onTimer);
        console.log("allOffTimer : " + cbObject.offTimer); 
        
        callback(cbObject);
	}
	
	function failureCb(cbObject) {
	   var errorCode = cbObject.errorCode;
	   var errorText = cbObject.errorText;
	   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);
	   callback(cbObject);
	}
	
	new Power().getPowerStatus(successCb, failureCb);
}