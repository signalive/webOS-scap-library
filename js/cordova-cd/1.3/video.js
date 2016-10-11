cordova.define("cordova/plugin/video",function(e,t,o){function r(e){}function i(e,t,o){(void 0===e.errorCode||null===e.errorCode)&&(e.errorCode=t),(void 0===e.errorText||null===e.errorText)&&(e.errorText=o)}function n(e){-1===d.webOSVer?u.Request("luna://com.webos.service.tv.systemproperty",{method:"getSystemInfo",parameters:{keys:["sdkVersion","boardType"]},onSuccess:function(t){var o=t.sdkVersion.split(".");d=o.length>=1&&"1"===o[0]?{webOSVer:1,chipset:t.boardType.split("_")[0]}:o.length>=1&&"2"===o[0]?{webOSVer:2,chipset:t.boardType.split("_")[0]}:{webOSVer:0,chipset:""},e(d)},onFailure:function(t){d={webOSVer:0,chipset:""},e(d)}}):e(d)}var u;window.PalmSystem?(r("Window.PalmSystem Available"),u=e("cordova/plugin/webos/service")):u={Request:function(e,t){r(e+" invoked. But I am a dummy because PalmSystem is not available"),"function"==typeof t.onFailure&&t.onFailure({returnValue:!1,errorText:"PalmSystem Not Available. Cordova is not installed?"})}};var s=function(){},d={webOSVer:-1,chipset:"undefined"};s.prototype.getVideoStatus=function(e,t){r("getVideoStatus: "),u.Request("luna://com.webos.service.tv.signage/",{method:"getVideoSize",onSuccess:function(t){if(r("getVideoStatus: On Success"),t.returnValue===!0&&"function"==typeof e){var o={};o.source=t.videoSize.source,e(o)}},onFailure:function(e){r("getVideoStatus: On Failure"),delete e.returnValue,"function"==typeof t&&(i(e,"VGVS","Video.getVideoStatus returns failure."),t(e))}}),r("Video.getVideoStatus Done")},s.currentVideo={uri:null,source:null,tagId:null},s.prototype.setVideoSize=function(e,t,o){if(r("setVideoSize: "+JSON.stringify(o)),void 0===o.source||"number"!=typeof o.source.x||"number"!=typeof o.source.y||"number"!=typeof o.source.width||"number"!=typeof o.source.height||isNaN(o.source.x)||isNaN(o.source.y)||isNaN(o.source.width)||isNaN(o.source.height)||o.source.x<0||o.source.y<0||o.source.width<=0||o.source.height<=0){if("function"==typeof t){var n={};i(n,"VSVS","Video.setVideoSize returns failure. out of range or type error."),t(n)}}else u.Request("luna://com.webos.service.tv.signage/",{method:"getVideoSize",onSuccess:function(n){if(r("setVideoSize: On Success"),n.returnValue===!0){var d={};d.x=n.videoSize.destination.x,d.y=n.videoSize.destination.y,d.width=n.videoSize.destination.width,d.height=n.videoSize.destination.height;for(var c=document.getElementsByTagName("video"),a=!1,l=0;l<c.length;l++)if(c[l].currentTime>0){a=!0,(s.currentVideo.uri!==c[l].src||null!==c[l].id&&void 0!==c[l].id&&null!==s.currentVideo.tagId&&void 0!==s.currentVideo.tagId&&s.currentVideo.tagId!==c[l].id)&&(s.currentVideo.uri=c[l].src,s.currentVideo.source=n.videoSize.source,s.currentVideo.tagId=c[l].id);break}if(a===!1)u.Request("luna://com.webos.service.eim/",{method:"getCurrentInput",parameters:{},onSuccess:function(n){if(n.returnValue===!0&&s.currentVideo.uri!==n.mainInputSourceId||null!==c[0].id&&void 0!==c[0].id&&null!==s.currentVideo.tagId&&void 0!==s.currentVideo.tagId&&s.currentVideo.tagId!==c[0].id)s.currentVideo.uri=n.mainInputSourceId,s.currentVideo.tagId=null!==c[0]&&null!==c[0].id&&void 0!==c[0].id?c[0].id:null,u.Request("luna://com.webos.service.tv.signage/",{method:"getVideoSize",onSuccess:function(n){if(r("setVideoSize: On Success 1"),n.returnValue===!0){if(s.currentVideo.source=n.videoSize.source,0===n.videoSize.source.width&&0===n.videoSize.source.height){s.currentVideo={uri:null,source:null,tagId:null};var c={};return i(c,"VSVS","Video.setVideoSize returns failure. Not ready to setVideoSize."),void t(c)}if(null===s.currentVideo.uri||null===s.currentVideo.source||o.source.width+o.source.x>s.currentVideo.source.x+s.currentVideo.source.width||o.source.height+o.source.y>s.currentVideo.source.y+s.currentVideo.source.height){var a={};return i(a,"VSVS","Video.setVideoSize returns failure. out of range or type error.("+s.currentVideo.source.width+" : "+s.currentVideo.source.height+")"),void t(a)}u.Request("luna://com.webos.service.tv.signage/",{method:"setVideoSize",parameters:{videoSize:{source:{x:o.source.x,y:o.source.y,width:o.source.width,height:o.source.height},destination:{x:d.x,y:d.y,width:d.width,height:d.height}}},onSuccess:function(t){return r("setVideoSize: On Success 2"),t.returnValue===!0&&"function"==typeof e?void e():void 0},onFailure:function(e){return r("setVideoSize: On Failure 2"),delete e.returnValue,"function"==typeof t?(i(e,"VSVS","Video.setVideoSize returns failure. Can't current video source size."),void t(e)):void 0}})}}});else{if(null===s.currentVideo.uri||null===s.currentVideo.source||o.source.width+o.source.x>s.currentVideo.source.x+s.currentVideo.source.width||o.source.height+o.source.y>s.currentVideo.source.y+s.currentVideo.source.height){var a={};return i(a,"VSVS","Video.setVideoSize returns failure. out of range or type error.("+s.currentVideo.source.width+" : "+s.currentVideo.source.height+")"),void t(a)}u.Request("luna://com.webos.service.tv.signage/",{method:"setVideoSize",parameters:{videoSize:{source:{x:o.source.x,y:o.source.y,width:o.source.width,height:o.source.height},destination:{x:d.x,y:d.y,width:d.width,height:d.height}}},onSuccess:function(t){return r("setVideoSize: On Success 3"),t.returnValue===!0&&"function"==typeof e?void e():void 0},onFailure:function(e){return r("setVideoSize: On Failure 3"),delete e.returnValue,"function"==typeof t?(i(e,"VSVS","Video.setVideoSize returns failure. Can't current video source size."),void t(e)):void 0}})}},onFailure:function(e){return r("setVideoSize: On Failure 3"),delete e.returnValue,"function"==typeof t?(i(e,"VSVS","Video.setVideoSize returns failure. Can't set current video source size."),void t(e)):void 0}});else{if(null===s.currentVideo.uri||null===s.currentVideo.source||o.source.width+o.source.x>s.currentVideo.source.x+s.currentVideo.source.width||o.source.height+o.source.y>s.currentVideo.source.y+s.currentVideo.source.height){var V={};return i(V,"VSVS","Video.setVideoSize returns failure. out of range or type error.("+s.currentVideo.source.width+" : "+s.currentVideo.source.height+")"),void t(V)}u.Request("luna://com.webos.service.tv.signage/",{method:"setVideoSize",parameters:{videoSize:{source:{x:o.source.x,y:o.source.y,width:o.source.width,height:o.source.height},destination:{x:d.x,y:d.y,width:d.width,height:d.height}}},onSuccess:function(t){return r("setVideoSize: On Success 4"),t.returnValue===!0&&"function"==typeof e?void e():void 0},onFailure:function(e){return r("setVideoSize: On Failure 4"),delete e.returnValue,"function"==typeof t?(i(e,"VSVS","Video.setVideoSize returns failure. Can't current video source size."),void t(e)):void 0}})}}},onFailure:function(e){return r("setVideoSize: On Failure"),delete e.returnValue,"function"==typeof t?(i(e,"VSVS","Video.setVideoSize returns failure."),void t(e)):void 0}}),r("Video.setVideoSize Done")},s.prototype.setContentRotation=function(e,t,o){if(r("setContentRotation: "),"undefined"==typeof o||null===o||"off"!==o.degree&&"90"!==o.degree&&"270"!==o.degree||"full"!==o.aspectRatio&&"original"!=o.aspectRatio){var n={};i(n,"VSCR","Video.setContentRotation invlalid parameters.")}u.Request("luna://com.webos.service.commercial.signage.storageservice/video/",{method:"setContentRotation",parameters:o,onSuccess:function(t){return r("setContentRotation: On Success"),t.returnValue===!0&&"function"==typeof e?void e():void 0},onFailure:function(e){return r("setContentRotation: On Failure"),delete e.returnValue,"function"==typeof t?(i(e,"VSCR","Video.setContentRotation returns failure."),void t(e)):void 0}}),r("Video.setContentRotation: Done ")},s.prototype.getContentRotation=function(e,t){r("getContentRotation: "),u.Request("luna://com.webos.service.commercial.signage.storageservice/video/",{method:"getContentRotation",onSuccess:function(t){r("getContentRotation: On Success"),t.returnValue===!0&&"function"==typeof e&&(delete t.returnValue,e(t))},onFailure:function(e){r("getContentRotation: On Failure"),delete e.returnValue,"function"==typeof t&&(i(e,"VGCR","Video.getContentRotation returns failure."),t(e))}}),r("Video.getContentRotation Done")},s.prototype.setVideoViewTransform=function(e,t,o){("number"!=typeof o.x||"number"!=typeof o.y||"number"!=typeof o.width||"number"!=typeof o.height)&&t({errorCode:"VSVVT",errorText:"Invalid Parameter type."}),n(function(r){var i,n;2===r.webOSVer&&"H15"===r.chipset?(i=3840,n=2160):(i=1920,n=1080),u.Request("luna://com.webos.service.commercial.signage.storageservice/video/",{method:"getMediaID",onSuccess:function(r){if(r.returnValue===!0){var s=r.id;u.Request("luna://com.webos.service.tv.display/",{method:"setCustomDisplayWindow",parameters:{context:s,sourceInput:{positionX:0,positionY:0,width:i,height:n},displayOutput:{positionX:o.x,positionY:o.y,width:o.width,height:o.height}},onSuccess:function(o){o.returnValue===!0?"function"==typeof e&&e():(delete o.returnValue,"function"==typeof t&&t({errorCode:"VSVT",errorText:"Failed to set video transition"}))},onFailure:function(e){delete e.returnValue,"function"==typeof t&&t({errorCode:"VSVVT",errorText:"Failed to set video transition"})}})}},onFailure:function(e){delete e.returnValue,"function"==typeof t&&t({errorCode:"VSVVT",errorText:"Cannot found video area"})}})})},s.prototype.setRotatedVideoTransform=function(e,t,o){n(function(r){var i,n;2===r.webOSVer&&"H15"===r.chipset?(i=3840,n=2160):(i=1920,n=1080),("number"!=typeof o.x||"number"!=typeof o.y||"number"!=typeof o.width||"number"!=typeof o.height)&&t({errorCode:"VSRVT",errorText:"Invalid Parameter type."}),u.Request("luna://com.webos.service.commercial.signage.storageservice/video/",{method:"getContentRotation",onSuccess:function(s){var d,c,a,l;return"off"===s.degree?void t({errorCode:"VSRVT",errorText:"Content must be applied content rotation first."}):("90"===s.degree?(d=i-(o.y+o.height),c=o.x,a=o.height,l=o.width):"270"===s.degree&&(d=o.y,c=n-(o.x+o.width),a=o.height,l=o.width),void u.Request("luna://com.webos.service.commercial.signage.storageservice/video/",{method:"getMediaID",onSuccess:function(o){if(o.returnValue===!0){var i=o.id;2===r.webOSVer&&"H15"===r.chipset?u.Request("luna://com.webos.service.tv.display/",{method:"setDisplayWindow",parameters:{context:i,fullScreen:!1,displayOutput:{positionX:d,positionY:c,width:a,height:l}},onSuccess:function(o){o.returnValue===!0?"function"==typeof e&&e():(delete o.returnValue,"function"==typeof t&&t({errorCode:"VSRVT",errorText:"Failed to set video transition"}))},onFailure:function(e){delete e.returnValue,"function"==typeof t&&t({errorCode:"VSRVT",errorText:"Failed to set video transition: "+e.errorText})}}):u.Request("luna://com.webos.service.tv.display/",{method:"setRotateDisplayWindow",parameters:{context:i,fullScreen:!1,displayOutput:{positionX:d,positionY:c,width:a,height:l}},onSuccess:function(o){o.returnValue===!0?"function"==typeof e&&e():(delete o.returnValue,"function"==typeof t&&t({errorCode:"VSRVT",errorText:"Failed to set video transition"}))},onFailure:function(e){delete e.returnValue,"function"==typeof t&&t({errorCode:"VSRVT",errorText:"Failed to set video transition: "+e.errorText})}})}},onFailure:function(e){delete e.returnValue,"function"==typeof t&&t({errorCode:"VSRVT",errorText:"Cannot found video area"})}}))},onFailure:function(e){"function"==typeof t&&t({errorCode:"VSRVT",errorText:"Cannot check content rotation."})}})})},o.exports=s});
module.exports = cordova.require("cordova/plugin/video");
