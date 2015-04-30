/**
 * Signage API provides following methods that are specialized for webOS Signage:
 * <ul>
 *   <li>Device resource monitoring (fan, lamp, screen, signal, and thermometer) methods</li>
 *   <li>Failover related methods</li>
 *   <li>Tile mode (video wall) related methods</li>
 *   <li>Power save mode related methods</li>
 *   <li>Usage policy related methods</li>
 *   <li>Etc</li>
 * </ul>
 *
 * Externs are for SCAP v1.0
 *
 * @constructor
 */
function Signage() {}


/**
 * Object that holds constant values that represent the standby modes. You can enable or disable the standby mode with this constant.
 * @enum {string}
 */
Signage.AutomaticStandbyMode = { OFF: '', STANDBY_4HOURS: '' };


/**
 * Object that holds constant values that represent the digital input channel. You can set the audio input with this constant.
 * @enum {string}
 */
Signage.DigitalAudioInput = { HDMI_DP: '', AUDIO_IN: '' };


/**
 * Object that holds constant values that represent the dynamic power management. You can turn off the webOS signage device after defined time with this constant.
 * @enum {string}
 */
Signage.DpmMode = {
    OFF: '',
    POWER_OFF_5SECOND: '',
    POWER_OFF_10SECOND: '',
    POWER_OFF_15SECOND: '',
    POWER_OFF_1MINUTE: '',
    POWER_OFF_3MINUTE: '',
    POWER_OFF_5MINUTE: '',
    POWER_OFF_10MINUTE: ''
};


/**
 * Object that holds constant values that represent the event types. This event type constants are used for monitoring status of webOS Signage device, such as fan, lamp, screen, signal status. You can register a item what you want to monitor with this event type constant.
 * @enum {string|number}
 */
Signage.EventType = {
    CURRENT_TEMPERATURE: '',
    FAN_STATUS: '',
    LAMP_STATUS: '',
    SCREEN_STATUS: '',
    SIGNAL_STATUS: ''
};


/**
 * Object that holds constant values that represent the failover mode. When webOS Signage is in a trouble with some problem, it will replace the content from other input sources. You can set the priority order among the input sources with this constant.
 * @enum {string}
 */
Signage.FailoverMode = { OFF: '', AUTO: '', MANUAL: '' };


/**
 * Object that holds constant values that represent ISM (Image Sticking Minimization) method. To prevent burn-in webOS Signage provides several ISM methods.
 * @enum {string}
 */
Signage.IsmMethod = {
    NORMAL: '',
    ORBITER: '',
    INVERSION: '',
    COLORWASH: '',
    WHITEWASH: ''
};


/**
 * Object that holds constant values that represent key input access control. You can allow or block the key input from device built-in button or remote controls.
 * @enum {string}
 */
Signage.KeyOperationMode = { ALLOW_ALL: '', POWER_ONLY: '', BLOCK_ALL: '' };


/**
 * Object that holds constant values that represent monitoring sources (fan, lamp, screen, signal, and thermometer). This constants are used for registerSystemMonitor method parameter.
 * @enum {string}
 */
Signage.MonitoringSource = { FAN: '', LAMP: '', SIGNAL: '', SCREEN: '', THERMOMETER: '' };


/**
 * Object that holds constant values that represent the display modes. You can set the display mode to landscape mode or portrait mode with this constant.
 * @enum {string}
 */
Signage.OsdPortraitMode = { ON: '', OFF: '' };


/**
 * Gets screen capture image from webOS Signage device. The captured screen image will be returned as a JPEG image in Base64 encoded string.
 * @param {function({data: string, size: number, encoding: string})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Signage.prototype.captureScreen = function (successCallback, failureCallback) {};


/**
 * Sets digital audio input mode for each input source. Audio from different source can be mixed with a video in HDMI or DP. This function is used to handle such a example case.
 * @param {function({digitalAudioInputList: Object})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param options
 */
Signage.prototype.setDigitalAudioInputMode = function (successCallback, failureCallback, options) {};


