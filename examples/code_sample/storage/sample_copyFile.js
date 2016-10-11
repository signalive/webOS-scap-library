// Shows the downloaded file at internal/image.jpg from the myImage element, from a remote application
function show_image_from_remoteapp(){
	// Get image element.
	var element = document.getElementById('myImage');
	
	// The downloaded file can be accessed from the local file server.
	element.src = "http://127.0.0.1:9080/image.jpg";
}

// Shows the downloaded file at internal/image.jpg from the myImage element, from a local application
function show_image_from_localapp(){
	var element = document.getElementById('myImage');
	
	// The downloaded file can be accessed from the local file server.
	element.src = "./content/image.jpg";
}

// This function will copy a JPG image from remote site to internal memory. 
// The downloaded file will be displayed in a <img> element.
function api_copy_remote_file(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		//If this is a local app
		show_image_from_localapp();
		
		//If this is a remote app 
		show_image_from_remoteapp();

		callback("copy file success");	  	

	};

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};
	
	// copy file parameters.
	// source : The file to copy from. This file can be a remote file, a local internal file, or a file in a USB memory stick.
	// destination : This is where this file is copied to. Destination can be the internal memory or usb device.
	var options = {
			source: 'http:///remote.file.site/image.jpg',
			destination : 'file:///internal/image.jpg'
	};
	
	// Create storage object and invoke the API with parameters.	
	var storage = new Storage();
	storage.copyFile(successCb, failureCb, options);
}

//This function will copy a JPG image in a internal memory to different localtion in internal memory. 
//The downloaded file will be displayed in a <img> element, from a local application.
function api_copy_local_file(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		//If this is a local app
		show_image_from_localapp();
		
		//If this is a remote app 
		show_image_from_remoteapp();
		callback("copy file success");	  	

	};

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};
	
	// copy file parameters.
	// source : The file to copy from. This file can be a remote file, a local internal file, or a file in a USB memory stick.
	// destination : This is where this file is copied to. Destination can be the internal memory or usb device.
	var options = {
			source: 'file:///internal/tmp/tmp.jpg',
			destination : 'file:///internal/image.jpg'
	};
	
	// Create storage object and invoke the API with parameters.	
	var storage = new Storage();
	storage.copyFile(successCb, failureCb, options);
}



//This function will copy a JPG image from a usb memory to different localtion in internal memory. 
//The downloaded file will be displayed in a <img> element, from a local application.
function api_copy_local_file(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		//If this is a local app
		show_image_from_localapp();
		
		//If this is a remote app 
		show_image_from_remoteapp();
		callback("copy file success");	  	
	};

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};
	
	// copy file parameters.
	// source : The file to copy from. This file can be a remote file, a local internal file, or a file in a USB memory stick.
	// destination : This is where this file is copied to. Destination can be the internal memory or usb device.
	var options = {
			source: 'file:///usb:1/resource file/tmp.jpg',
			destination : 'file:///internal/image.jpg'
	};
	
	// Create storage object and invoke the API with parameters.	
	var storage = new Storage();
	storage.copyFile(successCb, failureCb, options);
}


//This function will copy a JPG image from internal memory to a usb memory. 
//The downloaded file will be displayed in a <img> element, from a local application.
function api_copy_local_file_to_usb(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		//If this is a local app
		show_image_from_localapp();
		
		//If this is a remote app 
		show_image_from_remoteapp();
		callback("copy file success");	  	

	};

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};
	
	// copy file parameters.
	// source : The file to copy from. This file can be a remote file, a local internal file, or a file in a USB memory stick.
	// destination : This is where this file is copied to. Destination can be the internal memory or usb device.
	var options = {
			source: 'file:///internal/myfile/tmp.jpg',
			destination : 'file:///usb:1/image.jpg'
	};
	
	// Create storage object and invoke the API with parameters.	
	var storage = new Storage();
	storage.copyFile(successCb, failureCb, options);
}

//Those options are not allowed as a file path parameter.
function api_copy_bad_options(callback){
	var storage = new Storage();

	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		//If this is a local app
		callback("copy file success");	  	

	};

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};
	
	// Bad options 1.
	// Path cannot have '..' in your path.
	var bad_options1 = {
			source: 'file:///internal/../myfile/tmp.jpg',
			destination : 'file:///internal/image.jpg'
	};
	
	// This will invoke the filaure callback, with error code 'SYNTAX_ERROR'
	storage.copyFile(successCb, failureCb, bad_options1);
	
	// Bad options 2.
	// The length of the path cannot be longer than 256.
	var bad_options2 = {
			source: 'file:///internal/aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
			destination : 'file:///internal/image.jpg'
	};
	
	// This will invoke the filaure callback, with error code 'SYNTAX_ERROR'
	storage.copyFile(successCb, failureCb, bad_options2);
}

