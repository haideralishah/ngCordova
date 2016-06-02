/**
 * Created by haider on 5/31/2016.
 */


(function () {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('geolocationController', geolocation);
  function geolocation($cordovaGeolocation, posOptions) {
    var geolocation = this;
    geolocation.posOptions = posOptions;
    geolocation.checkGeolocation = true;

    geolocation.checkCurrentPosition = function(){
      $cordovaGeolocation
        .getCurrentPosition(geolocation.posOptions)
        .then(function (position) {
          geolocation.latitude  = position.coords.latitude;
          geolocation.longitude = position.coords.longitude;
          alert(geolocation.latitude);
          alert(geolocation.longitude);
          var watch = $cordovaGeolocation.watchPosition(geolocation.posOptions);
          watch.then(
            null,
            function(err) {
              // error
            },
            function(position) {
              geolocation.latitude  = position.coords.latitude;
              geolocation.longitude = position.coords.longitude;
            });
          watch.clearWatch();

          if(geolocation.latitude && geolocation.longitude){
            geolocation.checkGeolocation = false;
          }
          else{
            geolocation.checkGeolocation = true;
          }
        }, function(err) {
          // error
          alert(JSON.stringify(err));
        });
      var watch = $cordovaGeolocation.watchPosition(geolocation.posOptions);
      watch.then(
        null,
        function(err) {
          // error
        },
        function(position) {
          geolocation.latitude  = position.coords.latitude;
          geolocation.longitude = position.coords.longitude;
        });
      watch.clearWatch();
    };
  }
})();
