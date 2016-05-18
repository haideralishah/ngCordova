/**
 * Created by haider on 5/16/2016.
 */
(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('flashLightController', flashLight);
  function flashLight($cordovaFlashlight){
    var flashLight = this;

    $cordovaFlashlight.available()
      .then(function(availability) {
      var avail = availability; // is available
      alert('Flash Light is available');
      },
        function () {
      alert('Flash Light is not available');
      // unavailable
    });

    flashLight.switchOn = function () {
      $cordovaFlashlight.switchOn()
        .then(
          function (success) {
            alert('Light is on');
          },
          function (error) {
            alert(error);
          });
    };

    flashLight.switchOff = function () {
      $cordovaFlashlight.switchOff()
        .then(
          function (success) {
            alert('Light is off');
          },
          function (error) {
            alert(error);
          });
    };

    flashLight.toggle = function () {
      $cordovaFlashlight.toggle()
        .then(function (success) { /* success */ },
          function (error) { /* error */ });
    };

  }
})();
