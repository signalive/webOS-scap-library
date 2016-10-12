// TODO: Fix `any` declarations


/**
 * General scap error interface.
 */
declare interface ScapError {
    errorCode: string,
    errorText: string
    errorKey?: string[],
    method?: string
}


/**
 * Configuration
 */
declare module 'webOS-scap-library/js/cordova-cd/1.3/configuration' {
    type AppMode = 'local' | 'usb' | 'remote';
    type PictureMode = 'eco' | 'cinema' | 'expert1' | 'expert2' | 'game' | 'sports' | 'normal' | 'vivid';

    interface TimeZone {
        continent: string,
        country: string,
        city: string
    }

    interface CurrentTimeOptions {
        year: number,
        month: number,
        day: number,
        hour: number,
        minute: number,
        sec: number,
        ntp?: boolean
    }

    interface PicturePropertyOptions {
        backlight?: number,
        contrast?: number,
        brightness?: number,
        sharpness?: number,
        hSharpness?: number,
        vSharpness?: number,
        color?: number,
        tint?: number,
        colorTemperature?: number,
        dynamicContrast?: 'off' | 'low' | 'medium' | 'high',
        superResolution?: 'off' | 'low' | 'medium' | 'high',
        colorGamut?: 'wide' | 'standart',
        dynamicColor?: 'off' | 'low' | 'medium' | 'high',
        noiseReduction?: 'auto' | 'off' | 'low' | 'medium' | 'high',
        mpegNoiseReduction?: 'auto' | 'off' | 'low' | 'medium' | 'high',
        blackLevel?: 'low' | 'high',
        gamma?: 'low' | 'medium' | 'high' | 'high2'
    }

    interface ServerPropertyOptions {
        serverIp?: string,
        serverPort?: number,
        secureConnection?: boolean,
        appLaunchMode: AppMode,
        appType?: 'zip' | 'apk',
        fqdnMode: boolean,
        fqdnAddr?: string
    }

    // TODO: getProperty and setProperty methods are not implemented
    class Configuration {
        static AppMode: {
            LOCAL: AppMode,
            REMOTE: AppMode,
            USB: AppMode,
        };

        static PictureMode: {
            APS: PictureMode,
            CINEMA: PictureMode,
            EXPERT1: PictureMode,
            EXPERT2: PictureMode,
            GAME: PictureMode,
            SPORTS: PictureMode,
            STANDARD: PictureMode,
            VIVID: PictureMode
        };


