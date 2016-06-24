cordova.define("cordova/plugin/broadcast", function(k, s, c) {
    var t = k("cordova/plugin/webos/service"),
        q = k("cordova/utils"),
        m = k("cordova/argscheck");
    var i = function(u) {
        this.isATSC = false;
        this.tokenChannelChange = 0;
        this.tokenSignalState = 0;
        this.broadcastDivId = null;
        this.broadcastElement = null;
        this.currentInput = null;
        this.currentSource = null;
        this.isLastInput = true;
        this.isLastChannel = true;
        var v = this;
        t.Request("luna://com.webos.service.tv.systemproperty", {
            method: "getSystemInfo",
            parameters: {
                keys: ["atsc"]
            },
            onSuccess: function(w) {
                v.isATSC = w.atsc
            },
            onFailure: function(w) {}
        })
    };
    i.prototype.onchannelchange = function(u) {};
    i.prototype.onsignalstatuschange = function(u) {};
    i.prototype.initialize = function(u, w, x) {
        m.checkArgs("fFo", "broadcastCordova.initialize", arguments);
        var y = q.clone(x);
        // this.broadcastDivId = document.getElementById(y.divId);
        
        this.broadcastDivId = document
            .querySelector('div.view .content iframe')
            .contentWindow
            .document
            .getElementById(y.divId);

        y.broadcastPlugin = this;
        if (y.isLastInput == true || !y.src) {
            this.isLastInput = true;
            e(u, w, y)
        } else {
            this.isLastInput = false;
            if (y.src.indexOf("tv://") != -1) {
                if (y.isLastChannel == true) {
                    this.isLastChannel = true;
                    y.type = "service/webos-broadcast"
                } else {
                    this.isLastChannel = false;
                    y.type = "service/webos-broadcast-standalone"
                }
                this.currentInput = "tv";
                this.currentSource = y.src.substr(5)
            } else {
                y.type = "service/webos-external";
                var v = y.src.split(":");
                this.currentInput = v[1].substr(2).toLowerCase();
                this.currentSource = v[2]
            }
            g(y);
            u && u()
        }
    };
    i.prototype.channelUp = function(u, v) {
        m.checkArgs("fF", "broadcastCordova.channelUp", arguments);
        var w = {
            broadcastId: this.broadcastElement.mediaId
        };
        t.Request("luna://com.webos.service.tv.broadcast", {
            method: "changeChannelUp",
            parameters: w,
            onSuccess: function(x) {
                u && u()
            },
            onFailure: function(x) {
                delete x.returnValue;
                v && v(x)
            }
        })
    };
    i.prototype.channelDown = function(u, v) {
        m.checkArgs("fF", "broadcastCordova.channelDown", arguments);
        var w = {
            broadcastId: this.broadcastElement.mediaId
        };
        t.Request("luna://com.webos.service.tv.broadcast", {
            method: "changeChannelDown",
            parameters: w,
            onSuccess: function(x) {
                u && u()
            },
            onFailure: function(x) {
                delete x.returnValue;
                v && v(x)
            }
        })
    };
    i.prototype.setChannel = function(u, v, w) {
        m.checkArgs("fFo", "broadcastCordova.setChannel", arguments);
        var x = {
            broadcastId: this.broadcastElement.mediaId,
            channelId: w.id
        };
        t.Request("luna://com.webos.service.tv.broadcast", {
            method: "changeChannel",
            parameters: x,
            onSuccess: function(y) {
                u && u()
            },
            onFailure: function(y) {
                delete y.returnValue;
                v && v(y)
            }
        })
    };
    i.prototype.getCurrentChannel = function(u, v) {
        m.checkArgs("fF", "broadcastCordova.getCurrentChannel", arguments);
        var w = {
            broadcastId: this.broadcastElement.mediaId,
            subscribe: false
        };
        t.Request("luna://com.webos.service.tv.broadcast", {
            method: "getCurrentChannel",
            parameters: w,
            onSuccess: function(x) {
                var y = {};
                y = l(x.channel, "api");
                u && u(y)
            },
            onFailure: function(x) {
                delete x.returnValue;
                v && v(x)
            }
        })
    };
    i.prototype.getSignalStatus = function(u, v) {
        m.checkArgs("fF", "broadcastCordova.getSignalStatus", arguments);
        var w;
        if (this.currentInput == "tv") {
            w = {
                broadcastId: this.broadcastElement.mediaId,
                subscribe: false
            };
            t.Request("luna://com.webos.service.tv.broadcast", {
                method: "getChannelState",
                parameters: w,
                onSuccess: function(x) {
                    var y = x.channelState;
                    y.screensaverType = y.channelScreensaverType;
                    delete y.channelScreensaverType;
                    u && u(y)
                },
                onFailure: function(x) {
                    delete x.returnValue;
                    v && v(x)
                }
            })
        } else {
            w = {
                externalInputId: this.broadcastElement.mediaId,
                subscribe: false
            };
            t.Request("luna://com.webos.service.tv.externaldevice/input/", {
                method: "getSignalState",
                parameters: w,
                onSuccess: function(x) {
                    u && u(x.signalState)
                },
                onFailure: function(x) {
                    delete x.returnValue;
                    v && v(x)
                }
            })
        }
    };
    i.prototype.getCurrentProgram = function(u, v, w) {
        m.checkArgs("fFo", "broadcastCordova.getCurrentProgram", arguments);
        t.Request("luna://com.palm.systemservice/time", {
            method: "getEffectiveBroadcastTime",
            parameters: {},
            onSuccess: function(x) {
                var y = {};
                y.id = w.id;
                y.startTime = x.localtime;
                y.endTime = x.localtime;
                y.request = "nowInfo";
                f(u, v, y)
            },
            onFailure: function(x) {
                delete x.returnValue;
                v && v(x)
            }
        })
    };
    i.prototype.getNextProgram = function(u, v, w) {
        m.checkArgs("fFo", "broadcastCordova.getNextProgram", arguments);
        t.Request("luna://com.palm.systemservice/time", {
            method: "getEffectiveBroadcastTime",
            parameters: {},
            onSuccess: function(x) {
                var y = {};
                y.id = w.id;
                y.startTime = x.localtime;
                y.endTime = x.localtime;
                y.request = "nextInfo";
                f(u, v, y)
            },
            onFailure: function(x) {
                delete x.returnValue;
                v && v(x)
            }
        })
    };
    i.prototype.getProgramCount = function(u, v, w) {
        m.checkArgs("fFo", "broadcastCordova.getProgramCount", arguments);
        var x = q.clone(w);
        x.request = "count";
        f(u, v, x)
    };
    i.prototype.getProgramList = function(u, v, w) {
        m.checkArgs("fFo", "broadcastCordova.getProgramList", arguments);
        var x = q.clone(w);
        x.request = "list";
        f(u, v, x)
    };
    i.prototype.getChannelCount = function(u, v, w) {
        m.checkArgs("fFo", "broadcastCordova.getChannelCount", arguments);
        var x = {
            from: "com.webos.service.tv.channel.dblist:1",
            select: [""],
            where: [{
                prop: "channelType",
                op: "=",
                val: w.type
            }],
            filter: [{
                prop: "Invisible",
                op: "=",
                val: false
            }]
        };
        t.Request("luna://com.palm.db/", {
            method: "search",
            parameters: {
                query: x
            },
            onSuccess: function(y) {
                var z = {};
                z.count = y.results.length;
                u && u(z)
            },
            onFailure: function(y) {
                delete y.returnValue;
                v && v(y)
            }
        })
    };
    i.prototype.getChannelList = function(u, v, w) {
        m.checkArgs("fFo", "broadcastCordova.getChannelList", arguments);
        var y = w.startIndex - 1;
        if (y < 0) {
            y = 0
        }
        var z = y + w.count;
        var x = {
            from: "com.webos.service.tv.channel.dblist:1",
            select: ["channelId", "channelName", "channelMode", "channelNumber", "channelType", "skipped", "locked", "descrambled", "scrambled"],
            where: [{
                prop: "channelType",
                op: "=",
                val: w.type
            }],
            filter: [{
                prop: "Invisible",
                op: "=",
                val: false
            }],
            limit: z
        };
        t.Request("luna://com.palm.db/", {
            method: "search",
            parameters: {
                query: x
            },
            onSuccess: function(A) {
                var D = {};
                D.channel = [];
                var C = A.results.length - y;
                if (C > 0) {
                    for (var B = 0; B < C; B++) {
                        D.channel[B] = l(A.results[B + y], "db8")
                    }
                }
                u && u(D)
            },
            onFailure: function(A) {
                delete A.returnValue;
                v && v(A)
            }
        })
    };
    i.prototype.getChannelListByName = function(u, v, w) {
        m.checkArgs("fFo", "broadcastCordova.getChannelListByName", arguments);
        var x = {
            from: "com.webos.service.tv.channel.dblist:1",
            select: ["channelId", "channelName", "channelMode", "channelNumber", "channelType", "skipped", "locked", "descrambled", "scrambled"],
            where: [{
                prop: "channelName",
                op: "%",
                val: w.name
            }],
            filter: [{
                prop: "Invisible",
                op: "=",
                val: false
            }]
        };
        if (w.type) {
            x.filter.push({
                prop: "channelType",
                op: "=",
                val: w.type
            })
        }
        t.Request("luna://com.palm.db/", {
            method: "search",
            parameters: {
                query: x
            },
            onSuccess: function(y) {
                var A = {};
                A.channel = [];
                if (y.results.length > 0) {
                    for (var z = 0; z < y.results.length; z++) {
                        A.channel[z] = l(y.results[z], "db8")
                    }
                }
                u && u(A)
            },
            onFailure: function(y) {
                delete y.returnValue;
                v && v(y)
            }
        })
    };
    i.prototype.setInput = function(v) {
        m.checkArgs("o", "broadcastCordova.setInput", arguments);
        var x = false;
        if (v.src.indexOf("tv://") != -1) {
            if (this.isLastChannel == true) {
                v.type = "service/webos-broadcast"
            } else {
                v.type = "service/webos-broadcast-standalone"
            }
            this.currentInput = "tv";
            this.currentSource = v.src.substr(5)
        } else {
            v.type = "service/webos-external";
            var u = v.src.split(":");
            this.currentInput = u[1].substr(2).toLowerCase();
            this.currentSource = u[2]
        }
        for (var w = 0; w < this.broadcastElement.childNodes.length; w++) {
            if (this.broadcastElement.childNodes[w].nodeName == "SOURCE") {
                this.broadcastElement.childNodes[w].src = v.src;
                this.broadcastElement.childNodes[w].type = v.type;
                this.broadcastElement.load();
                x = true
            }
        }
        return x
    };
    i.prototype.addEventListener = function(w, u, v) {
        if (w == "channelchange") {
            this.tokenChannelChange = t.Request("luna://com.webos.service.tv.broadcast", {
                method: "getCurrentChannel",
                parameters: {
                    broadcastId: this.broadcastElement.mediaId,
                    subscribe: true
                },
                onSuccess: function(x) {
                    var y = x.channel;
                    u && u(y)
                },
                onFailure: function(x) {}
            })
        } else {
            if (w == "signalstatus") {
                if (this.currentInput == "tv") {
                    this.tokenSignalState = t.Request("luna://com.webos.service.tv.broadcast", {
                        method: "getChannelState",
                        parameters: {
                            broadcastId: this.broadcastElement.mediaId,
                            subscribe: true
                        },
                        onSuccess: function(x) {
                            var y = x.channelState;
                            y.screensaverType = y.channelScreensaverType;
                            delete y.channelScreensaverType;
                            u && u(y)
                        },
                        onFailure: function(x) {}
                    })
                } else {
                    this.tokenSignalState = t.Request("luna://com.webos.service.tv.externaldevice/input/", {
                        method: "getSignalState",
                        parameters: {
                            externalInputId: this.broadcastElement.mediaId,
                            subscribe: true
                        },
                        onSuccess: function(x) {
                            var y = x.signalState;
                            u && u(y)
                        },
                        onFailure: function(x) {}
                    })
                }
            }
        }
    };
    var h = function(u, v) {
        p(u);
        if (u.currentInput == "tv") {
            n(u);
            d(u)
        } else {
            o(u)
        }
        v()
    };
    var g = function(w) {
        var u = document.createElement("VIDEO");
        u.setAttribute("id", w.videoId);
        u.setAttribute("width", "100%");
        u.setAttribute("height", "100%");
        u.setAttribute("autoplay", "");
        u.addEventListener("loadedmetadata", function() {
            h(w.broadcastPlugin, w.callback)
        }, false);
        var v = document.createElement("SOURCE");
        v.setAttribute("src", w.src);
        v.setAttribute("type", w.type);
        u.appendChild(v);
        w.broadcastPlugin.broadcastDivId.appendChild(u);
        w.broadcastPlugin.broadcastElement = u
    };
    var e = function(u, v, w) {
        t.Request("luna://com.webos.service.eim", {
            method: "getCurrentInput",
            parameters: {},
            onSuccess: function(y) {
                if (y.mainInputSourceId == "ATV" || y.mainInputSourceId == "DTV") {
                    w.broadcastPlugin.currentInput = "tv";
                    r(u, v, w)
                } else {
                    var x = y.mainInputSourceId.split("_");
                    w.broadcastPlugin.currentInput = x[0].toLowerCase();
                    w.broadcastPlugin.currentSource = x[1];
                    w.src = "ext://" + w.broadcastPlugin.currentInput + ":" + w.broadcastPlugin.currentSource;
                    w.type = "service/webos-external";
                    g(w);
                    u && u()
                }
            },
            onFailure: function(x) {
                delete x.returnValue;
                v && v(x)
            }
        })
    };
    var r = function(u, v, w) {};
    var n = function(u) {
        u.tokenChannelChange = t.Request("luna://com.webos.service.tv.broadcast", {
            method: "getCurrentChannel",
            parameters: {
                broadcastId: u.broadcastElement.mediaId,
                subscribe: true
            },
            onSuccess: function(v) {
                u.currentSource = v.channel.channelId;
                var w = {};
                w = l(v.channel, "api");
                u.onchannelchange(w)
            },
            onFailure: function(v) {}
        })
    };
    var d = function(u) {
        u.tokenSignalState = t.Request("luna://com.webos.service.tv.broadcast", {
            method: "getChannelState",
            parameters: {
                broadcastId: u.broadcastElement.mediaId,
                subscribe: true
            },
            onSuccess: function(v) {
                var w = v.channelState;
                w.screensaverType = w.channelScreensaverType;
                delete w.channelScreensaverType;
                u.onsignalstatuschange(w)
            },
            onFailure: function(v) {}
        })
    };
    var o = function(u) {
        u.tokenSignalState = t.Request("luna://com.webos.service.tv.externaldevice/input/", {
            method: "getSignalState",
            parameters: {
                externalInputId: u.broadcastElement.mediaId,
                subscribe: true
            },
            onSuccess: function(v) {
                var w = v.signalState;
                u.onsignalstatuschange(w)
            },
            onFailure: function(v) {}
        })
    };
    var p = function(u) {
        if (u.tokenChannelChange) {
            u.tokenChannelChange.cancel()
        }
        if (u.tokenSignalState) {
            u.tokenSignalState.cancel()
        }
    };
    var a = function(u, w, z) {
        var x = b(z.startTime);
        var v = b(z.endTime);
        var y = {};
        if (z.request == "count") {
            y = {
                from: "com.webos.service.tv.programSCH:4",
                select: [""],
                where: [{
                    prop: "signalChannelId",
                    op: "=",
                    val: z.signalChannelId
                }],
                filter: [{
                    prop: "localStartTime",
                    op: "<=",
                    val: v
                }, {
                    prop: "localEndTime",
                    op: ">=",
                    val: x
                }]
            }
        } else {
            if (z.request == "nextInfo") {
                y = {
                    from: "com.webos.service.tv.programSCH:4",
                    select: ["programId", "eventId", "localStartTime", "localEndTime", "duration", "programName", "description"],
                    where: [{
                        prop: "channelId",
                        op: "=",
                        val: z.signalChannelId
                    }],
                    filter: [{
                        prop: "localStartTime",
                        op: ">",
                        val: x
                    }],
                    orderBy: "localStartTime",
                    limit: 1
                }
            } else {
                if (z.request == "list" || z.request == "nowInfo") {
                    y = {
                        from: "com.webos.service.tv.programSCH:4",
                        select: ["programId", "eventId", "localStartTime", "localEndTime", "duration", "programName", "description"],
                        where: [{
                            prop: "channelId",
                            op: "=",
                            val: z.signalChannelId
                        }],
                        filter: [{
                            prop: "localStartTime",
                            op: "<=",
                            val: v
                        }, {
                            prop: "localEndTime",
                            op: ">=",
                            val: x
                        }]
                    }
                }
            }
        }
    };
    var f = function(u, v, x) {
        var w = {
            from: "com.webos.service.tv.channel.dblist:1",
            select: ["signalChannelId"],
            where: [{
                prop: "channelId",
                op: "=",
                val: x.id
            }]
        };
        t.Request("luna://com.palm.db/", {
            method: "find",
            parameters: {
                query: w
            },
            onSuccess: function(y) {
                x.signalChannelId = y.results[0].signalChannelId;
                a(u, v, x)
            },
            onFailure: function(y) {
                delete y.returnValue;
                v && v(y)
            }
        })
    };
    var l = function(u, w) {
        var v = {};
        v.id = u.channelId;
        v.number = u.channelNumber;
        v.name = u.channelName;
        if (w == "api") {
            v.mode = u.channelModeName;
            v.type = u.channelTypeName;
            v.isSkipped = u.isSkipped;
            v.isLocked = u.isLocked;
            v.isDescrambled = u.isDescrambled;
            v.isScrambled = u.isScrambled
        } else {
            v.mode = u.channelMode;
            v.type = u.channelType;
            v.isSkipped = u.skipped;
            v.isLocked = u.locked;
            v.isDescrambled = u.descrambled;
            v.isScrambled = u.scrambled
        }
        return v
    };
    var b = function(v) {
        var u = v.year + ",";
        u += ((v.month < 10) ? "0" : "") + v.month + ",";
        u += ((v.day < 10) ? "0" : "") + v.day + ",";
        u += ((v.hour < 10) ? "0" : "") + v.hour + ",";
        u += ((v.minute < 10) ? "0" : "") + v.minute + ",";
        u += ((v.second < 10) ? "0" : "") + v.second;
        return u
    };
    var j = function(u) {
        var w = u.split(",");
        var v = {};
        v.year = +w[0];
        v.month = +w[1];
        v.day = +w[2];
        v.hour = +w[3];
        v.minute = +w[4];
        v.second = +w[5];
        return v
    };
    c.exports = i
});
Broadcast = cordova.require("cordova/plugin/broadcast");
cordova.define("cordova/plugin/inputSource", function(b, d, a) {
    function c(m) {}
    var g;
    if (window.PalmSystem) {
        c("Window.PalmSystem Available");
        g = b("cordova/plugin/webos/service")
    } else {
        g = {
            Request: function(m, n) {
                c(m + " invoked. But I am a dummy because PalmSystem is not available");
                if (typeof n.onFailure === "function") {
                    n.onFailure({
                        returnValue: false,
                        errorText: "PalmSystem Not Available. Cordova is not installed?"
                    })
                }
            }
        }
    }
    var i = function() {};
    var f = null;

    function k(n, o, m) {
        if (n.errorCode === undefined || n.errorCode === null) {
            n.errorCode = o
        }
        if (n.errorText === undefined || n.errorText === null) {
            n.errorText = m
        }
    }
    i.prototype.initialize = function(n, o, q) {
        c("initialize: " + JSON.stringify(q));
        if (q.divId === undefined || typeof q.divId !== "string" || q.divId === null || q.divId.length <= 0 || q.videoId === undefined || typeof q.videoId !== "string" || q.videoId === null || q.videoId.length <= 0 || q.callback === undefined || typeof q.callback !== "function" || q.src === undefined || typeof q.src !== "string" || q.src === null || q.src.length <= 0) {
            if (typeof o === "function") {
                var m = {};
                k(m, "II", "InputSource.initialize returns failure. invalid parameters.");
                o(m)
            }
            return
        }
        j(q.src, function r(s) {
            q.src = s;
            f = new Broadcast();
            c("initialize: converted " + JSON.stringify(q));
            f.initialize(n, o, q)
        }, function p(t) {
            c("initialize: failure " + JSON.stringify(t));
            if (typeof o === "function") {
                var s = {};
                k(s, "II", "InputSource.initialize returns failure. invalid parameters.");
                o(s)
            }
        });
        c("initialize: Done")
    };
    i.prototype.changeInputSource = function(n, o, q) {
        if (q.src === undefined || typeof q.src !== "string" || q.src === null || q.src.length <= 0) {
            if (typeof o === "function") {
                var m = {};
                k(m, "ICIS", "InputSource.changeInputSource returns failure. invalid argument. ");
                o(m)
            }
            return
        }
        c("changeInputSource: " + JSON.stringify(q));
        j(q.src, function r(t) {
            q.src = t;
            if (f.setInput(q)) {
                c("changeInputSource: On Success");
                n()
            } else {
                var s = {};
                c("changeInputSource: On Failure");
                k(s, "ICIS", "InputSource.changeInputSource returns failure.");
                o(s)
            }
        }, function p(t) {
            c("changeInputSource: failure " + JSON.stringify(t));
            if (typeof o === "function") {
                var s = {};
                k(s, "ICIS", "InputSource.changeInputSource returns failure. invalid argument. ");
                o(s)
            }
        });
        c("changeInputSource: Done")
    };
    i.prototype.getInputSourceStatus = function(m, n) {
        c("getInputSourceStatus: ");
        g.Request("luna://com.webos.service.eim/", {
            method: "getAllInputStatus",
            onSuccess: function(p) {
                c("getInputSourceStatus: On Success");
                if (p.returnValue === true) {
                    if (m && typeof m === "function") {
                        var s = {};
                        var r = new Array(p.totalCount);
                        var t = new Array(p.totalCount);
                        for (var q = 0; q < r.length; q++) {
                            r[q] = {};
                            r[q].inputPort = e(p.devices[q].label);
                            var o = p.devices[q].id.split("_");
                            r[q].inputPort = "ext://" + o[0].toLowerCase() + ":" + o[1];
                            if (r[q].inputPort === "ext://hdmi:3") {
                                r[q].inputPort = "ext://dp:1"
                            } else {
                                if (r[q].inputPort === "ext://hdmi:4") {
                                    r[q].inputPort = "ext://dvi:1"
                                }
                            }
                            t[q] = {};
                            t[q].inputPort = r[q].inputPort;
                            t[q].id = p.devices[q].id
                        }
                        s.inputSourceList = r;
                        g.Request("luna://com.webos.service.eim/", {
                            method: "getCurrentInput",
                            parameters: {},
                            onSuccess: function(u) {
                                c("InputSource.getInputSourceStatus: On Success 3");
                                if (u.returnValue === true) {
                                    if (m && typeof m === "function") {
                                        s.currentInputSource = {};
                                        for (var v = 0; v < t.length; v++) {
                                            if (t[v].id === u.mainInputSourceId) {
                                                s.currentInputSource = t[v].inputPort;
                                                break
                                            }
                                        }
                                        s.currentSignalState = "unknown";
                                        if (f !== null) {
                                            c("InputSource.getInputSourceStatus : broadcast is not null");
                                            f.getSignalStatus(function w(y) {
                                                s.currentSignalState = y.videoSignalState;
                                                c("InputSource.getInputSourceStatus: On Success 2");
                                                if (m && typeof m === "function") {
                                                    c("getInputSourceStatus: On Success" + JSON.stringify(s));
                                                    m(s);
                                                    return
                                                }
                                            }, function x() {
                                                c("InputSource.getInputSourceStatus : signal state is fail.");
                                                if (m && typeof m === "function") {
                                                    c("getInputSourceStatus: On Success" + JSON.stringify(s));
                                                    m(s);
                                                    return
                                                }
                                            })
                                        } else {
                                            c("InputSource.getInputSourceStatus : it does not initialize.");
                                            if (m && typeof m === "function") {
                                                c("getInputSourceStatus: On Success" + JSON.stringify(s));
                                                m(s);
                                                return
                                            }
                                        }
                                    }
                                }
                            },
                            onFailure: function(u) {
                                c("InputSource.getInputSourceStatus: On Failure 2");
                                delete u.returnValue;
                                if (n && typeof n === "function") {
                                    k(u, "IGISS", "InputSource.getInputSourceStatus returns failure.");
                                    n(u);
                                    return
                                }
                            }
                        })
                    }
                }
            },
            onFailure: function(o) {
                c("getInputSourceStatus: On Failure");
                delete o.returnValue;
                if (n && typeof n === "function") {
                    k(o, "IGISS", "InputSource.changeInputSource returns failure on gathering input list.");
                    n(o)
                }
            }
        });
        c("InputSource.getInputSourceStatus Done")
    };

    function e(o) {
        var m = 1;
        var n = o.length;
        if (!isNaN(parseInt(o.charAt(n - 1), 10))) {
            m = o.charAt(n - 1);
            n--
        }
        o = o.substring(0, n) + ":" + m;
        o = "ext://" + o.toLowerCase();
        return o
    }
    var h = null;

    function l(m) {
        if (h === null) {
            g.Request("luna://com.webos.service.tv.systemproperty", {
                method: "getSystemInfo",
                parameters: {
                    keys: ["sdkVersion"]
                },
                onSuccess: function(n) {
                    c("getPlatformInfo: onSuccess");
                    var o = n.sdkVersion.split(".");
                    if (o.length >= 1 && o[0] === "1") {
                        h = 1
                    } else {
                        if (o.length >= 1 && o[0] === "2") {
                            h = 2
                        } else {
                            h = 0
                        }
                    }
                    delete n.returnValue;
                    m(h)
                },
                onFailure: function(n) {
                    c("getPlatformInfo: onFailure");
                    delete n.returnValue;
                    h = 0;
                    m(h)
                }
            })
        } else {
            m(h)
        }
    }

    function j(o, m, n) {
        g.Request("luna://com.webos.service.eim/", {
            method: "getAllInputStatus",
            onSuccess: function(p) {
                c("convertInputSource: On Success " + o);
                if (p.returnValue === true) {
                    if (m && typeof m === "function") {
                        var q = new Array(p.totalCount);
                        l(function(s) {
                            c("convertInputSource: " + JSON.stringify(p.totalCount));
                            c("convertInputSource: " + JSON.stringify(p.devices));
                            c("version: " + s);
                            switch (s) {
                                case 1:
                                    if (o === "ext://dp:1") {
                                        o = "ext://hdmi:3"
                                    } else {
                                        if (o === "ext://dvi:1") {
                                            o = "ext://hdmi:4"
                                        }
                                    }
                                    break;
                                case 2:
                                    if (o === "ext://dp:1") {
                                        o = "ext://hdmi:3"
                                    } else {
                                        if (o === "ext://dvi:1") {
                                            o = "ext://hdmi:2"
                                        } else {
                                            if (o === "ext://ops:1") {
                                                o = "ext://hdmi:4"
                                            }
                                        }
                                    }
                                    break;
                                default:
                                    break
                            }
                            for (var u = 0; u < q.length; u++) {
                                q[u] = {};
                                q[u].inputPort = e(p.devices[u].label);
                                var r = p.devices[u].id.split("_");
                                q[u].id = "ext://" + r[0].toLowerCase() + ":" + r[1];
                                if (o === q[u].id) {
                                    c("convertInputSource: On Success ok " + o);
                                    m(o);
                                    return
                                }
                            }
                            for (var t = 0; t < q.length; t++) {
                                if (o === q[t].inputPort) {
                                    o = q[t].id;
                                    c("convertInputSource: On Success converted " + o);
                                    m(o);
                                    return
                                }
                            }
                        })
                    }
                }
            },
            onFailure: function(p) {
                c("convertInputSource: On Failure");
                delete p.returnValue;
                if (n && typeof n === "function") {
                    k(p, "IGISS", "convertInputSource returns failure on gathering input list.");
                    n(p)
                }
            }
        })
    }
    a.exports = i
});
InputSource = cordova.require("cordova/plugin/inputSource");