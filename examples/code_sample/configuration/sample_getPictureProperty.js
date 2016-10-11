

function api_getPictureProperty(callback){
	
    function successCb(cbObject) {
        console.log("cbObject : " + JSON.stringify(cbObject));

        console.log("back light : " + cbObject.backlight);
        console.log("contrast : " + cbObject.contrast);
        console.log("brightness : " + cbObject.brightness);
        console.log("color : " + cbObject.color);
        console.log("tint : " + cbObject.tint);

        callback(cbObject);
    }

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        
        callback(cbObject);
    }
	
	new Configuration().getPictureProperty(successCb, failureCb);
}