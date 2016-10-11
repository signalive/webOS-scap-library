


function api_getSoundStatus(callback){
    
    function successCb(cbObject) {
    	console.log("cbObject : " + JSON.stringify(cbObject));
        console.log("level : " + cbObject.level);
        console.log("muted : " + cbObject.mute);
        console.log("externalSpeaker : " + cbObject.externalSpeaker);
        
        callback(cbObject);
	}
	
	function failureCb(cbObject) {
	   var errorCode = cbObject.errorCode;
	   var errorText = cbObject.errorText;
	   
	   console.log ("Error Code [" + errorCode + "]: " + errorText);
	   callback(cbObject);
	}
	
	new Sound().getSoundStatus(successCb, failureCb);
}