        /**
         * Clears cached data on a signage device.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/configuration/?wos_flag=clearCache#clearCache
         */
        clearCache(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the current system time.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/configuration/?wos_flag=getCurrentTime#getCurrentTime
         */
        getCurrentTime(
            successCallback: (result: CurrentTimeOptions) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the current picture mode in the Configuration.PictureMode format.
         * Each picture mode consists of its own set of predefined picture properties.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/configuration/?wos_flag=getPictureMode#getPictureMode
         */
        getPictureMode(
            successCallback: (result: {
                mode: PictureMode
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the picture properties of the current picture mode. Each picture mode
         * consists of its own set of predefined picture properties (such as backlight
         * level, contrast, brightness).
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/configuration/?wos_flag=getPictureProperty#getPictureProperty
         */
        getPictureProperty(
            successCallback: (result: PicturePropertyOptions) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the current server property, i.e. server settings, on webOS Signage.
         * The server property contains information about the application launch mode
         * and server settings for app update and app launching.
         * Since: SCAP v1.1
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/configuration/?wos_flag=getServerProperty#getServerProperty
         */
        getServerProperty(
            successCallback: (result: ServerPropertyOptions) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the current time zone on webOS Signage.
         * Since: SCAP v1.1
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/configuration/?wos_flag=getTimeZone#getTimeZone
         */
        getTimeZone(
            successCallback: (result: {
                timeZone: TimeZone
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets a list of the time zones stored on webOS Signage.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/configuration/?wos_flag=getTimeZoneList#getTimeZoneList
         */
        getTimeZoneList(
            successCallback: (result: {
                timeZone: TimeZone[]
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Restarts the running app. (Currently there can be only one app running at any time,
         * thus the method caller will be restarting itself). This method may be invoked when an
         * app is not running properly due to errors in JavaScript or HTML code.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/configuration/?wos_flag=restartApplication#restartApplication
         */
        restartApplication(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Sets the system time with the given time value.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/configuration/?wos_flag=setCurrentTime#setCurrentTime
         */
        setCurrentTime(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: CurrentTimeOptions
        ): void;


        /**
         * Sets the picture mode of the system with the given Configuration.PictureMode constant.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/configuration/?wos_flag=setPictureMode#setPictureMode
         */
        setPictureMode(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                mode: PictureMode
            }
        ): void;


        /**
         * Sets the properties for the current picture mode set in the system.
         * Each picture mode consits of its own set of picture properties.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/configuration/?wos_flag=setPictureProperty#setPictureProperty
         */
        setPictureProperty(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: PicturePropertyOptions
        ): void;


        /**
         * Sets the server property, i.e. server settings of a signage device. The server
         * property contains information about the application launch mode and server settings
         * for app update and app launching.
         * Since: SCAP v1.1
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/configuration/?wos_flag=setServerProperty#setServerProperty
         */
        setServerProperty(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: ServerPropertyOptions
        ): void;


        /**
         * Sets the webOS Signage time zone to the given time zone. The given time zone
         * must exist in the time zone list retrievable by the Configuration.getTimeZoneList()
         * method. Check the valid time zones for the SCAP API here.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/configuration/?wos_flag=setTimeZone#setTimeZone
         */
        setTimeZone(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                timeZone: TimeZone
            }
        ): void;
    }

    export = Configuration;
}


/**
 * DeviceInfo
 */
declare module 'webOS-scap-library/js/cordova-cd/1.3/deviceInfo' {
    interface BeaconInfoOptions {
        enabled: boolean,
        uuid: string,
        major: number,
        minor: number
    }

    interface SoftApInfoOptions {
        enabled: boolean,
        ssid: string,
        securityKey: string
    }

    interface NetworkInfoInterfaceOptions {
        state: 'connected' | 'disconnected',
        interfaceName?: string,
        ipAddress?: string,
        netmask?: string,
        gateway?: string,
        onInternet?: 'yes' | 'no',
        method?: 'dhcp' | 'manual',
        dns1?: string,
        dns2?: string
    }

    class DeviceInfo {
        /**
         * Connects a signage device to a wireless network using the given SSID and password.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/deviceinfo/?wos_flag=connectWifi#connectWifi
         */
        connectWifi(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                ssid: string,
                password: string,
                hidden?: boolean
            }
        ): void;


        /**
         * Gets the information on the LG Beacon of a signage device.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/deviceinfo/?wos_flag=getBeaconInfo#getBeaconInfo
         */
        getBeaconInfo(
            successCallback: (result: BeaconInfoOptions) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the network information of a signage device. The network information includes
         * IP address assigned to wireless/wired LAN, gateway address, netmask address and DNS address.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/deviceinfo/?wos_flag=getNetworkInfo#getNetworkInfo
         */
        getNetworkInfo(
            successCallback: (result: {
                isInternetConnectionAvailable: boolean,
                wired: NetworkInfoInterfaceOptions,
                wifi: NetworkInfoInterfaceOptions
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the MAC address of the network device.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/deviceinfo/?wos_flag=getNetworkMacInfo#getNetworkMacInfo
         */
        getNetworkMacInfo(
            successCallback: (result: {
                wiredInfo: {
                    macAddress: string
                },
                wifiInfo: {
                    macAddress: string
                }
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the information of the webOS Signage platform on the signage device. The information
         * includes manufacturer, model name, software version, hardware version and product serial number.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/deviceinfo/?wos_flag=getPlatformInfo#getPlatformInfo
         */
        getPlatformInfo(
            successCallback: (result: {
                hardwareVersion: string,
                manufacturer: string,
                modelName: string,
                sdkVersion: string,
                serialNumber: string,
                firmwareVersion: string
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the Soft AP information of a signage device.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/deviceinfo/?wos_flag=getSoftApInfo#getSoftApInfo
         */
        getSoftApInfo(
            successCallback: (result: SoftApInfoOptions) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the device usage information including CPU and memory status.
         * Since: SCAP v1.2
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/deviceinfo/?wos_flag=getSystemUsageInfo#getSystemUsageInfo
         */
        getSystemUsageInfo(
            successCallback: (result: {
                cpus: {
                    model: string,
                    times: {
                        user: number,
                        nice: number,
                        sys: number,
                        idle: number,
                        irq: number
                    }
                }[],
                memory: {
                    total: number,
                    free: number
                }
            }) => void,
            errorCallback: (err: ScapError) => void,
            options: {
                cpus: boolean,
                memory: boolean
            }
        ): void;


        /**
         * Gets a list of WiFi networks detected.
         * Since: SCAP v1.0
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/deviceinfo/?wos_flag=getWifiList#getWifiList
         */
        getWifiList(
            successCallback: (result: {
                networkInfo: {
                    signalLevel: number,
                    ssid: string
                }[]
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Sets the information of the LG Beacon on a signage device.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/deviceinfo/?wos_flag=setBeaconInfo#setBeaconInfo
         */
        setBeaconInfo(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: BeaconInfoOptions
        ): void;


        /**
         * Sets the Soft AP information.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/deviceinfo/?wos_flag=setSoftApInfo#setSoftApInfo
         */
        setSoftApInfo(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: SoftApInfoOptions
        ): void;


        /**
         * Sets the network settings on a signage device. The network settings includes the IP address
         * assigned to wireless/wired LAN, gateway address, netmask and DNS address.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/deviceinfo/?wos_flag=setNetworkInfo#setNetworkInfo
         */
        setNetworkInfo(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                wired: NetworkInfoInterfaceOptions,
                wifi: NetworkInfoInterfaceOptions
            }
        ): void;


        /**
         * Starts WPS (WiFi Protected Setup) using PBC (Push Button Configuration) or PIN.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/deviceinfo/?wos_flag=startWps#startWps
         */
        startWps(
            successCallback: (result: {
                pin?: string
            }) => void,
            errorCallback: (err: ScapError) => void,
            options: {
                method: 'PBS' | 'PIN'
            }
        ): void;


        /**
         * Stops the WPS.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/deviceinfo/?wos_flag=stopWps#stopWps
         */
        stopWps(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void
        ): void;
    }

    export = DeviceInfo;
}


/**
 * InputSource
 */
declare module 'webOS-scap-library/js/cordova-cd/1.3/inputSource' {
    class InputSource {
        /**
         * Sets the given input source as the current input source. Call this method to change the
         * input mode after initializing the inputSource object by using the InputSource.initialize() method.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/inputsource/?wos_flag=changeInputSource#changeInputSource
         */
        changeInputSource(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                src: string
            }
        ): void;


        /**
         * Gets the current input source, the input source status, and a list of available input sources.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/inputsource/?wos_flag=getInputSourceStatus#getInputSourceStatus
         */
        getInputSourceStatus(
            successCallback: (result: {
                inputSourceList: {
                    inputPort: string
                }[],
                currentSignalState: 'good' | 'bad' | 'unknown',
                currentInputSource: string
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Creates a video tag with the given ID inside the given div tag. The video sourced
         * from the current input source is played in this video tag.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/inputsource/?wos_flag=initialize#initialize
         */
        initialize(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                divId: string,
                videoId: string,
                callback: () => void,
                src: string
            }
        ): void;
    }

    export = InputSource;
}


/**
 * Power
 */
declare module 'webOS-scap-library/js/cordova-cd/1.3/power' {
    type DisplayMode = 'Screen Off' | 'Active';
    type PowerCommand = 'reboot' | 'powerOff';

    interface OffTimerListItem {
        hour: number,
        minute: number,
        week: number
    }

    interface OnTimerListItem {
        hour: number,
        minute: number,
        week: number,
        inputSource: string
    }

    class Power {
        static DisplayMode: {
            DISPLAY_OFF: DisplayMode,
            DISPLAY_ON: DisplayMode
        };

        static PowerCommand: {
            REBOOT: PowerCommand,
            SHUTDOWN: PowerCommand
        };

        static TimerWeek: {
            MONDAY: number,
            TUESDAY: number,
            WEDNESDAY: number,
            THURSDAY: number,
            FRIDAY: number,
            SATURDAY: number,
            SUNDAY: number,
            EVERYDAY: number
        }


        /**
         * Adds a power-off timer with the given time and day information on which the signage
         * device shall be turned off. The signage device will be shut down on the scheduled time.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/power/?wos_flag=addOffTimer#addOffTimer
         */
        addOffTimer(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: OffTimerListItem
        ): void;


        /**
         * Adds a power-on timer for the given time and day on which the signage device shall be turned on.
         * A signage device will be turned on, displaying the given input source, on the scheduled time.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/power/?wos_flag=addOnTimer#addOnTimer
         */
        addOnTimer(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: OnTimerListItem
        ): void;


        /**
         * Deletes from the timer list the power-off timer with the schedule that matches the
         * given time and day. If the list has more than one timer entry with the given schedule,
         * this method deletes  the oldest entry in the list.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/power/?wos_flag=deleteOffTimer#deleteOffTimer
         */
        deleteOffTimer(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: OffTimerListItem
        ): void;


        /**
         * Deletes from the timer list the power-on timer with the schedule that matches the given time and day.
         * If the list has more than one timer entry with the given schedule, this method deletes the
         * oldest entry in the list.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/power/?wos_flag=deleteOnTimer#deleteOnTimer
         */
        deleteOnTimer(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: OnTimerListItem
        ): void;


        /**
         * Controls all the power-off timers, and deletes all the power-off timers if specified.
         * This method does not change the values of any power-off timers set by the Power.addOffTimer() method.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/power/?wos_flag=enableAllOffTimer#enableAllOffTimer
         */
        enableAllOffTimer(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                allOffTimer: boolean,
                clearOffTimer?: boolean
            }
        ): void;


        /**
         * Turns all the power-on timers on or off. This method does not change the values
         * of any power-off timers set by the Power.addOnTimer() method.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/power/?wos_flag=enableAllOnTimer#enableAllOnTimer
         */
        enableAllOnTimer(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                allOffTimer: boolean,
                clearOffTimer?: boolean
            }
        ): void;


        /**
         * Enables OR disables the WoL (Wake-on-LAN) feature.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/power/?wos_flag=enableWakeOnLan#enableWakeOnLan
         */
        enableWakeOnLan(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                wakeOnLan: boolean
            }
        ): void;


        /**
         * Runs the given power management command (Power.PowerCommand).
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/power/?wos_flag=executePowerCommand#executePowerCommand
         */
        executePowerCommand(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                powerCommand: PowerCommand
            }
        ): void;


        /**
         * Gets a list of all the power-off timers.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/power/?wos_flag=getOffTimerList#getOffTimerList
         */
        getOffTimerList(
            successCallback: (result: {
                timerList: OffTimerListItem[]
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the list of all the power-on timers.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/power/?wos_flag=getOnTimerList#getOnTimerList
         */
        getOnTimerList(
            successCallback: (result: {
                timerList: OnTimerListItem[]
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the power settings of the signage device. The settings information include
         * the statuses of WoL, display mode, power-on scheduling and power-off scheduling.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/power/?wos_flag=getPowerStatus#getPowerStatus
         */
        getPowerStatus(
            successCallback: (result: {
                wakeOnLan: boolean,
                displayMode: DisplayMode,
                allOffTimer: boolean,
                allOnTimer: boolean
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Turns on OR off the signage device display panel. This method is only
         * effective on the display and NOT on signage device's main power.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/power/?wos_flag=setDisplayMode#setDisplayMode
         */
        setDisplayMode(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                displayMode: DisplayMode
            }
        ): void;
    }

    export = Power;
}


/**
 * Signage
 */
declare module 'webOS-scap-library/js/cordova-cd/1.3/signage' {
    type AutomaticStandbyMode = 'off' | '4 hours';
    type DigitalAudioInput = 'audioIn' | 'hdmi';
    type DpmMode = 'off' | '5sec' | '10sec' | '15sec' | '1min' | '3min' | '5min' | '10min';
    type EventType = 'CURRENT_TEMPERATURE' | 'FAN_STATUS' | 'LAMP_STATUS' | 'SCREEN_STATUS' | 'SIGNAL_STATUS';
    type FailoverMode = 'auto' | 'manual' | 'off';
    type IsmMethod = 'COLORWASH' | 'INVERSION' | 'NORMAL' | 'ORBITER' | 'WHITEWASH';
    type KeyOperationMode = 'normal' | 'blockAll' | 'usePwrOnly';
    type MonitoringSource = 'FAN' | 'LAMP' | 'SCREEN' | 'SIGNAL' | 'THERMOMETER';
    type OsdPortraitMode = 'off' | '90';

    class Signage {
        static AutomaticStandbyMode: {
            OFF: AutomaticStandbyMode,
            STANDBY_4HOURS: AutomaticStandbyMode
        };

        static DigitalAudioInput: {
            AUDIO_IN: DigitalAudioInput,
            HDMI_DP: DigitalAudioInput
        };

        static DpmMode: {
            OFF: DpmMode,
            POWER_OFF_5SECOND: DpmMode,
            OFPOWER_OFF_10SECONDF: DpmMode,
            POWER_OFF_15SECOND: DpmMode,
            POWER_OFF_1MINUTE: DpmMode,
            POWER_OFF_3MINUTE: DpmMode,
            POWER_OFF_5MINUTE: DpmMode,
            POWER_OFF_10MINUTE: DpmMode
        };

        static EventType: {
            CURRENT_TEMPERATURE: EventType,
            FAN_STATUS: EventType,
            LAMP_STATUS: EventType,
            SCREEN_STATUS: EventType,
            SIGNAL_STATUS: EventType
        };

        static FailoverMode: {
            AUTO: FailoverMode,
            MANUAL: FailoverMode,
            OFF: FailoverMode
        };

        static IsmMethod: {
            COLORWASH: IsmMethod,
            INVERSION: IsmMethod,
            NORMAL: IsmMethod,
            ORBITER: IsmMethod,
            WHITEWASH: IsmMethod
        };

        static KeyOperationMode: {
            ALLOW_ALL: KeyOperationMode,
            BLOCK_ALL: KeyOperationMode,
            POWER_ONLY: KeyOperationMode
        };

        static MonitoringSource: {
            FAN: MonitoringSource,
            LAMP: MonitoringSource,
            SCREEN: MonitoringSource,
            SIGNAL: MonitoringSource,
            THERMOMETER: MonitoringSource
        };

        static OsdPortraitMode: {
            OFF: OsdPortraitMode,
            ON: OsdPortraitMode
        };


        /**
         * Takes a screenshot on the signage device and returns the screenshot as a Base64-encoded
         * JPEG String. This method provides an option to save the screenshot as a file in the local
         * storage or USB storage, depending on the app location.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=captureScreen#captureScreen
         */
        captureScreen(
            successCallback: (result: {
                data: string,
                size: number,
                encoding: string
            }) => void,
            errorCallback: (err: ScapError) => void,
            options: {
                save?: boolean,
                thumbnail?: boolean
            }
        ): void;


        /**
         * Enables the pixel sensor to check if the screen of a signage device has any faults.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=enableCheckScreen#enableCheckScreen
         */
        enableCheckScreen(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                checkScreen: boolean
            }
        ): void;


        /**
         * Gets the failover mode settings and input signal priority. If the failover mode is on when
         * the active input signal fails, webOS Signage automatically switches the input signal based
         * on the predefined priority.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=getFailoverMode#getFailoverMode
         */
        getFailoverMode(
            successCallback: (result: {
                mode: FailoverMode,
                priority: string[]
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the information on power save mode, including Smart Energy Saving mode, Dynamic Power
         * Management mode, automatic standby mode, and 15 minutes off mode.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=getPowerSaveMode#getPowerSaveMode
         */
        getPowerSaveMode(
            successCallback: (result: {
                ses: boolean,
                dpmMode: DpmMode,
                automaticStandby: AutomaticStandbyMode,
                do15MinOff: boolean
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Returns signage settings information such as Portrait mode status, Digital Audio
         * Input mode status, ISM (Image Sticking Minimization) method.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=getSignageInfo#getSignageInfo
         */
        getSignageInfo(
            successCallback: (result: {
                portraitMode: OsdPortraitMode
                digitalAudioInputMode: any,
                ismMethod: IsmMethod,
                checkScreen: boolean
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the information about system monitoring status; a list of monitoring targets and whether
         * monitoring for each target is enabled or disabled. Events get fired for the targets set to be
         * monitored. To handle these events, use the Signage.registerSystemMonitor() method to register
         * an event handler.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=getSystemMonitoringInfo#getSystemMonitoringInfo
         */
        getSystemMonitoringInfo(
            successCallback: (result: {
                fan: boolean,
                signal: boolean,
                lamp: boolean,
                screen: boolean,
                temperature: boolean
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Returns the information on the current tile mode. Tile mode (video wall mode)
         * is used when the signage device is used for multi-monitor display.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=getTileInfo#getTileInfo
         */
        getTileInfo(
            successCallback: (result: {
                enabled: boolean,
                row: number,
                column: number,
                tileId: number,
                naturalMode: boolean
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Returns the current usage data information.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=getUsageData#getUsageData
         */
        getUsageData(
            successCallback: (result: {
                uptime: number,
                totalUsed: number
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the input access control information.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=getUsagePermission#getUsagePermission
         */
        getUsagePermission(
            successCallback: (result: {
                remoteKeyOperationMode: KeyOperationMode,
                localKeyOperationMode: KeyOperationMode
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Registers system monitoring request. This method supports batch registration of monitoring targets.
         * If any one of the monitoring target property is set to true, corresponding sensor events get fired.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=registerSystemMonitor#registerSystemMonitor
         */
        registerSystemMonitor(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                source: MonitoringSource,
                type: EventType,
                data: {
                    temperature: number,
                    status: string
                }
            }
        ): void;


        /**
         * Sets the digital audio input mode for each input source. Use this method to mix
         * the audio from different sources with video from HDMI or DP sources.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=setDigitalAudioInputMode#setDigitalAudioInputMode
         */
        setDigitalAudioInputMode(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                digitalAudioInputList: any
            }
        ): void;


        /**
         * Sets the digital audio input mode for each input source. Use this method to mix the
         * audio from different sources with video from HDMI or DP sources.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=setDigitalAudioInputMode#setDigitalAudioInputMode
         */
        setFailoverMode(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                failoverMode: {
                    mode: FailoverMode,
                    priority?: string[]
                }
            }
        ): void;


        /**
         * Sets the ISM (Image Sticking Minimization) method with the given constant string.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=setIsmMethod#setIsmMethod
         */
        setIsmMethod(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                ismMethod: IsmMethod
            }
        ): void;


        /**
         * Sets the display orientation—portrait or landscape—to the given orientation mode.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=setPortraitMode#setPortraitMode
         */
        setPortraitMode(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                portraitMode: OsdPortraitMode
            }
        ): void;


        /**
         * Sets the power save mode including Smart Energy Saving mode, Dynamic Power
         * Management mode, automatic standby mode, and 15 minutes off mode.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=setPowerSaveMode#setPowerSaveMode
         */
        setPowerSaveMode(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                powerSaveMode: {
                    ses: boolean,
                    dpmMode: DpmMode,
                    automaticStandby: AutomaticStandbyMode,
                    do15MinOff: boolean
                }
            }
        ): void;


        /**
         * Sets the tile mode information. Tile mode (video wall mode) is used when
         * signage monitor is used for multi-monitor display.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=setTileInfo#setTileInfo
         */
        setTileInfo(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                tileInfo: {
                    enabled?: boolean,
                    row?: number,
                    column?: number,
                    tileId?: number,
                    naturalMode?: boolean
                }
            }
        ): void;


        /**
         * Sets the input access control with given settings.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=setUsagePermission#setUsagePermission
         */
        setUsagePermission(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                policy: {
                    remoteKeyOperationMode?: KeyOperationMode,
                    localKeyOperationMode?: KeyOperationMode
                }
            }
        ): void;


        /**
         * Unregisters all the system monitoring handlers and stops receiving monitoring-events.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/signage/?wos_flag=unregisterSystemMonitor#unregisterSystemMonitor
         */
        unregisterSystemMonitor(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void
        ): void;
    }

    export = Signage;
}


/**
 * Sound
 */
declare module 'webOS-scap-library/js/cordova-cd/1.3/sound' {
    class Sound {
        /**
         * Returns the signage device's system sound information, such as sound volume level and mute status.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/sound/?wos_flag=getSoundStatus#getSoundStatus
         */
        getSoundInformation(
            successCallback: (result: {
                level: number,
                mute: boolean,
                externalSpeaker: boolean
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Enables or disables an external speaker. If this method is successfully executed,
         * the enabled speaker will be unmuted.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/sound/?wos_flag=setExternalSpeaker#setExternalSpeaker
         */
        setExternalSpeaker(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                externalSpeaker: boolean
            }
        ): void;


        /**
         * Mutes or unmutes the system sound.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/sound/?wos_flag=setMuted#setMuted
         */
        setMuted(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                muted: boolean
            }
        ): void;
    }

    export = Sound;
}


/**
 * Storage
 */
declare module 'webOS-scap-library/js/cordova-cd/1.3/storage' {
    type AppMode = 'local' | 'usb' | 'remote';

    class Storage {
        static AppMode: {
            LOCAL: AppMode,
            USB: AppMode,
            REMOTE: AppMode
        };


        /**
         * Changes the logo image that is displayed at the time of booting. The default image
         * is the LG logo. The new logo image can be loaded from the local storage, USB flash drive,
         * or remote server. Specify the file location as a URI, as guided below.
         * Since: SCAP v1.2
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=changeLogoImage#changeLogoImage
         */
        changeLogoImage(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                uri: string
            }
        ): void;



        /**
         * Copies a file from the given source location to the given target location. Available source
         * locations are; remote server, USB flash drive, SD card and local storage. Specify the file
         * or directory as a URI, as guided below.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=copyFile#copyFile
         */
        copyFile(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                source: string,
                destination: string,
                ftpOption?: {
                    secureOptions?: {
                        privateKey?: string,
                        passphrase?: string
                    },
                    connTimeout?: number,
                    pasvTimeout?: number,
                    keepalive?: number
                },
                httpOption?: {
                    maxRedirection?: number,
                    headers?: any,
                    timeout?: number
                }
            }
        ): void;


        /**
         * Downloads a firmware file from a remote server using HTTP or HTTPS protocols. Before downloading,
         * check the free space available on local storage using the Storage.getStorageInfo() method.
         * Give the firmware file location as a URI.
         * Since: SCAP v1.2
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=downloadFirmware#downloadFirmware
         */
        downloadFirmware(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                uri: string
            }
        ): void;


        /**
         * Checks if the given file or directory does exist in the local storage or an external
         * storage. Give the pathname as a URI, as guided below. To check for a file or a directory
         * in a USB flash drive, the USB flash drive should already be connected to the USB Port of
         * a webOS Signage device, with proper permission.
         * Since: SCAP v1.1
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=exists#exists
         */
        exists(
            successCallback: (result: {
                exists: boolean
            }) => void,
            errorCallback: (err: ScapError) => void,
            options: {
                path: string
            }
        ): void;


        /**
         * Flushes modified file(s) to the file system of the given storage.(synchronizes a file's
         * in-core state with storage device.)
         * Since: SCAP v1.2
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=fsync#fsync
         */
        fsync(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                path: string
            }
        ): void;


        /**
         * Gets the status of firmware upgrading process.
         * Since: SCAP v1.2
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=getFirmwareUpgradeStatus#getFirmwareUpgradeStatus
         */
        getFirmwareUpgradeStatus(
            successCallback: (result: {
                status: 'idle' | 'downloading' | 'ready' | 'in progress' | 'completed' | 'fail',
                downloadProgress: number,
                upgradeProgress: number
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the storage status information including free space and total space information.
         * External storage information is also returned, if any is connected to a signage device.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=getStorageInfo#getStorageInfo
         */
        getStorageInfo(
            successCallback: (result: {
                free: number,
                total: number,
                used: number,
                externalMemory: any
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Lists the files in the given directory stored in the local storage or in an external storage.
         * The directory pathname shall be given as a URI.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=listFiles#listFiles
         */
        listFiles(
            successCallback: (result: {
                files: {
                    name: string,
                    type: string,
                    size: number
                }[],
                totalCount: number
            }) => void,
            errorCallback: (err: ScapError) => void,
            options: {
                path: string
            }
        ): void;


        /**
         * Creates a directory. The directory pathname shall be given as a URI.
         * Since: SCAP v1.1
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=mkdir#mkdir
         */
        mkdir(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                path: string
            }
        ): void;


        /**
         * Moves the given file or directory to the given target location. The pathnames shall be given in URIs,
         * as guided below.
         * Since: SCAP v1.2
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=moveFile#moveFile
         */
        moveFile(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                oldPath: string,
                newPath: string
            }
        ): void;


        /**
         * Reads the given file from the local storage or an external storage.
         * The pathname shall be given in a URI, as guided below.
         * Since: SCAP v1.2
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=readFile#readFile
         */
        readFile(
            successCallback: (result: {
                data: string | ArrayBuffer
            }) => void,
            errorCallback: (err: ScapError) => void,
            options: {
                path: string,
                position?: number,
                length?: number,
                encoding?: 'utf8' | 'binary'
            }
        ): void;


        /**
         * Removes all the files in the local storage or an external storage.
         * Give the target location as a URI, as guided below.
         * Since: SCAP v1.2
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=removeAll#removeAll
         */
        removeAll(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                device: string
            }
        ): void;


        /**
         * Removes an app stored in the local storage or on a USB flash drive.
         * Since: SCAP v1.1
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=removeApplication#removeApplication
         */
        removeApplication(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                to: AppMode
            }
        ): void;


        /**
         * Removes a file in the local storage or an external storage. Give the file pathname as a URI,
         * as guided below.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=removeFile#removeFile
         */
        removeFile(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                file: string,
                recursive?: boolean
            }
        ): void;


        /**
         * Gets the status information of a file or a directory.
         * Since: SCAP v1.2
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=statFile#statFile
         */
        statFile(
            successCallback: (result: {
                type: 'file' | 'directory' | 'unknown',
                size: number,
                atime: string,
                mtime: string,
                ctime: string
            }) => void,
            errorCallback: (err: ScapError) => void,
            options: {
                path: string
            }
        ): void;


        /**
         * Unzips a zip file in the local storage or an external storage. Give the pathname as a URI.
         * To unzip a file in a USB flash drive, the USB flash drive should be connected to the USB Port
         * of a webOS Signage device with proper permission.
         * Since: SCAP v1.2
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=unzipFile#unzipFile
         */
        unzipFile(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                zipPath: string,
                targetPath: string
            }
        ): void;


        /**
         * Upgrades an app in local storage or USB flash drive with the new version of the app
         * from a remote server. The new version of the app will be launched at the next booting
         * of the signage device and at the same time, the previous version of the app will be deleted.
         * The information for the remote server, from which to download the new version of the app,
         * is configurable on the server settings. The URL of the new app depends on the server settings,
         * as explained below.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=upgradeApplication#upgradeApplication
         */
        upgradeApplication(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                to: AppMode,
                recovery?: boolean,
                type?: 'zip' | 'ipk'
            }
        ): void;


        /**
         * Upgrades the signage firmware using the file downloaded by the Storage.downloadFirmware() method.
         * If upgrade is successful, webOS Signage will automatically reboot.
         * Since: SCAP v1.2
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=upgradeFirmware#upgradeFirmware
         */
        upgradeFirmware(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Writes a file to the local storage or an external storage. Give the file pathname as a URI, as guided below.
         * Since: SCAP v1.2
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/storage/?wos_flag=writeFile#writeFile
         */
        writeFile(
            successCallback: (result: {
                written: number
            }) => void,
            errorCallback: (err: ScapError) => void,
            options: {
                path: string,
                data: string | ArrayBuffer,
                mode?: 'truncate' | 'append' | 'position',
                position?: number,
                length?: number,
                encoding?: 'utf8' | 'base64' | 'binary',
                offset?: number
            }
        ): void;
    }

    export = Storage;
}


/**
 * Video
 */
declare module 'webOS-scap-library/js/cordova-cd/1.3/video' {
    class Video {
        /**
         * Gets the configurations for the content rotation feature.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/video/?wos_flag=getContentRotation#getContentRotation
         */
        getContentRotation(
            successCallback: (result: {
                degree: 'off' | '90' | '270',
                aspectRatio: 'full' | 'original'
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Gets the size and position information of a video element in an HTML page which has called this method.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/video/?wos_flag=getVideoStatus#getVideoStatus
         */
        getVideoStatus(
            successCallback: (result: {
                source: {
                    x: number,
                    y: number,
                    width: number,
                    height: number
                }
            }) => void,
            errorCallback: (err: ScapError) => void
        ): void;


        /**
         * Rotates the given video element.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/video/?wos_flag=setContentRotation#setContentRotation
         */
        setContentRotation(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                degree: 'off' | '90' | '270',
                aspectRatio: 'full' | 'original'
            }
        ): void;


        /**
         * Resizes and repositions the rotated video.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/video/?wos_flag=setRotateVideoTransform#setRotateVideoTransform
         */
        setRotateVideoTransform(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                x: number,
                y: number,
                width: number,
                height: number
            }
        ): void;


        /**
         * Zooms in or out of the video element in the HTML page which has called this method. The given
         * source object defines the area for zooming and the zooming takes place inside the area allocated
         * to the video element. The maximum zoom ratio is 1x zoom.
         * Since: SCAP v1.0
         * Platform Compatibility: All
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/video/?wos_flag=setVideoSize#setVideoSize
         */
        setVideoSize(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                source: {
                    x: number,
                    y: number,
                    width: number,
                    height: number
                },
            }
        ): void;


        /**
         * Repositions and resizes a video element for ultra stretch models of which aspect ratio is 58:9.
         * Use this method to transform a video with the aspect ratio of 16:9 on ultra stretch models.
         * Call this method 2 seconds after the video element is loaded.
         * Since: SCAP v1.3
         * Platform Compatibility: webOS Signage 2.0 and later
         * http://developer.lge.com/webOSSignage/api/scap-api/scap13/video/?wos_flag=setVideoViewTransform#setVideoViewTransform
         */
        setVideoViewTransform(
            successCallback: () => void,
            errorCallback: (err: ScapError) => void,
            options: {
                x: number,
                y: number,
                width: number,
                height: number
            }
        ): void;
    }

    export = Video;
}
