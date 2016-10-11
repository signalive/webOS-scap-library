

function api_setVideoSize(callback){
	
    var options = {source:{x:10,y:10,width:900,height:600}};
    
    
    function successCb() {
    	callback("setVideoSize success");
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    }

    new Video().setVideoSize(successCb, failureCb, options);
}