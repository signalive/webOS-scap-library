	var apilist ={
			configuration : [
			                 'getCurrentTime',
			                 'getPictureMode',
			                 'getPictureProperty',
			                 'setCurrentTime',
			                 'setPictureMode',
			                 'setPictureProperty',
			                 'getProperty',
			                 'setProperty',
			                 'getServerProperty',
			                 'setServerProperty',
			                 'clearCache',
			                 'getTimeZoneList',
			                 'setTimeZone',
			                 'getTimeZone'
							],
			deviceInfo : [
			              'getNetworkInfo',
			              'getNetworkMacInfo',
			              'getPlatformInfo',
			              'getSystemUsageInfo',
			              'setNetworkInfo',
			              'getWifiList',
			              'connectWifi',
			              'startWps',
			              'stopWps',
			              'setBeaconInfo',
			              'getBeaconInfo',
			              'setSoftApInfo',
			              'getSoftApInfo'
			     			],
			inputSource : [
										 'initialize',
			               'changeInputSource',
			               'getInputSourceStatus'
			               
			    			],
			power : [
			         'enableAllOffTimer',
			         'enableAllOnTimer',
			         'enableWakeOnLan',
			         'executePowerCommand',
			         'getOffTimerList',
			         'getOnTimerList',
			         'getPowerStatus',
			         'setDisplayMode',
			         'addOffTimer',
			         'deleteOffTimer',
			         'addOnTimer',
			         'deleteOnTimer'
			    			],
			signage : [
			           'setPortraitMode',
			           'setFailoverMode',
			           'getFailoverMode',
			           'setTileInfo',
			           'getTileInfo',
			           'getSignageInfo',
			           'setIsmMethod',
			           'setDigitalAudioInputMode',
			           'registerSystemMonitor',
			           'unregisterSystemMonitor',
			           'getSystemMonitoringInfo',
			           'setPowerSaveMode',
			           'getPowerSaveMode',
			           'setUsagePermission',
			           'getUsagePermission',
			           'getUsageData',
			           'captureScreen',
			           'enableCheckScreen'
				   			],
			sound : [
			         'getSoundStatus',
			         'setVolumeLevel',
			         'setExternalSpeaker',
			         'setMuted'
			         ],
			storage : [
						'copyFile',
						'getStorageInfo',
						'listFiles',
						'removeFile',
						'upgradeApplication',
						'removeApplication',
						'downloadFirmware',
						'upgradeFirmware',
						'getFirmwareUpgradeStatus',
						'changeLogoImage',
						'writeFile',
						'readFile',
						'moveFile',
						'removeAll',
						'statFile',
						'unzipFile',
						'fsync'
						],
			video : [
			         'getVideoStatus',
			         'setVideoSize',
			         'getContentRotation',
			         'setContentRotation'
			         ],
	};
	
	function getAPIList(sidebarID){
		console.log('getAPIList');
				
		var sidebar = document.getElementById(sidebarID);
		sidebar.innerHTML = "";
  		for(var category in apilist){
  			console.log('category: '+ category);
  			
  			var categoryP = document.createElement("h4");
  			categoryP.value = category;
  			categoryP.appendChild(document.createTextNode(category));
			sidebar.appendChild(categoryP);
			categoryP.onclick = function(){
				var myCategory = this.value;
				console.log(myCategory + " onClick!!!");
				var subele = document.getElementById('ul_sidebar_'+ myCategory);
				console.log("subele.style.display: " + subele.style.display);
				if(subele.style.display != 'none')
					subele.style.display = 'none';
				else
					subele.style.display = '';
			}
						
			var apiUL = document.createElement("ul");
			apiUL.id ='ul_sidebar_'+category;
			apiUL.style.display = 'none';
			sidebar.appendChild(apiUL);
  			for( var i = 0; i < apilist[category].length; ++i){
  				var apiName=apilist[category][i];
  				console.log("Load sample File: " + apiName);
  				var imported = document.createElement('script');
  				imported.src = './code_sample/'+category+'/sample_' + apiName + '.js';
  				document.head.appendChild(imported);
  				
  				var li = document.createElement("li");
  				li.id = 'api_' + apiName;
  				var anchor = document.createElement("a");
  				anchor.href = "javascript:showSample('"+apiName+"','"+category+"')";
  				anchor.appendChild(document.createTextNode(apiName));
  				li.appendChild(anchor);
  				apiUL.appendChild(li);		
  			}
  		}
  	}
	
	function getRowsAndColumn(text){
		var ret ={
				rows : 0,
				cols: 0
		}
		var lines = text.split('\n');
		ret.rows = lines.length;
		for(var i =0 ;i <lines.length; ++i){
			var line = lines[i];
			if(line.length > ret.cols)
				ret.cols = line.length;
		}
		
		return ret;
	}
	
	function showSample(api,category){
		console.log("API: " + api + " : Category " + category);
		var apiName = 'api_'+api;
		console.log("apiName: " + apiName);

		console.log("Sample Code: " + window[apiName]);

		var codearea = document.getElementById('code_area');
		var codeText = window[apiName].toString();
		var ret = getRowsAndColumn(codeText);
		codearea.cols = ret.cols + 30;
		codearea.rows = ret.rows + 3;		
		codearea.innerHTML =  codeText;
		
		var cb = function(ret){   
			var retvalText = document.getElementById("return_value_area");
	//		retvalElement.appendChild(document.createTextNode("Return Value is : " + ret));	 	
			retvalText.innerHTML = "Return Value: \n";
			if(typeof ret === 'object')
				retvalText.innerHTML += JSON.stringify(ret,null,3);
			else 
				retvalText.innerHTML += ret;
							
		};
		var retvalText = document.getElementById("return_value_area");
		retvalText.innerHTML = "waiting for the API call to return...";
		window[apiName](cb);
	}
	