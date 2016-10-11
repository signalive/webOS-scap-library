cordova.define("cordova/plugin/deviceInfo",function(e,o,n){function t(e){}function r(e,o,n){(void 0===e.errorCode||null===e.errorCode)&&(e.errorCode=o),(void 0===e.errorText||null===e.errorText)&&(e.errorText=n)}var c;window.PalmSystem?(console.log("Window.PalmSystem Available"),c=e("cordova/plugin/webos/service")):c={Request:function(e,o){console.log(e+" invoked. But I am a dummy because PalmSystem is not available"),"function"==typeof o.onFailure&&o.onFailure({returnValue:!1,errorText:"PalmSystem Not Available. Cordova is not installed?"})}};var i=function(){};i.prototype.getNetworkInfo=function(e,o){t("getNetworkInfo: "),c.Request("luna://com.webos.service.commercial.signage.storageservice/network/",{method:"getNetworkInfo",parameters:{},onSuccess:function(o){"function"==typeof e&&(delete o.returnValue,e(o))},onFailure:function(n){t("getNetworkInfo: onFailure"),-1!==n.errorText.indexOf("Unknown method")?c.Request("luna://com.palm.connectionmanager",{method:"getstatus",parameters:{},onSuccess:function(o){t("getNetworkInfo: onSuccess"),delete o.returnValue,"function"==typeof e&&e(o)},onFailure:function(e){t("getNetworkInfo: onFailure"),delete e.returnValue,"function"==typeof o&&o(e)}}):(delete n.returnValue,"function"==typeof o&&o(n))}}),t("DeviceInfo.getNetworkInfo Done")},i.prototype.setNetworkInfo=function(e,o,n){t("setNetworkInfo: "),c.Request("luna://com.webos.service.commercial.signage.storageservice/network/",{method:"setNetworkInfo",parameters:n,onSuccess:function(o){t("setNetworkInfo: onSuccess"),"function"==typeof e&&e()},onFailure:function(e){t("setNetworkInfo: onFailure"),delete e.returnValue,"function"==typeof o&&o(e)}}),t("DeviceInfo.setNetworkInfo Done")},i.prototype.getBeaconInfo=function(e,o){t("getBeaconInfo: "),c.Request("luna://com.webos.service.commercial.signage.storageservice/network/",{method:"getBeaconInfo",parameters:{},onSuccess:function(o){t("getBeaconInfo: onSuccess"),delete o.returnValue,"function"==typeof e&&e(o)},onFailure:function(e){t("getBeaconInfo: onFailure"),delete e.returnValue,"function"==typeof o&&o(e)}}),t("DeviceInfo.getBeaconInfo Done")},i.prototype.setBeaconInfo=function(e,o,n){t("setBeaconInfo: ");var i=function(e){if("undefined"==typeof e||null===e||32!=e.length)return!1;var o=new RegExp(/^[a-fA-F0-9]*$/g);return null!==o.exec(e)?!0:!1};if(n.enabled===!0&&(i(n.uuid)===!1||isNaN(n.major)||n.major<0||n.major>65535||isNaN(n.minor)||n.minor<0||n.minor>65535)){if(t("setBeaconInfo: options are invalid."),"function"==typeof o){var s={};r(s,"DSBI","DeviceInfo.setBeaconInfo. Invalid options."),o(s)}}else c.Request("luna://com.webos.service.commercial.signage.storageservice/network/",{method:"setBeaconInfo",parameters:n,onSuccess:function(o){t("setBeaconInfo: onSuccess"),"function"==typeof e&&e()},onFailure:function(e){t("setBeaconInfo: onFailure"),delete e.returnValue,"function"==typeof o&&o(e)}}),t("DeviceInfo.setBeaconInfo Done")},i.prototype.getSoftApInfo=function(e,o){t("getSoftApInfo: "),c.Request("luna://com.webos.service.commercial.signage.storageservice/network/",{method:"getSoftApInfo",parameters:{},onSuccess:function(o){t("getSoftApInfo: onSuccess"),delete o.returnValue,"function"==typeof e&&e(o)},onFailure:function(e){t("getSoftApInfo: onFailure"),delete e.returnValue,"function"==typeof o&&o(e)}}),t("DeviceInfo.getSoftApInfo Done")},i.prototype.setSoftApInfo=function(e,o,n){if(t("setSoftApInfo: "),n.enabled===!0&&(null!==n.ssid&&n.ssid.length>32||null!==n.securityKey&&6!==n.securityKey.length)){if(t("setSoftApInfo: options are invalid."),"function"==typeof o){var i={};r(i,"DSSI","DeviceInfo.setSoftApInfo. Invalid options."),o(i)}}else c.Request("luna://com.webos.service.commercial.signage.storageservice/network/",{method:"setSoftApInfo",parameters:n,onSuccess:function(o){t("setSoftApInfo: onSuccess"),"function"==typeof e&&e()},onFailure:function(e){t("setSoftApInfo: onFailure"),delete e.returnValue,"function"==typeof o&&o(e)}}),t("DeviceInfo.setSoftApInfo Done")},i.prototype.getWifiList=function(e,o){t("getWifiList: "),c.Request("luna://com.webos.service.commercial.signage.storageservice/network/",{method:"getWifiList",parameters:{},onSuccess:function(o){t("getWifiList: onSuccess"),delete o.returnValue,"function"==typeof e&&e(o)},onFailure:function(e){t("getWifiList: onFailure"),delete e.returnValue,"function"==typeof o&&o(e)}}),t("DeviceInfo.getWifiList Done")},i.prototype.connectWifi=function(e,o,n){t("connectWifi: "),c.Request("luna://com.webos.service.commercial.signage.storageservice/network/",{method:"connectWifi",parameters:n,onSuccess:function(o){t("connectWifi: onSuccess"),"function"==typeof e&&e()},onFailure:function(e){t("connectWifi: onFailure"),delete e.returnValue,"function"==typeof o&&o(e)}}),t("DeviceInfo.connectWifi Done")},i.prototype.startWps=function(e,o,n){t("startWps: "),c.Request("luna://com.webos.service.commercial.signage.storageservice/network/",{method:"startWps",parameters:n,onSuccess:function(o){t("startWps: onSuccess"),delete o.returnValue,"function"==typeof e&&e(o)},onFailure:function(e){t("startWps: onFailure"),delete e.returnValue,"function"==typeof o&&o(e)}}),t("DeviceInfo.startWps Done")},i.prototype.stopWps=function(e,o){t("stopWps: "),c.Request("luna://com.webos.service.commercial.signage.storageservice/network/",{method:"stopWps",parameters:{},onSuccess:function(o){t("stopWps: onSuccess"),"function"==typeof e&&e()},onFailure:function(e){t("stopWPS: onFailure"),delete e.returnValue,"function"==typeof o&&o(e)}}),t("DeviceInfo.stopWps Done")},i.prototype.getNetworkMacInfo=function(e,o){t("getNetworkMacInfo: "),c.Request("luna://com.webos.service.tv.signage",{method:"getinfo",parameters:{},onSuccess:function(o){t("getNetworkMacInfo: onSuccess"),delete o.returnValue,"function"==typeof e&&e(o)},onFailure:function(e){t("getNetworkMacInfo: onFailure"),delete e.returnValue,"function"==typeof o&&o(e)}}),t("DeviceInfo.getNetworkMacInfo Done")},i.prototype.getPlatformInfo=function(e,o){t("getPlatformInfo: "),c.Request("luna://com.webos.service.tv.systemproperty",{method:"getSystemInfo",parameters:{keys:["modelName","serialNumber","firmwareVersion","hardwareVersion","sdkVersion"]},onSuccess:function(o){t("getPlatformInfo: onSuccess"),o.manufacturer="LGE",o.sdkVersion="1.3.22102",delete o.returnValue,"function"==typeof e&&e(o)},onFailure:function(e){t("getPlatformInfo: onFailure"),delete e.returnValue,"function"==typeof o&&o(e)}}),t("DeviceInfo.getPlatformInfo Done")},i.prototype.getSystemUsageInfo=function(e,o,n){t("getSystemUsageInfo: "),c.Request("luna://com.webos.service.commercial.signage.storageservice",{method:"getSystemUsageInfo",parameters:{cpus:n.cpus,memory:n.memory},onSuccess:function(n){if(n.returnValue===!0){var t={};"undefined"!=typeof n.memory&&(t.memory=n.memory),"undefined"!=typeof n.cpus&&(t.cpus=n.cpus),"function"==typeof e&&e(t)}else"function"==typeof o&&o({errorCode:n.errorCode,errorText:n.errorText})},onFailure:function(e){"function"==typeof o&&o({errorCode:e.errorCode,errorText:e.errorText})}}),t("DeviceInfo.getSystemUsageInfo Done")},n.exports=i});
module.exports = cordova.require("cordova/plugin/deviceInfo");
