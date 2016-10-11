
function api_initialize(callback){
	
	  function init() {
	  	
	  };
	  var options = {};
    options.divId = "videoDiv"; // It should be matched to div tag name in an html page.
    options.videoId = "broadcastvideo";
    options.callback = init;
    options.isLastChannel = false;
    options.src = "ext://hdmi:1";
	
    function successCb() {
    	callback("changeInputSource success");
    };

    function failureCb(cbObject) {
        var errorCode = cbObject.errorCode;
        var errorText = cbObject.errorText;
        
        console.log ("Error Code [" + errorCode + "]: " + errorText);
        callback(cbObject);
    };
    
    new InputSource().initialize(successCb, failureCb, options);
}