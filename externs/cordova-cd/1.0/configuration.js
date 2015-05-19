/**
 * Configuration API provides methods to check or set the current system time, the picture mode, and some properties.
 *
 * @constructor
 */
function Configuration() {}


/**
 * Object that holds constant values which represent the picture mode.
 * @enum {string}
 */
Configuration.PictureMode = {
    VIVID: '',
    STANDARD: '',
    APS: '',
    CINEMA: '',
    GAME: '',
    SPORTS: '',
    EXPERT1: '',
    EXPERT2: ''
};


/**
 * Sets picture mode of device setting with Configuration.PictureMode constants.
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {{mode: string}} options
 */
Configuration.prototype.setPictureMode = function (successCallback, failureCallback, options) {};


/**
 * Returns current picture mode from setting service. This method return a picture mode with Configuration.PictureMode constants.
 * @param {function({mode: string})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Configuration.prototype.getPictureMode = function (successCallback, failureCallback) {};


/**
 * Sets picture properties of current picture mode. Each picture mode has a set of picture properties. If the picture mode is changed, picture property of that mode will be changed with adjusted value beforehand to facilitate use.
 *
 * <table class="tbListCol">
 * <tr><th width="100px">Property</th><th width="80px">Type</th><th>Description</th><th width="80px">Required</th></tr>
 * <tr>
 * <td>backlight</td>
 * <td style="text-align: center;">number</td>
 * <td>Back light of display (0 ~ 100)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>contrast</td>
 * <td style="text-align: center;">number</td>
 * <td>Contrast of display (0 ~ 100)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>brightness</td>
 * <td style="text-align: center;">number</td>
 * <td>Brightness of display (0 ~ 100)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>sharpness</td>
 * <td style="text-align: center;">number</td>
 * <td>Sharpness of display (0 ~ 100)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>hSharpness</td>
 * <td style="text-align: center;">number</td>
 * <td>Horizontal sharpness of display (0 ~ 50)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>vSharpness</td>
 * <td style="text-align: center;">number</td>
 * <td>Vertical sharpness of display (0 ~ 50)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>color</td>
 * <td style="text-align: center;">number</td>
 * <td>Color saturation of display (0 ~ 100)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>tint</td>
 * <td style="text-align: center;">number</td>
 * <td>Tint of display (0 ~ 100, Red: 0, Green: 100)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>colorTemperature</td>
 * <td style="text-align: center;">number</td>
 * <td>Color temperature of display (0 ~ 100, Warm: 0, Cool: 100)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>dynamicContrast</td>
 * <td style="text-align: center;">string</td>
 * <td>Dynamic contrast level of display (off, low, medium, high)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>superResolution</td>
 * <td style="text-align: center;">string</td>
 * <td>
 * <p>Super Resolution&nbsp;level of display&nbsp;(off, low, medium, high)</p>
 * </td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>colorGamut</td>
 * <td style="text-align: center;">string</td>
 * <td>Color Gamut of display (wide, standard)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>dynamicColor</td>
 * <td style="text-align: center;">string</td>
 * <td>Dynamic color saturation level of display (off, low, medium, high)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>noiseReduction</td>
 * <td style="text-align: center;">string</td>
 * <td>Noise reduction level of display (auto, off, low, medium, high)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>mpegNoiseReduction</td>
 * <td style="text-align: center;">string</td>
 * <td>MPEG noise reduction level of display (auto, off, low, medium, high)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>blackLevel</td>
 * <td style="text-align: center;">string</td>
 * <td>Black level of display (low, high)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * <tr>
 * <td>gamma</td>
 * <td style="text-align: center;">string</td>
 * <td>Gamma level of display (low, medium, high)</td>
 * <td style="text-align: center;">Optional</td>
 * </tr>
 * </table>
 *
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {{backlight: number, contrast: number, brightness: number, sharpness: number, hSharpness: number, vSharpness: number, color: number, tint: number, colorTemperature: number, dynamicContrast: string, superResolution: string, colorGamut: string, dynamicColor: string, noiseReduction: string, mpegNoiseReduction: string, blackLevel: string , gamma: string}} options
 */
Configuration.prototype.setPictureProperty = function (successCallback, failureCallback, options) {};


/**
 * Returns picture properties from current picture mode. Each picture mode has different values for picture properties (such as back light, contrast, brightness, and so on).
 * @param {function({backlight: number, contrast: number, brightness: number, sharpness: number, hSharpness: number, vSharpness: number, color: number, tint: number, colorTemperature: number, dynamicContrast: string, superResolution: string, colorGamut: string, dynamicColor: string, noiseReduction: string, mpegNoiseReduction: string, blackLevel: string , gamma: string})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Configuration.prototype.getPictureProperty = function (successCallback, failureCallback) {};


/**
 * Sets some properties with key and value pair. You can use pre-defined key to store custom value.
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {{alias: string}} options
 */
Configuration.prototype.setProperty = function (successCallback, failureCallback, options) {};


/**
 * Gets some properties with pre-defined key. You can get the stored values from one or more properties with this method.
 * @param {function(Object)} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {string} options
 */
Configuration.prototype.getProperty = function (successCallback, failureCallback, options) {};


/**
 * Sets system time of webOS Signage device with specified time.
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {{year: number, month: number, day: number, hour: number, minute: number, sec: number}} options
 */
Configuration.prototype.setCurrentTime = function (successCallback, failureCallback, options) {};


/**
 * Returns current system time from webOS Signage device.
 * @param {function({year: number, month: number, day: number, hour: number, minute: number, sec: number})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Configuration.prototype.getCurrentTime = function (successCallback, failureCallback) {};


/**
 * Restarts an application. It may be invoked when an application has some trouble on javascript or html code.
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Configuration.prototype.restartApplication = function (successCallback, failureCallback) {};


/**
 * Enables or disables debug mode for current application.
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {{enabled: boolean}} options
 */
Configuration.prototype.debug = function (successCallback, failureCallback, options) {};