//This function will copy a JPG image from remote site , which includes site redirects, to internal memory. 
//The downloaded file will be displayed in a <img> element.
function api_copy_remote_file(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		//If this is a local app
		show_image_from_localapp();
		
		//If this is a remote app 
		show_image_from_remoteapp();

		callback("copy file success");	  	

	};

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};
	
	// copy file parameters.
	// source : The file to copy from. This file can be a remote file, a local internal file, or a file in a USB memory stick.
	// destination : This is where this file is copied to. Destination can be the internal memory or usb device.
	// maxRedirection : maximum number 
	var options = {
			source: 'http:///remote.file.site/redirect',
			destination : 'file:///internal/image.jpg',
			maxRedirection: 3
	};
	
	// Create storage object and invoke the API with parameters.	
	var storage = new Storage();
	storage.copyFile(successCb, failureCb, options);
}

function api_copy_ftp_file(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		//If this is a local app
		show_image_from_localapp();
		
		//If this is a remote app 
		show_image_from_remoteapp();

		callback("copy file success");	  	

	};

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};
	var storage = new Storage();
	
	// copy file parameters.
	// source : The file to copy from. ftp:// protocol should be used for downloading files from FTP sites. 
	// username and password should be part of the URI.
	// destination : This is where this file is copied to. Destination can be the internal memory or usb device.
	var ftp_options = {
			source: 'ftp://user:password@remote.ftp.site/file/path/image.png',
			destination : 'file://internal/image.png',
	};
	
	// Create storage object and invoke the API with parameters.	
	storage.copyFile(successCb, failureCb, ftp_options);
	
	// copy file parameters.
	// source : The file to copy from. ftps:// protocol should be used for downloading files from FTP sites with TLS/SSL. 
	// 			username and password should be part of the URI.
	//			ftpOption.secureOptions.rejectUnauthorized can be used if the ftps server uses self-signed certificate.	
	// destination : This is where this file is copied to. Destination can be the internal memory or usb device.
	var ftps_options = {
			source: 'ftps://user:password@remote.ftp.site/file/path/image.png',
			destination : 'file://internal/image.png',
			ftpOption:{
				secureOptions:{
					rejectUnauthorized : false,
				}
			}
	};
	
	// Create storage object and invoke the API with parameters.	
	storage.copyFile(successCb, failureCb, ftps_options);
	
	// copy file parameters.
	// source : The file to copy from. sftp:// protocol should be used for downloading files from SFTP site (ssh based FTP). 
	// 			username and password should be part of the URI.
	// destination : This is where this file is copied to. Destination can be the internal memory or usb device.
	var sftp_options = {
			source: 'sftp://user:password@remote.ftp.site/file/path/image.png',
			destination : 'file://internal/image.png',
	};
	
	// Create storage object and invoke the API with parameters.	
	storage.copyFile(successCb, failureCb, sftp_options);

	// copy file parameters.
	// source : The file to copy from. sftp:// protocol should be used for downloading files from SFTP site (ssh based FTP). 
	// 			To use key based log in, ftpOption.secureOptions.privatekey should included the key data.
	//			If this key is protected by passphrase, ftpOption.secureOptions.passphrase should contain the passphrase.
	// destination : This is where this file is copied to. Destination can be the internal memory or usb device.
	var key_based_sftp_options = {
			source: 'sftp://user@remote.ftp.site/file/path/image.png',
			destination : 'file://internal/image.png',
			ftpOption:{
				secureOptions:{
					  // This parameter should hold the public key data for key based SSH login.
					  // The key should be openssh format (ex. created using 'ssh-keygen' command).
					  // The public key should be appended to the /.ssh/authorized_keys file in the sftp server. 
					  privateKey: PRIVATE_KEY_DATA,
					  passphrase: "password"
				}
			}			
	};
	
	// Create storage object and invoke the API with parameters.	
	storage.copyFile(successCb, failureCb, key_based_sftp_options);
}



//This function will copy a JPG image from remote site to internal memory. 
//The downloaded file will be displayed in a <img> element.
//This example will copy from a server which will check the session key in the header before permitting the file download.
function api_copy_remote_file_header_option(callback){
	// Callback for a successful execution.
	// This callback will be called without any parameter.		
	var successCb = function (){
		console.log("successfully Set");
		//If this is a local app
		show_image_from_localapp();
		
		//If this is a remote app 
		show_image_from_remoteapp();

		callback("copy file success");	  	

	};

	// Callback for a failed execution.
	// Failure callback will be invoked with the error code and the error text.
	var failureCb = function(cbObject){
		var errorCode = cbObject.errorCode;
		var errorText = cbObject.errorText;
		console.log( " Error Code [" + errorCode + "]: " + errorText); 
		callback(cbObject);
	};
	
	// copy file parameters.
	// source : The file to copy from. This file can be a remote file, a local internal file, or a file in a USB memory stick.
	// destination : This is where this file is copied to. Destination can be the internal memory or usb device.
	// headers : extra values that should be included in the head.
	var header_options = {
			source: 'http://remote.file.site/image.jpg',
			destination : 'file://internal/image.jpg',
			// include the session key in the header.
			headers: {
				session_key : "scap111",
			}
	};
	
	// Create storage object and invoke the API with parameters.	
	var storage = new Storage();
	storage.copyFile(successCb, failureCb, header_options);
}
