/**
 * Created by haider on 5/16/2016.
 */
(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('appAvailabilityController', appAvailabilityController);
  function appAvailabilityController($cordovaAppAvailability, uriPackage){
    var appAvailability = this;
    var checkAppName = '';
    var appName = '';
    appAvailability.checkApp = checkApp;
    appAvailability.checkWhatsApp = function (){
      appName = "What's App";
      if(ionic.Platform.isAndroid()){
        checkAppName = uriPackage[0].androidSchemes;
      }
      else {
        checkAppName = uriPackage[0].iOSUri;
      }
      appAvailability.checkApp(checkAppName, appName);
    };
    appAvailability.checkFacebook = function (){
      appName = "Facebook";
      if(ionic.Platform.isAndroid()){
        checkAppName = uriPackage[1].androidSchemes;
      }
      else {
        checkAppName = uriPackage[1].iOSUri;
      }
      appAvailability.checkApp(checkAppName, appName);
    };
    appAvailability.checkTwitter = function (){
      appName = "Twitter";
      if(ionic.Platform.isAndroid()){
        checkAppName = uriPackage[2].androidSchemes;
      }
      else {
        checkAppName = uriPackage[2].iOSUri;
      }
      appAvailability.checkApp(checkAppName, appName);
    };
    function checkApp(checkAppName, appName){
      $cordovaAppAvailability.check(checkAppName)
        .then(function() {
          // available
          alert(appName + ' is available');
        }, function () {
          // not available
          alert(appName + ' is not available');
        });
    }
  }
})();
