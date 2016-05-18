/**
 * Created by haider on 5/18/2016.
 */
(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('deviceController', device);
  function device($cordovaDevice){
    var devicePlugin = this;
    document.addEventListener("deviceready", function () {

      devicePlugin.device = $cordovaDevice.getDevice();

      devicePlugin.cordova = $cordovaDevice.getCordova();

      devicePlugin.model = $cordovaDevice.getModel();

      devicePlugin.platform = $cordovaDevice.getPlatform();

      devicePlugin.uuid = $cordovaDevice.getUUID();

      devicePlugin.version = $cordovaDevice.getVersion();

    }, false);



  }
})();
