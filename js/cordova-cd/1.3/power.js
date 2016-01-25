cordova.define("cordova/plugin/power",function(b,d,a){function c(k){}var f;if(window.PalmSystem){c("Window.PalmSystem Available");f=b("cordova/plugin/webos/service")}else{f={Request:function(k,l){c(k+" invoked. But I am a dummy because PalmSystem is not available");if(typeof l.onFailure==="function"){l.onFailure({returnValue:false,errorText:"PalmSystem Not Available. Cordova is not installed?"})}}}}var i=function(){};function h(l,m,k){if(l.errorCode===undefined||l.errorCode===null){l.errorCode=m}if(l.errorText===undefined||l.errorText===null){l.errorText=k}}i.PowerCommand={SHUTDOWN:"powerOff",REBOOT:"reboot"};i.DisplayMode={DISPLAY_OFF:"Screen Off",DISPLAY_ON:"Active"};i.TimerWeek={MONDAY:1,TUESDAY:2,WEDNESDAY:4,THURSDAY:8,FRIDAY:16,SATURDAY:32,SUNDAY:64,EVERYDAY:127};i.prototype.getPowerStatus=function(k,l){c("getPowerStatus: ");f.Request("luna://com.webos.service.tv.signage/",{method:"getPowerState",onSuccess:function(m){c("getPowerStatus: On Success");var n={};if(m.returnValue===true){n.displayMode=m.state}f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"get",parameters:{category:"commercial",keys:["wolEnable"]},onSuccess:function(o){c("getPowerStatus: On Success 2");if(o.returnValue===true){n.wakeOnLan=(o.settings.wolEnable==="1"?true:false)}f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"get",parameters:{category:"time",keys:["onTimerEnable","offTimerEnable"]},onSuccess:function(p){c("getPowerStatus: On Success 3");if(p.returnValue===true){n.allOnTimer=(p.settings.onTimerEnable==="on"?true:false);n.allOffTimer=(p.settings.offTimerEnable==="on"?true:false);if(k&&typeof k==="function"){k(n)}}},onFailure:function(p){c("getPowerStatus: On Failure 3");delete p.returnValue;if(l&&typeof l==="function"){h(p,"PGPS","Power.getPowerStatus returns failure.");l(p)}}})},onFailure:function(o){c("getPowerStatus: On Failure 2");delete o.returnValue;if(l&&typeof l==="function"){h(o,"PGPS","Power.getPowerStatus returns failure.");l(o)}}})},onFailure:function(m){c("getPowerStatus: On Failure");delete m.returnValue;if(l&&typeof l==="function"){h(m,"PGPS","Power.getPowerStatus returns failure.");l(m)}}});c("Power.getPowerStatus Done")};i.prototype.enableAllOnTimer=function(k,l,m){c("enableAllOnTimer: "+JSON.stringify(m));var n=null;switch(m.allOnTimer){case true:n="on";break;case false:n="off";break}f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"set",parameters:{category:"time",settings:{onTimerEnable:n}},onSuccess:function(){if(m.clearOnTimer===true){var r=0;var o=["0","0","0","0","0","0","0"],q=["0","0","0","0","0","0","0"],p=["0","0","0","0","0","0","0"],s=["0","0","0","0","0","0","0"],t=[];f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"set",parameters:{category:"commercial",settings:{multiOnTimerHour:o,multiOnTimerMinute:q,multiOnTimerWeekday:p,multiOnTimerSource:s,onTimerCount:r,onTimerSchedule:t}},onSuccess:function(){c("enableAllOnTimer: On Success 2");if(typeof k==="function"){k()}},onFailure:function(u){c("enableAllOnTimer: On Failure 2");delete u.returnValue;if(typeof l==="function"){h(u,"PEAOT","Power.enableAllOnTimer returns failure. / clearOnTimer");l(u)}}})}else{if(typeof k==="function"){c("enableAllOnTimer: On Success");k()}}},onFailure:function(o){delete o.returnValue;if(typeof l==="function"){h(o,"PEAOT","Power.enableAllOnTimer returns failure.");c("enableAllOnTimer: On Failure");l(o)}}});c("Power.enableAllOnTimer Done")};i.prototype.enableAllOffTimer=function(k,l,m){c("enableAllOffTimer: "+JSON.stringify(m));var n=null;switch(m.allOffTimer){case true:n="on";break;case false:n="off";break}f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"set",parameters:{category:"time",settings:{offTimerEnable:n}},onSuccess:function(){if(m.clearOffTimer===true){var r=0;var o=["0","0","0","0","0","0","0"],q=["0","0","0","0","0","0","0"],p=["0","0","0","0","0","0","0"],s=[];f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"set",parameters:{category:"commercial",settings:{multiOffTimerHour:o,multiOffTimerMinute:q,multiOffTimerWeekday:p,offTimerCount:r,offTimerSchedule:s}},onSuccess:function(){c("enableAllOffTimer: On Success 2");if(typeof k==="function"){k()}},onFailure:function(t){c("enableAllOffTimer: On Failure 2");delete t.returnValue;if(typeof l==="function"){h(t,"PEAOT","Power.enableAllOffTimer returns failure. / clearOffTimer");l(t)}}})}else{if(typeof k==="function"){c("enableAllOffTimer: On Success");k()}}},onFailure:function(o){delete o.returnValue;if(typeof l==="function"){h(o,"PEAOT","Power.enableAllOffTimer returns failure.");c("enableAllOffTimer: On Failure");l(o)}}});c("Power.enableAllOffTimer Done")};i.prototype.enableWakeOnLan=function(k,l,m){c("enableWakeOnLan: "+JSON.stringify(m));var n=null;switch(m.wakeOnLan){case true:n="1";break;case false:n="0";break}f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"set",parameters:{category:"commercial",settings:{wolEnable:n}},onSuccess:function(){if(typeof k==="function"){c("enableWakeOnLan: On Success");k()}},onFailure:function(o){delete o.returnValue;if(typeof l==="function"){h(o,"PSWOL","Power.enableWakeOnLan returns failure.");c("enableWakeOnLan: On Failure");l(o)}}});c("Power.enableWakeOnLan Done")};var g=null;function j(k){if(g===null){f.Request("luna://com.webos.service.tv.systemproperty",{method:"getSystemInfo",parameters:{keys:["sdkVersion"]},onSuccess:function(l){c("getPlatformInfo: onSuccess");c("version : "+l.sdkVersion);var m=l.sdkVersion.split(".");if(m.length>=1&&m[0]==="1"){g=1}else{if(m.length>=1&&m[0]==="2"){g=2}else{g=0}}delete l.returnValue;k(g)},onFailure:function(l){c("getPlatformInfo: onFailure");delete l.returnValue;g=0;k(g)}})}else{k(g)}}function e(k){switch(k){case"ext://hdmi:1":return(g===1?"HDMI1":"HDMI");case"ext://hdmi:2":return"HDMI2";case"ext://dvi:1":return"DVI";case"ext://dp:1":return"DISPLAYPORT";case"ext://rgb:1":return"RGB";case"HDMI1":return"ext://hdmi:1";case"HDMI":return"ext://hdmi:1";case"HDMI2":return"ext://hdmi:2";case"DVI":return"ext://dvi:1";case"DISPLAYPORT":return"ext://dp:1";case"RGB":return"ext://rgb:1"}return null}i.prototype.addOnTimer=function(l,m,n){c("addOnTimer: "+JSON.stringify(n));if(n.hour===undefined||isNaN(n.hour)||typeof n.hour!=="number"||n.hour<0||n.hour>23||n.minute===undefined||isNaN(n.minute)||typeof n.minute!=="number"||n.minute<0||n.minute>59||n.week===undefined||isNaN(n.week)||typeof n.week!=="number"||n.week<=0||n.week>127||n.inputSource===undefined||typeof n.inputSource!=="string"||n.inputSource.indexOf("ext://")!==0){if(typeof m==="function"){var k={};h(k,"PAOT","Power.addOnTimer returns failure. invalid parameters or out of range.");m(k)}return}f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"get",parameters:{category:"commercial",keys:["multiOnTimerHour","multiOnTimerMinute","multiOnTimerWeekday","multiOnTimerSource","onTimerSchedule","onTimerCount"]},onSuccess:function(o){if(o.returnValue===true){j(function(p){c("version : "+p);if(typeof o.settings.multiOnTimerHour==="string"){o.settings.multiOnTimerHour=JSON.parse(o.settings.multiOnTimerHour)}if(typeof o.settings.multiOnTimerMinute==="string"){o.settings.multiOnTimerMinute=JSON.parse(o.settings.multiOnTimerMinute)}if(typeof o.settings.multiOnTimerWeekday==="string"){o.settings.multiOnTimerWeekday=JSON.parse(o.settings.multiOnTimerWeekday)}if(typeof o.settings.multiOnTimerSource==="string"){o.settings.multiOnTimerSource=JSON.parse(o.settings.multiOnTimerSource)}if(typeof o.settings.onTimerSchedule==="string"){o.settings.onTimerSchedule=JSON.parse(o.settings.onTimerSchedule)}var r=(o.settings.onTimerSchedule===null||o.settings.onTimerSchedule===undefined?0:o.settings.onTimerSchedule.length);if(o.settings.multiOnTimerHour.length<=r){if(typeof m==="function"){h(o,"PSOT","Power.addOnTimer returns failure. No space to add timer.");m(o)}return}o.settings.multiOnTimerHour[r]=n.hour;o.settings.multiOnTimerMinute[r]=n.minute;o.settings.multiOnTimerWeekday[r]=n.week;o.settings.multiOnTimerSource[r]=e(n.inputSource);var q=360;o.settings.onTimerSchedule[r]={_id:""+q++,hour:n.hour,input:e(n.inputSource),minute:n.minute,weekday:n.week};f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"set",parameters:{category:"commercial",settings:{multiOnTimerHour:o.settings.multiOnTimerHour,multiOnTimerMinute:o.settings.multiOnTimerMinute,multiOnTimerWeekday:o.settings.multiOnTimerWeekday,multiOnTimerSource:o.settings.multiOnTimerSource,onTimerCount:r+1,onTimerSchedule:o.settings.onTimerSchedule}},onSuccess:function(){c("addOnTimer: On Success 2");if(typeof l==="function"){l()}},onFailure:function(s){c("addOnTimer: On Failure 2");delete s.returnValue;if(typeof m==="function"){h(s,"PAOT","Power.addOnTimer returns failure.");m(s)}}})})}},onFailure:function(o){c("addOnTimer: On Failure");delete o.returnValue;if(m&&typeof m==="function"){h(o,"PAOT","Power.addOnTimer returns failure.");m(o)}}});c("Power.addOnTimer Done")};i.prototype.deleteOnTimer=function(l,m,n){c("deleteOnTimer: "+JSON.stringify(n));if(n.hour===undefined||isNaN(n.hour)||typeof n.hour!=="number"||n.hour<0||n.hour>23||n.minute===undefined||isNaN(n.minute)||typeof n.minute!=="number"||n.minute<0||n.minute>59||n.week===undefined||isNaN(n.week)||typeof n.week!=="number"||n.week<=0||n.week>127||n.inputSource===undefined||typeof n.inputSource!=="string"||n.inputSource.indexOf("ext://")!==0){if(typeof m==="function"){var k={};h(k,"PDOT","Power.deleteOnTimer returns failure. invalid parameters or out of range.");m(k)}return}f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"get",parameters:{category:"commercial",keys:["multiOnTimerHour","multiOnTimerMinute","multiOnTimerWeekday","multiOnTimerSource","onTimerSchedule","onTimerCount"]},onSuccess:function(o){if(o.returnValue===true){j(function(y){c("version : "+y);if(typeof o.settings.multiOnTimerHour==="string"){o.settings.multiOnTimerHour=JSON.parse(o.settings.multiOnTimerHour)}if(typeof o.settings.multiOnTimerMinute==="string"){o.settings.multiOnTimerMinute=JSON.parse(o.settings.multiOnTimerMinute)}if(typeof o.settings.multiOnTimerWeekday==="string"){o.settings.multiOnTimerWeekday=JSON.parse(o.settings.multiOnTimerWeekday)}if(typeof o.settings.multiOnTimerSource==="string"){o.settings.multiOnTimerSource=JSON.parse(o.settings.multiOnTimerSource)}if(typeof o.settings.onTimerSchedule==="string"){o.settings.onTimerSchedule=JSON.parse(o.settings.onTimerSchedule)}var z=0,x=(o.settings.onTimerSchedule===null||o.settings.onTimerSchedule===undefined?0:o.settings.onTimerSchedule.length);var t=["0","0","0","0","0","0","0"],u=["0","0","0","0","0","0","0"],q=["0","0","0","0","0","0","0"],p=["0","0","0","0","0","0","0"],w=[];var s=e(n.inputSource);var r=false;for(var v=0;v<x;v++){c("deleteOnTimer: "+s);if(o.settings.onTimerSchedule[v]===null){continue}if(r===false&&n.hour===o.settings.onTimerSchedule[v].hour&&n.minute===o.settings.onTimerSchedule[v].minute&&n.week===o.settings.onTimerSchedule[v].weekday&&s===o.settings.onTimerSchedule[v].input){c("deleteOnTimer: index "+v);r=true}else{t[z]=o.settings.multiOnTimerHour[v];u[z]=o.settings.multiOnTimerMinute[v];q[z]=o.settings.multiOnTimerWeekday[v];p[z]=o.settings.multiOnTimerSource[v];w[z]=o.settings.onTimerSchedule[v];z++}}if(r===true){x--}if(x===0){w=[]}if(o.settings.onTimerSchedule.length===x){if(typeof m==="function"){h(o,"PDOT","Power.deleteOnTimer returns failure. There is no 'on timer' matched in the list.");m(o)}return}f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"set",parameters:{category:"commercial",settings:{multiOnTimerHour:t,multiOnTimerMinute:u,multiOnTimerWeekday:q,multiOnTimerSource:p,onTimerCount:x,onTimerSchedule:w}},onSuccess:function(){c("deleteOnTimer: On Success 2");if(typeof l==="function"){l()}},onFailure:function(A){c("deleteOnTimer: On Failure 2");delete A.returnValue;if(typeof m==="function"){h(A,"PDOT","Power.deleteOnTimer returns failure.");m(A)}}})})}},onFailure:function(o){c("deleteOnTimer: On Failure");delete o.returnValue;if(m&&typeof m==="function"){h(o,"PDOT","Power.deleteOnTimer returns failure.");m(o)}}});c("Power.deleteOnTimer Done")};i.prototype.addOffTimer=function(l,m,n){c("addOffTimer: "+JSON.stringify(n));if(n.hour===undefined||isNaN(n.hour)||typeof n.hour!=="number"||n.hour<0||n.hour>23||n.minute===undefined||isNaN(n.minute)||typeof n.minute!=="number"||n.minute<0||n.minute>59||n.week===undefined||isNaN(n.week)||typeof n.week!=="number"||n.week<=0||n.week>127){if(typeof m==="function"){var k={};h(k,"PAOT","Power.addOffTimer returns failure. Invalid parameter.");m(k)}return}f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"get",parameters:{category:"commercial",keys:["multiOffTimerHour","multiOffTimerMinute","multiOffTimerWeekday","offTimerSchedule","offTimerCount"]},onSuccess:function(o){if(o.returnValue===true){if(typeof o.settings.multiOffTimerHour==="string"){o.settings.multiOffTimerHour=JSON.parse(o.settings.multiOffTimerHour)}if(typeof o.settings.multiOffTimerMinute==="string"){o.settings.multiOffTimerMinute=JSON.parse(o.settings.multiOffTimerMinute)}if(typeof o.settings.multiOffTimerWeekday==="string"){o.settings.multiOffTimerWeekday=JSON.parse(o.settings.multiOffTimerWeekday)}if(typeof o.settings.offTimerSchedule==="string"){o.settings.offTimerSchedule=JSON.parse(o.settings.offTimerSchedule)}var q=(o.settings.offTimerSchedule===null||o.settings.offTimerSchedule===undefined?0:o.settings.offTimerSchedule.length);if(o.settings.multiOffTimerHour.length<=q){if(typeof m==="function"){h(o,"PAOT","Power.addOffTimer returns failure. No space to add timer.");m(o)}return}o.settings.multiOffTimerHour[q]=n.hour;o.settings.multiOffTimerMinute[q]=n.minute;o.settings.multiOffTimerWeekday[q]=n.week;var p=360;o.settings.offTimerSchedule[q]={_id:""+p++,hour:n.hour,minute:n.minute,weekday:n.week};f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"set",parameters:{category:"commercial",settings:{multiOffTimerHour:o.settings.multiOffTimerHour,multiOffTimerMinute:o.settings.multiOffTimerMinute,multiOffTimerWeekday:o.settings.multiOffTimerWeekday,offTimerCount:q+1,offTimerSchedule:o.settings.offTimerSchedule}},onSuccess:function(){c("addOffTimer: On Success 2");if(typeof l==="function"){l()}},onFailure:function(r){c("addOffTimer: On Failure 2");delete r.returnValue;if(typeof m==="function"){h(r,"PAOT","Power.addOffTimer returns failure.");m(r)}}})}},onFailure:function(o){c("addOffTimer: On Failure");delete o.returnValue;if(m&&typeof m==="function"){h(o,"PAOT","Power.addOffTimer returns failure.");m(o)}}});c("Power.addOffTimer Done")};i.prototype.deleteOffTimer=function(l,m,n){c("deleteOffTimer: "+JSON.stringify(n));if(n.hour===undefined||isNaN(n.hour)||typeof n.hour!=="number"||n.hour<0||n.hour>23||n.minute===undefined||isNaN(n.minute)||typeof n.minute!=="number"||n.minute<0||n.minute>59||n.week===undefined||isNaN(n.week)||typeof n.week!=="number"||n.week<=0||n.week>127){if(typeof m==="function"){var k={};h(k,"PDOT","Power.deleteOffTimer returns failure. invalid parameters or out of range.");m(k)}return}f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"get",parameters:{category:"commercial",keys:["multiOffTimerHour","multiOffTimerMinute","multiOffTimerWeekday","offTimerSchedule","offTimerCount"]},onSuccess:function(w){if(w.returnValue===true){if(typeof w.settings.multiOffTimerHour==="string"){w.settings.multiOffTimerHour=JSON.parse(w.settings.multiOffTimerHour)}if(typeof w.settings.multiOffTimerMinute==="string"){w.settings.multiOffTimerMinute=JSON.parse(w.settings.multiOffTimerMinute)}if(typeof w.settings.multiOffTimerWeekday==="string"){w.settings.multiOffTimerWeekday=JSON.parse(w.settings.multiOffTimerWeekday)}if(typeof w.settings.offTimerSchedule==="string"){w.settings.offTimerSchedule=JSON.parse(w.settings.offTimerSchedule)}var v=0,u=(w.settings.offTimerSchedule===null||w.settings.offTimerSchedule===undefined?0:w.settings.offTimerSchedule.length);var q=["0","0","0","0","0","0","0"],r=["0","0","0","0","0","0","0"],o=["0","0","0","0","0","0","0"],t=[];var p=false;for(var s=0;s<u;s++){if(w.settings.offTimerSchedule[s]===null){continue}if(p===false&&n.hour===w.settings.offTimerSchedule[s].hour&&n.minute===w.settings.offTimerSchedule[s].minute&&n.week===w.settings.offTimerSchedule[s].weekday){p=true}else{q[v]=w.settings.multiOffTimerHour[s];r[v]=w.settings.multiOffTimerMinute[s];o[v]=w.settings.multiOffTimerWeekday[s];t[v]=w.settings.offTimerSchedule[s];v++}}if(p===true){u--}if(u===0){t=[]}if(w.settings.offTimerSchedule.length===u){if(typeof m==="function"){h(w,"PDOT","Power.deleteOffTimer returns failure. There is no 'off timer' matched in the list.");m(w)}return}f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"set",parameters:{category:"commercial",settings:{multiOffTimerHour:q,multiOffTimerMinute:r,multiOffTimerWeekday:o,offTimerCount:u,offTimerSchedule:t}},onSuccess:function(){c("deleteOffTimer: On Success 2");if(typeof l==="function"){l()}},onFailure:function(x){c("deleteOffTimer: On Failure 2");delete x.returnValue;if(typeof m==="function"){h(x,"PDOT","Power.deleteOffTimer returns failure.");m(x)}}})}},onFailure:function(o){c("deleteOffTimer: On Failure");delete o.returnValue;if(m&&typeof m==="function"){h(o,"PDOT","Power.deleteOffTimer returns failure.");m(o)}}});c("Power.deleteOffTimer Done")};i.prototype.getOnTimerList=function(k,l){c("getOnTimerList: ");f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"get",parameters:{category:"commercial",keys:["onTimerSchedule"]},onSuccess:function(m){if(m.returnValue===true){j(function(n){c("version : "+n);var q={};if(typeof m.settings.onTimerSchedule==="string"){m.settings.onTimerSchedule=JSON.parse(m.settings.onTimerSchedule)}var r=new Array(m.settings.onTimerSchedule===null||m.settings.onTimerSchedule===undefined?0:m.settings.onTimerSchedule.length);for(var o=0,p=0;p<r.length;p++){if(m.settings.onTimerSchedule[p]===null||m.settings.onTimerSchedule[p]===undefined){continue}r[o]={hour:0,minute:0,week:0,inputSource:0};r[o].hour=m.settings.onTimerSchedule[p].hour;r[o].minute=m.settings.onTimerSchedule[p].minute;r[o].week=m.settings.onTimerSchedule[p].weekday;r[o++].inputSource=e(m.settings.onTimerSchedule[p].input)}q.timerList=r;if(k&&typeof k==="function"){k(q)}})}},onFailure:function(m){c("getOnTimerList: On Failure");delete m.returnValue;if(l&&typeof l==="function"){h(m,"PGOTL","Power.getOnTimerList returns failure.");l(m)}}});c("Power.getOnTimerList Done")};i.prototype.getOffTimerList=function(k,l){c("getOffTimerList: ");f.Request("luna://com.webos.service.commercial.signage.storageservice/settings/",{method:"get",parameters:{category:"commercial",keys:["offTimerSchedule"]},onSuccess:function(m){c("getOffTimerList: On Success");if(m.returnValue===true){var p={};if(typeof m.settings.offTimerSchedule==="string"){m.settings.offTimerSchedule=JSON.parse(m.settings.offTimerSchedule)}var q=new Array(m.settings.offTimerSchedule===null||m.settings.offTimerSchedule===undefined?0:m.settings.offTimerSchedule.length);for(var n=0,o=0;o<q.length;o++){if(m.settings.offTimerSchedule[o]===null||m.settings.offTimerSchedule[o]===undefined){continue}q[n]={hour:0,minute:0,week:0};q[n].hour=m.settings.offTimerSchedule[o].hour;q[n].minute=m.settings.offTimerSchedule[o].minute;q[n++].week=m.settings.offTimerSchedule[o].weekday}p.timerList=q;if(k&&typeof k==="function"){k(p)}}},onFailure:function(m){c("getOffTimerList: On Failure");delete m.returnValue;if(l&&typeof l==="function"){h(m,"PGOTL","Power.getOffTimerList returns failure.");l(m)}}});c("Power.getOffTimerList Done")};i.prototype.setDisplayMode=function(l,m,n){c("setDisplayMode: "+JSON.stringify(n));var o=null;switch(n.displayMode){case i.DisplayMode.DISPLAY_OFF:o="turnOffScreen";break;case i.DisplayMode.DISPLAY_ON:o="turnOnScreen";break}c("setDisplayMode: "+o);if(o===null&&m&&typeof m==="function"){var k={};h(k,"PSDM","Power.setDisplayMode returns failure. command was not defined.");m(k);c("Power.setDisplayMode invalid ");return}f.Request("luna://com.webos.service.tv.signage/",{method:"getPowerState",onSuccess:function(p){c("setDisplayMode: On Success");if(p.returnValue===true&&p.state===n.displayMode){if(l&&typeof l==="function"){c("setDisplayMode: no need to do any action.");l()}return}f.Request("luna://com.webos.service.tv.signage/",{method:o,onSuccess:function(q){c("setDisplayMode: On Success");if(q.returnValue===true){if(l&&typeof l==="function"){l()}}},onFailure:function(q){c("setDisplayMode: On Failure");delete q.returnValue;if(m&&typeof m==="function"){h(q,"PSDM","Power.setDisplayMode returns failure.");m(q)}}})},onFailure:function(p){c("setDisplayMode: On Failure 2");delete p.returnValue;if(m&&typeof m==="function"){h(p,"PSDM","Power.setDisplayMode returns failure.");m(p)}}});c("Power.setDisplayMode Done")};i.prototype.executePowerCommand=function(l,m,n){c("executePowerCommand: "+JSON.stringify(n));if(n.powerCommand===undefined||typeof n.powerCommand!=="string"||n.powerCommand===null||n.powerCommand.length<=0){if(typeof m==="function"){var k={};h(k,"PEPM","Power.executePowerCommand returns failure. invalid argument or out of range. ");m(k)}return}f.Request("luna://com.webos.service.tv.signage/",{method:n.powerCommand,parameters:{reason:"unknown"},onSuccess:function(o){c("executePowerCommand: On Success");if(o.returnValue===true){if(l&&typeof l==="function"){l()}}},onFailure:function(o){c("executePowerCommand: On Failure");delete o.returnValue;if(m&&typeof m==="function"){h(o,"PEPM","Power.executePowerCommand returns failure.");m(o)}}});c("Power.executePowerCommand Done")};a.exports=i});Power=cordova.require("cordova/plugin/power");