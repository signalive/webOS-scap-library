

function api_executePowerCommand(callback){
	
    var options = {};
    options.powerCommand = Power.PowerCommand.REBOOT;
	
    function successCb() {
    	callback("executePowerCommand success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Power().executePowerCommand(successCb, failureCb, options);
}