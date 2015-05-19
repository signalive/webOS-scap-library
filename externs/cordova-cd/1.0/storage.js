/**
 * Storage API provides methods that manage the local storage, such as listing, copying and removing the files.
 *
 * @constructor
 * @suppress {duplicate}
 */
function Storage() {}



/**
 * Copies a file from remote server, USB storage, or local storage to the local storage. File location is described in a URI form, where local file is always pointing to the root directory of the internal memory. No directory structure is supported for the internal storage, so no directory structure is allowed for the internal source URI. Following URI schemes are available:
 * <table class="tbListCol">
 *   <tr><th>Type</th><th>URI format</th><th>Description</th></tr>
 *   <tr>
 *     <td>local storage</td>
 *     <td>file://internal/[file name]</td>
 *     <td>Locate to a file in the internal memory space. Internal memory does not support directory structure, and no directory should be included in the path beyond the root path. All the files will be stored in the root path of the internal memory</td>
 *   </tr>
 *   <tr>
 *     <td>USB&nbsp;storage</td>
 *     <td>file://usb:[index]/[file path]</td>
 *     <td>Locate to a file in a USB storage device at USB port index number.</td>
 *   </tr>
 *   <tr>
 *     <td>Remote server</td>
 *     <td>http://[domain]/[file path]</td>
 *     <td>Locate to a file in the remote location. Download a file with using HTTP GET protocol.</td>
 *   </tr>
 * </table>
 *
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {{source: string, destination: string}} options
 */
Storage.prototype.copyFile = function (successCallback, failureCallback, options) {};


/**
 * Returns the internal memory status. Return object holds free/used space and total space in KB.
 *
 * @param {function({free: number, total: number, used: number})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Storage.prototype.getStorageInfo = function (successCallback, failureCallback) {};


/**
 * Lists files in the internal memory directory. File location is described in a URI form, where local file is always pointing to the root directory of the internal memory. Listing a directory in any other path is not allowed.
 *
 * @param {function({files: Array.<{name: string, type: string, size: number}>, totalCount: number})} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Storage.prototype.listFiles = function (successCallback, failureCallback) {};


/**
 * Removes a local file in the internal storage. File location is described in a URI form. Directory structure is not supported, and this URI should not have any directory in its path. All files will be stored in the root directory of the internal memory. Removing a file in any other path is not allowed.
 *
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 * @param {{file: string}} options
 */
Storage.prototype.removeFile = function (successCallback, failureCallback, options) {};


/**
 * Upgrades an application from the remote server to the local storage. This new application will be launched at the next boot time and the old one will be deleted at the same time. An application on server should be located as like "http://serverIP:serverPort/procentric/scap/application/scap_app.zip".The remote server information(IP address and port number) is set in a setting menu.
 *
 * @param {function()} successCallback
 * @param {function({errorCode: number, errorText: string})} failureCallback
 */
Storage.prototype.upgradeApplication = function (successCallback, failureCallback) {};
