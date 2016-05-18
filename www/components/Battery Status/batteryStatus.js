/**
 * Created by haider on 5/16/2016.
 */
(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('batteryStatusController', batteryStatusController);
    function batteryStatusController($rootScope, $cordovaBatteryStatus){
      var batteryStatus = this;
      batteryStatus.batteryStatus = '';
      batteryStatus.batteryChargingStatus = '';
      $rootScope.$on('$cordovaBatteryStatus:status', function (result) {
        alert('haider');
        var batteryLevel = result.level;       // (0 - 100)
        var isPluggedIn  = result.isPlugged;   // bool
        batteryStatus.batteryStatus = 'Your battery level is ' + batteryLevel;
        if(isPluggedIn){
          batteryStatus.batteryChargingStatus = 'Your device is plugged in';
        }
        else {
          batteryStatus.batteryChargingStatus = 'Your device is not plugged in';
        }
      });
    }
})();
