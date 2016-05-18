/**
 * Created by haider on 5/16/2016.
 */
(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('batteryStatusController', batteryStatus);
    function batteryStatus($rootScope, $cordovaBatteryStatus,$timeout){
      var batteryStatus = this;
      var batteryLevel;
      var isPluggedIn;
      document.addEventListener("deviceready", function () {
        $rootScope.$on('$cordovaBatteryStatus:status', function (result) {
          batteryLevel = result.level;       // (0 - 100)
          isPluggedIn = result.isPlugged;   // bool
          alert(batteryLevel);
          alert(isPluggedIn);
          $timeout(function(){
            console.log(result);
          }, 10000);


        });
        $rootScope.$on('$cordovaBatteryStatus:critical', function (result) {
          batteryStatus.batteryLevel = result.level;       // (0 - 100)
          batteryStatus.isPluggedIn  = result.isPlugged;   // bool
          alert('Percentage of battery charge has reached the critical battery threshold.');

        });
        $rootScope.$on('$cordovaBatteryStatus:low', function (result) {
          var batteryLevel = result.level;       // (0 - 100)
          var isPluggedIn  = result.isPlugged;   // bool
          alert('Percentage of battery charge has reached the low battery threshold.');

        });
      }, false);
    }
})();
