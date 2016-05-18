// Ionic ngCordovaExamples App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'


(function() {
  'use strict';

  angular
    .module('ngCordovaEG', ['ionic', 'ngCordova'])

    .config(routes)

    .run(function($ionicPlatform) {
       $ionicPlatform.ready(function() {
        if(window.cordova && window.cordova.plugins.Keyboard) {
          // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
         // for form inputs)
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

         // Don't remove this line unless you know what you are doing. It stops the viewport
        // from snapping when text inputs are focused. Ionic handles this internally for
        // a much nicer keyboard experience.
        cordova.plugins.Keyboard.disableScroll(true);
        }
        if(window.StatusBar) {
        StatusBar.styleDefault();
        }
      });
    });


  /******Defining routes******/

  function routes($stateProvider, $urlRouterProvider){

    $stateProvider
      .state('ngCordova', {
        url: '/ngCordova',
        controller: 'ngCordovaController',
        templateUrl: 'components/ngCordova/ngCordova.html',
        controllerAs: 'ngCordova'
      })
      .state('actionSheet', {
        url: '/actionSheet',
        controller: 'actionSheetController',
        templateUrl: 'components/actionSheet/actionSheet.html',
        controllerAs: 'actionSheet'
      })
      .state('appAvailability', {
        url: '/appAvailability',
        controller: 'appAvailabilityController',
        templateUrl: 'components/App%20Availability/appAvailability.html',
        controllerAs: 'appAvailability'
      })
      .state('batteryStatus', {
        url: '/batteryStatus',
        controller: 'batteryStatusController',
        templateUrl: 'components/Battery%20Status/batteryStatus.html',
        controllerAs: 'batteryStatus'
      })
      .state('flashLight', {
        url: '/flashLight',
        controller: 'flashLightController',
        templateUrl: 'components/Flash%20Light/flashLight.html',
        controllerAs: 'flashLight'
      })
      .state('device', {
        url: '/device',
        controller: 'deviceController',
        templateUrl: 'components/Device/device.html',
        controllerAs: 'device'
      });
    $urlRouterProvider
      .otherwise('/ngCordova');
  }

})();
