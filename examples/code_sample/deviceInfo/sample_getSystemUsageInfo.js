
function api_getSystemUsageInfo(callback) {
    
     function successCb(cbObject) {
         console.log("cbObject : " + JSON.stringify(cbObject));
         console.log("memory.total : " + cbObject.memory.total);
         console.log("memory.free : " + cbObject.memory.free);
         for (var i in cbObject.cpus) {
             console.log("cpu.model " +  cbObject.cpus[i].model);
             console.log("cpu.times.user " +  cbObject.cpus[i].times.user);
             console.log("cpu.times.nice " +  cbObject.cpus[i].times.nice);
             console.log("cpu.times.sys " +  cbObject.cpus[i].times.sys);
             console.log("cpu.times.idle " +  cbObject.cpus[i].times.idle);
             console.log("cpu.times.irq " +  cbObject.cpus[i].times.irq);
         } 
         
         callback(cbObject);
     }

     function failureCb(cbObject) {
         var errorCode = cbObject.errorCode;
         var errorText = cbObject.errorText;
         
         console.log ("Error Code [" + errorCode + "]: " + errorText);
         callback(cbObject);
     }
     
     
     var deviceInfo = new DeviceInfo();
     var options = {cpus : true, memory : true};
     deviceInfo.getSystemUsageInfo(successCb, failureCb, options);
}