/**
 * Returns failover mode information which shows a failover mode setting and input signal priority array. The failover mode will automatically switch the input signal based on the predefined priority when input signal fails.
 * @param {function({mode: string, priority: Array})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 *
 * @see {Signage.FailoverMode}
 */
Signage.prototype.getFailoverMode = function (successCallback, failureCallback) {};


/**
 * Sets Failover mode. Failover Mode will automatically switch the input signal based on the predefined priority when input signal Fails.
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {{mode: string, priority: Array}} options
 */
Signage.prototype.setFailoverMode = function (successCallback, failureCallback, options) {};


/**
 * Sets ISM (Image Sticking Minimization) method. You can set a ISM method with Signage.IsmMethod constants.
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {{ismMethod: string}} options
 */
Signage.prototype.setIsmMethod = function (successCallback, failureCallback, options) {};


/**
 * Sets display orientation as portrait or landscape. You can set a display orientation with Signage.OsdPortraitMode constants.
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {{portraitMode: string}} options
 */
Signage.prototype.setPortraitMode = function (successCallback, failureCallback, options) {};


/**
 * Returns power save mode information which shows Smart Energy Saving mode, Dynamic Power Management mode, automatic standby mode, and 15 minutes off mode.
 * @param {function({ses: boolean, dpmMode: string, automaticStandby: string, do15MinOff: string})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Signage.prototype.getPowerSaveMode = function (successCallback, failureCallback) {};


/**
 * Sets power save mode. You can set Smart Energy Saving mode, Dynamic Power Management mode, automatic standby mode, and 15 minutes off mode with this method.
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {{ses: boolean, dpmMode: string, automaticStandby: string, do15MinOff: string}} options
 */
Signage.prototype.setPowerSaveMode = function (successCallback, failureCallback, options) {};


/**
 * Returns signage setting information which shows Portrait mode, Digital Audio Input mode, ISM (Image Sticking Minimization) method.
 * @param {function({portraitMode: string, digitalAudioInputMode: Object, issmmethod: string})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Signage.prototype.getSignageInfo = function (successCallback, failureCallback) {};


/**
 * Returns system monitoring information which shows each source monitoring is enabled or not. If one of the attributes is set to true, corresponding sensor events will be sent. Use registerSystemMonitor to register handler for those events.
 * @param {function({fan: boolean, signal: boolean, lamp: boolean, screen: boolean, temperature: boolean})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Signage.prototype.getSystemMonitoringInfo = function (successCallback, failureCallback) {};


/**
 * Returns current tile mode information. Tile mode (video wall mode) is used when signage monitor is used for multi-monitor display.
 * @param {function({enabled: boolean, row: number, column: number, tileId: number, naturalMode: boolean})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Signage.prototype.getTileInfo = function (successCallback, failureCallback) {};


/**
 * Sets tile mode information. Tile mode (video wall mode) is used when signage monitor is used for multi-monitor display.
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {{enabled: boolean, row: number, column: number, tileId: number, naturalMode: boolean}} options
 */
Signage.prototype.setTileInfo = function (successCallback, failureCallback, options) {};


/**
 * Returns current usage data information. Numbers are in hours.
 * @param {function({uptime: number, totalUsed: number})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Signage.prototype.getUsageData = function (successCallback, failureCallback) {};


/**
 * Returns usage policy information which shows some limitation of signage device function.
 * @param {function({remoteKeyOperationMode: string, localKeyOperationMode: string})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Signage.prototype.getUsagePermission = function (successCallback, failureCallback) {};


/**
 * Sets usage policy information. You can set some limitations of signage device function.
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {{remoteKeyOperationMode: string, localKeyOperationMode: string}} options
 */
Signage.prototype.setUsagePermission = function (successCallback, failureCallback, options) {};


/**
 * Registers system monitoring setting. If one of the attributes is set to true, corresponding sensor events will be sent.
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param options
 */
Signage.prototype.registerSystemMonitor = function (successCallback, failureCallback, options) {};


/**
 * Unregisters all the system monitoring handler. Monitoring events will not be received any more.
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Signage.prototype.unregisterSystemMonitor = function (successCallback, failureCallback) {};
