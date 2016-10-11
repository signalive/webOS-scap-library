cordova.define("cordova/plugin/broadcast",function(e,t,n){var r=e("cordova/plugin/webos/service"),o=e("cordova/utils"),a=e("cordova/argscheck"),i=function(e){this.isATSC=!1,this.tokenChannelChange=0,this.tokenSignalState=0,this.broadcastDivId=null,this.broadcastElement=null,this.currentInput=null,this.currentSource=null,this.isLastInput=!0,this.isLastChannel=!0;var t=this;r.Request("luna://com.webos.service.tv.systemproperty",{method:"getSystemInfo",parameters:{keys:["atsc"]},onSuccess:function(e){t.isATSC=e.atsc},onFailure:function(e){}})};i.prototype.onchannelchange=function(e){},i.prototype.onsignalstatuschange=function(e){},i.prototype.initialize=function(e,t,n){a.checkArgs("fFo","broadcastCordova.initialize",arguments);var r=o.clone(n);if(this.broadcastDivId=document.getElementById(r.divId),r.broadcastPlugin=this,1!=r.isLastInput&&r.src){if(this.isLastInput=!1,-1!=r.src.indexOf("tv://"))1==r.isLastChannel?(this.isLastChannel=!0,r.type="service/webos-broadcast"):(this.isLastChannel=!1,r.type="service/webos-broadcast-standalone"),this.currentInput="tv",this.currentSource=r.src.substr(5);else{r.type="service/webos-external";var i=r.src.split(":");this.currentInput=i[1].substr(2).toLowerCase(),this.currentSource=i[2]}s(r),e&&e()}else this.isLastInput=!0,u(e,t,r)},i.prototype.channelUp=function(e,t){a.checkArgs("fF","broadcastCordova.channelUp",arguments);var n={broadcastId:this.broadcastElement.mediaId};r.Request("luna://com.webos.service.tv.broadcast",{method:"changeChannelUp",parameters:n,onSuccess:function(t){e&&e()},onFailure:function(e){delete e.returnValue,t&&t(e)}})},i.prototype.channelDown=function(e,t){a.checkArgs("fF","broadcastCordova.channelDown",arguments);var n={broadcastId:this.broadcastElement.mediaId};r.Request("luna://com.webos.service.tv.broadcast",{method:"changeChannelDown",parameters:n,onSuccess:function(t){e&&e()},onFailure:function(e){delete e.returnValue,t&&t(e)}})},i.prototype.setChannel=function(e,t,n){a.checkArgs("fFo","broadcastCordova.setChannel",arguments);var o={broadcastId:this.broadcastElement.mediaId,channelId:n.id};r.Request("luna://com.webos.service.tv.broadcast",{method:"changeChannel",parameters:o,onSuccess:function(t){e&&e()},onFailure:function(e){delete e.returnValue,t&&t(e)}})},i.prototype.getCurrentChannel=function(e,t){a.checkArgs("fF","broadcastCordova.getCurrentChannel",arguments);var n={broadcastId:this.broadcastElement.mediaId,subscribe:!1};r.Request("luna://com.webos.service.tv.broadcast",{method:"getCurrentChannel",parameters:n,onSuccess:function(t){var n={};n=S(t.channel,"api"),e&&e(n)},onFailure:function(e){delete e.returnValue,t&&t(e)}})},i.prototype.getSignalStatus=function(e,t){a.checkArgs("fF","broadcastCordova.getSignalStatus",arguments);var n;"tv"==this.currentInput?(n={broadcastId:this.broadcastElement.mediaId,subscribe:!1},r.Request("luna://com.webos.service.tv.broadcast",{method:"getChannelState",parameters:n,onSuccess:function(t){var n=t.channelState;n.screensaverType=n.channelScreensaverType,delete n.channelScreensaverType,e&&e(n)},onFailure:function(e){delete e.returnValue,t&&t(e)}})):(n={externalInputId:this.broadcastElement.mediaId,subscribe:!1},r.Request("luna://com.webos.service.tv.externaldevice/input/",{method:"getSignalState",parameters:n,onSuccess:function(t){e&&e(t.signalState)},onFailure:function(e){delete e.returnValue,t&&t(e)}}))},i.prototype.getCurrentProgram=function(e,t,n){a.checkArgs("fFo","broadcastCordova.getCurrentProgram",arguments),r.Request("luna://com.palm.systemservice/time",{method:"getEffectiveBroadcastTime",parameters:{},onSuccess:function(r){var o={};o.id=n.id,o.startTime=r.localtime,o.endTime=r.localtime,o.request="nowInfo",f(e,t,o)},onFailure:function(e){delete e.returnValue,t&&t(e)}})},i.prototype.getNextProgram=function(e,t,n){a.checkArgs("fFo","broadcastCordova.getNextProgram",arguments),r.Request("luna://com.palm.systemservice/time",{method:"getEffectiveBroadcastTime",parameters:{},onSuccess:function(r){var o={};o.id=n.id,o.startTime=r.localtime,o.endTime=r.localtime,o.request="nextInfo",f(e,t,o)},onFailure:function(e){delete e.returnValue,t&&t(e)}})},i.prototype.getProgramCount=function(e,t,n){a.checkArgs("fFo","broadcastCordova.getProgramCount",arguments);var r=o.clone(n);r.request="count",f(e,t,r)},i.prototype.getProgramList=function(e,t,n){a.checkArgs("fFo","broadcastCordova.getProgramList",arguments);var r=o.clone(n);r.request="list",f(e,t,r)},i.prototype.getChannelCount=function(e,t,n){a.checkArgs("fFo","broadcastCordova.getChannelCount",arguments);var o={from:"com.webos.service.tv.channel.dblist:1",select:[""],where:[{prop:"channelType",op:"=",val:n.type}],filter:[{prop:"Invisible",op:"=",val:!1}]};r.Request("luna://com.palm.db/",{method:"search",parameters:{query:o},onSuccess:function(t){var n={};n.count=t.results.length,e&&e(n)},onFailure:function(e){delete e.returnValue,t&&t(e)}})},i.prototype.getChannelList=function(e,t,n){a.checkArgs("fFo","broadcastCordova.getChannelList",arguments);var o=n.startIndex-1;0>o&&(o=0);var i=o+n.count,c={from:"com.webos.service.tv.channel.dblist:1",select:["channelId","channelName","channelMode","channelNumber","channelType","skipped","locked","descrambled","scrambled"],where:[{prop:"channelType",op:"=",val:n.type}],filter:[{prop:"Invisible",op:"=",val:!1}],limit:i};r.Request("luna://com.palm.db/",{method:"search",parameters:{query:c},onSuccess:function(t){var n={};n.channel=[];var r=t.results.length-o;if(r>0)for(var a=0;r>a;a++)n.channel[a]=S(t.results[a+o],"db8");e&&e(n)},onFailure:function(e){delete e.returnValue,t&&t(e)}})},i.prototype.getChannelListByName=function(e,t,n){a.checkArgs("fFo","broadcastCordova.getChannelListByName",arguments);var o={from:"com.webos.service.tv.channel.dblist:1",select:["channelId","channelName","channelMode","channelNumber","channelType","skipped","locked","descrambled","scrambled"],where:[{prop:"channelName",op:"%",val:n.name}],filter:[{prop:"Invisible",op:"=",val:!1}]};n.type&&o.filter.push({prop:"channelType",op:"=",val:n.type}),r.Request("luna://com.palm.db/",{method:"search",parameters:{query:o},onSuccess:function(t){var n={};if(n.channel=[],t.results.length>0)for(var r=0;r<t.results.length;r++)n.channel[r]=S(t.results[r],"db8");e&&e(n)},onFailure:function(e){delete e.returnValue,t&&t(e)}})},i.prototype.setInput=function(e){a.checkArgs("o","broadcastCordova.setInput",arguments);var t=!1;if(-1!=e.src.indexOf("tv://"))1==this.isLastChannel?e.type="service/webos-broadcast":e.type="service/webos-broadcast-standalone",this.currentInput="tv",this.currentSource=e.src.substr(5);else{e.type="service/webos-external";var n=e.src.split(":");this.currentInput=n[1].substr(2).toLowerCase(),this.currentSource=n[2]}for(var r=0;r<this.broadcastElement.childNodes.length;r++)"SOURCE"==this.broadcastElement.childNodes[r].nodeName&&(this.broadcastElement.childNodes[r].src=e.src,this.broadcastElement.childNodes[r].type=e.type,this.broadcastElement.load(),t=!0);return t},i.prototype.addEventListener=function(e,t,n){"channelchange"==e?this.tokenChannelChange=r.Request("luna://com.webos.service.tv.broadcast",{method:"getCurrentChannel",parameters:{broadcastId:this.broadcastElement.mediaId,subscribe:!1},onSuccess:function(e){var n=e.channel;t&&t(n)},onFailure:function(e){}}):"signalstatus"==e&&("tv"==this.currentInput?this.tokenSignalState=r.Request("luna://com.webos.service.tv.broadcast",{method:"getChannelState",parameters:{broadcastId:this.broadcastElement.mediaId,subscribe:!1},onSuccess:function(e){var n=e.channelState;n.screensaverType=n.channelScreensaverType,delete n.channelScreensaverType,t&&t(n)},onFailure:function(e){}}):this.tokenSignalState=r.Request("luna://com.webos.service.tv.externaldevice/input/",{method:"getSignalState",parameters:{externalInputId:this.broadcastElement.mediaId,subscribe:!0},onSuccess:function(e){var n=e.signalState;t&&t(n)},onFailure:function(e){}}))};var c=function(e,t){v(e),"tv"==e.currentInput?(d(e),p(e)):(m(e),t())},s=function(e){var t=document.createElement("VIDEO");t.setAttribute("id",e.videoId),t.setAttribute("width","100%"),t.setAttribute("height","100%"),t.setAttribute("autoplay",""),t.addEventListener("loadedmetadata",function(){c(e.broadcastPlugin,e.callback)},!1);var n=document.createElement("SOURCE");n.setAttribute("src",e.src),n.setAttribute("type",e.type),t.appendChild(n),e.broadcastPlugin.broadcastDivId.appendChild(t),e.broadcastPlugin.broadcastElement=t},u=function(e,t,n){r.Request("luna://com.webos.service.eim",{method:"getCurrentInput",parameters:{},onSuccess:function(r){if("ATV"==r.mainInputSourceId||"DTV"==r.mainInputSourceId)n.broadcastPlugin.currentInput="tv",l(e,t,n);else{var o=r.mainInputSourceId.split("_");n.broadcastPlugin.currentInput=o[0].toLowerCase(),n.broadcastPlugin.currentSource=o[1],n.src="ext://"+n.broadcastPlugin.currentInput+":"+n.broadcastPlugin.currentSource,n.type="service/webos-external",s(n),e&&e()}},onFailure:function(e){delete e.returnValue,t&&t(e)}})},l=function(e,t,n){},d=function(e){e.tokenChannelChange=r.Request("luna://com.webos.service.tv.broadcast",{method:"getCurrentChannel",parameters:{broadcastId:e.broadcastElement.mediaId,subscribe:!0},onSuccess:function(t){e.currentSource=t.channel.channelId;var n={};n=S(t.channel,"api"),e.onchannelchange(n)},onFailure:function(e){}})},p=function(e){e.tokenSignalState=r.Request("luna://com.webos.service.tv.broadcast",{method:"getChannelState",parameters:{broadcastId:e.broadcastElement.mediaId,subscribe:!0},onSuccess:function(t){var n=t.channelState;n.screensaverType=n.channelScreensaverType,delete n.channelScreensaverType,e.onsignalstatuschange(n)},onFailure:function(e){}})},m=function(e){e.tokenSignalState=r.Request("luna://com.webos.service.tv.externaldevice/input/",{method:"getSignalState",parameters:{externalInputId:e.broadcastElement.mediaId,subscribe:!0},onSuccess:function(t){var n=t.signalState;e.onsignalstatuschange(n)},onFailure:function(e){}})},v=function(e){e.tokenChannelChange&&e.tokenChannelChange.cancel(),e.tokenSignalState&&e.tokenSignalState.cancel()},h=function(e,t,n){var r=g(n.startTime),o=g(n.endTime),a={};"count"==n.request?a={from:"com.webos.service.tv.programSCH:4",select:[""],where:[{prop:"signalChannelId",op:"=",val:n.signalChannelId}],filter:[{prop:"localStartTime",op:"<=",val:o},{prop:"localEndTime",op:">=",val:r}]}:"nextInfo"==n.request?a={from:"com.webos.service.tv.programSCH:4",select:["programId","eventId","localStartTime","localEndTime","duration","programName","description"],where:[{prop:"channelId",op:"=",val:n.signalChannelId}],filter:[{prop:"localStartTime",op:">",val:r}],orderBy:"localStartTime",limit:1}:("list"==n.request||"nowInfo"==n.request)&&(a={from:"com.webos.service.tv.programSCH:4",select:["programId","eventId","localStartTime","localEndTime","duration","programName","description"],where:[{prop:"channelId",op:"=",val:n.signalChannelId}],filter:[{prop:"localStartTime",op:"<=",val:o},{prop:"localEndTime",op:">=",val:r}]})},f=function(e,t,n){var o={from:"com.webos.service.tv.channel.dblist:1",select:["signalChannelId"],where:[{prop:"channelId",op:"=",val:n.id}]};r.Request("luna://com.palm.db/",{method:"find",parameters:{query:o},onSuccess:function(r){n.signalChannelId=r.results[0].signalChannelId,h(e,t,n)},onFailure:function(e){delete e.returnValue,t&&t(e)}})},S=function(e,t){var n={};return n.id=e.channelId,n.number=e.channelNumber,n.name=e.channelName,"api"==t?(n.mode=e.channelModeName,n.type=e.channelTypeName,n.isSkipped=e.isSkipped,n.isLocked=e.isLocked,n.isDescrambled=e.isDescrambled,n.isScrambled=e.isScrambled):(n.mode=e.channelMode,n.type=e.channelType,n.isSkipped=e.skipped,n.isLocked=e.locked,n.isDescrambled=e.descrambled,n.isScrambled=e.scrambled),n},g=function(e){var t=e.year+",";return t+=(e.month<10?"0":"")+e.month+",",t+=(e.day<10?"0":"")+e.day+",",t+=(e.hour<10?"0":"")+e.hour+",",t+=(e.minute<10?"0":"")+e.minute+",",t+=(e.second<10?"0":"")+e.second};n.exports=i});var Broadcast=cordova.require("cordova/plugin/broadcast");cordova.define("cordova/plugin/inputSource",function(e,t,n){function r(e){}function o(e,t,n){(void 0===e.errorCode||null===e.errorCode)&&(e.errorCode=t),(void 0===e.errorText||null===e.errorText)&&(e.errorText=n)}function a(e){var t=1,n=e.length;return isNaN(parseInt(e.charAt(n-1),10))||(t=e.charAt(n-1),n--),e=e.substring(0,n)+":"+t,e="ext://"+e.toLowerCase()}function i(e){null===m?s.Request("luna://com.webos.service.tv.systemproperty",{method:"getSystemInfo",parameters:{keys:["sdkVersion","boardType"]},onSuccess:function(t){r("getPlatformInfo: onSuccess"),r("version : "+t.sdkVersion);var n=t.sdkVersion.split(".");v=n.length>=1&&"1"===n[0]?{webOSVer:1,chipset:t.boardType.split("_")[0]}:n.length>=1&&"2"===n[0]?{webOSVer:2,chipset:t.boardType.split("_")[0]}:{webOSVer:0,chipset:""},m=v.webOSVer,e(v)},onFailure:function(t){r("getPlatformInfo: onFailure"),v={webOSVer:0,chipset:""},e(v)}}):e(v)}function c(e,t,n){s.Request("luna://com.webos.service.eim/",{method:"getAllInputStatus",onSuccess:function(c){if(r("convertInputSource: On Success "+e),c.returnValue===!0&&"function"==typeof t){var s=new Array(c.totalCount);i(function(i){var u=i.webOSVer;switch(r("convertInputSource: "+JSON.stringify(c.totalCount)),r("convertInputSource: "+JSON.stringify(c.devices)),r("version: "+u),u){case 1:"ext://dp:1"===e?e="ext://hdmi:3":"ext://dvi:1"===e&&(e="ext://hdmi:4");break;case 2:"H15"===v.chipset?"ext://dvi:1"===e?e="ext://hdmi:3":"ext://ops:1"===e?e="ext://hdmi:3":"ext://dp:1"===e?e="ext://hdmi:3":"ext://hdmi:4"===e&&(e="ext://dp:1"):"ext://dp:1"===e?e="ext://hdmi:3":"ext://dvi:1"===e?e="ext://hdmi:2":"ext://ops:1"===e&&(e="ext://hdmi:4")}for(var l=0;l<s.length;l++){s[l]={},"H15"===v.chipset?s[l].inputPort=a(c.devices[l].deviceName):s[l].inputPort=a(c.devices[l].label);var d=c.devices[l].id.split("_");if(s[l].id="ext://"+d[0].toLowerCase()+":"+d[1],e===s[l].id)return r("convertInputSource: On Success ok "+e),void t(e)}for(var p=0;p<s.length;p++)if(e===s[p].inputPort)return e=s[p].id,r("convertInputSource: On Success converted "+e),void t(e);r("convertInputSource: On Failure "+e);var m={};o(m,"IGISS","convertInputSource. It does not support inputsource type."),n(m)})}},onFailure:function(e){r("convertInputSource: On Failure"),delete e.returnValue,"function"==typeof n&&(o(e,"IGISS","convertInputSource returns failure on gathering input list."),n(e))}})}var s;window.PalmSystem?(r("Window.PalmSystem Available"),s=e("cordova/plugin/webos/service")):s={Request:function(e,t){r(e+" invoked. But I am a dummy because PalmSystem is not available"),"function"==typeof t.onFailure&&t.onFailure({returnValue:!1,errorText:"PalmSystem Not Available. Cordova is not installed?"})}};var u=function(){},l=!1,d="",p=null;u.prototype.initialize=function(e,t,n){if(r("initialize: "+JSON.stringify(n)),void 0===n.divId||"string"!=typeof n.divId||null===n.divId||n.divId.length<=0||void 0===n.videoId||"string"!=typeof n.videoId||null===n.videoId||n.videoId.length<=0||void 0===n.callback||"function"!=typeof n.callback||void 0===n.src||"string"!=typeof n.src||null===n.src||n.src.length<=0){if("function"==typeof t){var a={};o(a,"II","InputSource.initialize returns failure. invalid parameters."),t(a)}}else{if(null===document.getElementById(n.divId)||void 0===document.getElementById(n.divId))return void("function"==typeof t&&t({errorCode:"II",errorText:"options.divId:["+n.divId+"] element not exists or cannot approach"}));if(document.getElementById(n.videoId))return void("function"==typeof t&&t({errorCode:"II",errorText:"options.videoId:["+n.videoId+"] element already exists."}));c(n.src,function(r){n.src=r,p=new Broadcast,p.initialize(e,t,n),l=!0,d=n.videoId},function(e){if(r("initialize: failure "+JSON.stringify(e)),"function"==typeof t){var n={};o(n,"II","InputSource.initialize returns failure. invalid parameters."),t(n)}}),r("initialize: Done")}},u.prototype.changeInputSource=function(e,t,n){if(void 0===n.src||"string"!=typeof n.src||null===n.src||n.src.length<=0){if("function"==typeof t){var a={};o(a,"ICIS","InputSource.changeInputSource returns failure. invalid argument."),t(a)}}else if(l!==!1&&null!==document.getElementById(d)&&void 0!==document.getElementById(d))r("changeInputSource: "+JSON.stringify(n)),c(n.src,function(a){if(n.src=a,p.setInput(n))r("changeInputSource: On Success"),"function"==typeof e&&e();else if("function"==typeof t){var i={};r("changeInputSource: On Failure"),o(i,"ICIS","InputSource.changeInputSource returns failure."),t(i)}},function(e){if(r("changeInputSource: failure "+JSON.stringify(e)),"function"==typeof t){var n={};o(n,"ICIS","InputSource.changeInputSource returns failure. invalid argument. "),t(n)}}),r("changeInputSource: Done");else if("function"==typeof t){var a={};o(a,"ICIS","InputSource.changeInputSource returns failure. Call initialize() first."),t(a)}},u.prototype.getInputSourceStatus=function(e,t){r("getInputSourceStatus: "),s.Request("luna://com.webos.service.eim/",{method:"getAllInputStatus",onSuccess:function(n){r("getInputSourceStatus: On Success"),n.returnValue===!0&&i(function(i){var c=i.webOSVer;r("convertInputSource: "+JSON.stringify(n.totalCount)),r("convertInputSource: "+JSON.stringify(n.devices)),r("version: "+c);for(var u={},l=new Array(n.totalCount),d=new Array(n.totalCount),m=0;m<l.length;m++){l[m]={},l[m].inputPort=a(n.devices[m].label);var v=null;switch(c){case 1:v=n.devices[m].id.split("_"),l[m].inputPort="ext://"+v[0].toLowerCase()+":"+v[1],"ext://hdmi:3"===l[m].inputPort?l[m].inputPort="ext://dp:1":"ext://hdmi:4"===l[m].inputPort&&(l[m].inputPort="ext://dvi:1");break;case 2:v=n.devices[m].id.split("_"),l[m].inputPort="ext://"+v[0].toLowerCase()+":"+v[1],"H15"===i.chipset?("ext://dvi:4"===l[m].inputPort&&(l[m].inputPort="ext://hdmi:3"),"ext://ops:1"===l[m].inputPort&&(l[m].inputPort="ext://hdmi:3"),"ext://hdmi:4"===l[m].inputPort&&(l[m].inputPort="ext://dp:1")):"ext://hdmi:3"===l[m].inputPort?l[m].inputPort="ext://dp:1":"ext://hdmi:2"===l[m].inputPort?l[m].inputPort="ext://dvi:1":"ext://hdmi:4"===l[m].inputPort&&(l[m].inputPort="ext://ops:1")}d[m]={},d[m].inputPort=l[m].inputPort,d[m].id=n.devices[m].id}u.inputSourceList=l,s.Request("luna://com.webos.service.eim/",{method:"getCurrentInput",parameters:{},onSuccess:function(t){if(r("InputSource.getInputSourceStatus: On Success 3"),t.returnValue===!0&&"function"==typeof e){u.currentInputSource={};for(var n=0;n<d.length;n++)if(d[n].id===t.mainInputSourceId){u.currentInputSource=d[n].inputPort;break}if(u.currentSignalState="unknown",null!==p)r("InputSource.getInputSourceStatus : broadcast is not null"),p.getSignalStatus(function(t){return u.currentSignalState=t.videoSignalState,r("InputSource.getInputSourceStatus: On Success 2"),"function"==typeof e?(r("getInputSourceStatus: On Success"+JSON.stringify(u)),void e(u)):void 0},function(){return r("InputSource.getInputSourceStatus : signal state is fail."),"function"==typeof e?(r("getInputSourceStatus: On Success"+JSON.stringify(u)),void e(u)):void 0});else if(r("InputSource.getInputSourceStatus : it does not initialize."),"function"==typeof e)return r("getInputSourceStatus: On Success"+JSON.stringify(u)),void e(u)}},onFailure:function(e){return r("InputSource.getInputSourceStatus: On Failure 2"),delete e.returnValue,"function"==typeof t?(o(e,"IGISS","InputSource.getInputSourceStatus returns failure."),void t(e)):void 0}})})},onFailure:function(e){r("getInputSourceStatus: On Failure"),delete e.returnValue,"function"==typeof t&&(o(e,"IGISS","InputSource.changeInputSource returns failure on gathering input list."),t(e))}}),r("InputSource.getInputSourceStatus Done")};var m=null,v={};n.exports=u});
module.exports = cordova.require("cordova/plugin/inputSource");
