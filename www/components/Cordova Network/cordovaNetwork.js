/**
 * Created by haider on 5/23/2016.
 */

(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('cordovaNetworkController', cordovaNetwrok);
  function cordovaNetwrok($rootScope, $cordovaNetwork){
    var cordovaNetwork = this;
    cordovaNetwork.deviceStatus = true;
    cordovaNetwork.checkNetwork = function(){
      cordovaNetwork.type = $cordovaNetwork.getNetwork();
      cordovaNetwork.isOnline = $cordovaNetwork.isOnline();
      cordovaNetwork.isOffline = $cordovaNetwork.isOffline();
      cordovaNetwork.deviceStatus = false;
      if(cordovaNetwork.isOnline){
        cordovaNetwork.status = 'online'
      }
      else if(cordovaNetwork.isOffline){
        cordovaNetwork.status = 'offline'
      }
    };
    document.addEventListener("deviceready", function () {

      // listen for Online event
      $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
        var onlineState = networkState;
        cordovaNetwork.checkNetwork();
        alert('Your device turns online');
      });

      // listen for Offline event
      $rootScope.$on('$cordovaNetwork:offline', function(event, networkState){
        var offlineState = networkState;
        cordovaNetwork.deviceStatus = true;
        alert('Your device turns offline');
      });

    }, false);

  }
})();
