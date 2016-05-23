/**
 * Created by haider on 5/23/2016.
 */
(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('cordovaVibrationController', cordovaVibration);
  function cordovaVibration($cordovaVibration){
    var cordovaVibration = this;
    cordovaVibration.vibrate = function(){
      // Vibrate 1000ms
      $cordovaVibration.vibrate(1000);
    }
  }
})();
