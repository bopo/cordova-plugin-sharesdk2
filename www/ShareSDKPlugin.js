var cordova = require('cordova');

/**
 * ShareSDKPlugin plugin for Cordova
 * 
 * @constructor
 */
function ShareSDKPlugin () {}

/**
 * Sets the ShareSDKPlugin content
 *
 * @param {Array}   params	   The content to share to the ShareSDKPlugin
 * @param {Function} onSuccess The function to call in case of success (takes the copied text as argument)
 * @param {Function} onFail    The function to call in case of error
 */
ShareSDKPlugin.prototype.share = function (params, onSuccess, onFail) {
    if (typeof params === "undefined" || params === null) params = "";
    var options = undefined;

    if(Array.isArray(params)){
        options = params;
    }else{
        options = [params]
    }    
	cordova.exec(onSuccess, onFail, "ShareSDKPlugin", "share", options);
};

ShareSDKPlugin.prototype.setup = function (params, onSuccess, onFail) {
    if (typeof params === "undefined" || params === null) params = "";
    var options = undefined;

    if(Array.isArray(params)){
        options = params;
    }else{
        options = [params]
    }    
	cordova.exec(onSuccess, onFail, "ShareSDKPlugin", "setup", options);
};

// Register the plugin
var ShareSDKPlugin = new ShareSDKPlugin();
module.exports = ShareSDKPlugin;
