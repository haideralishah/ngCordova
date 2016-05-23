/**
 * Created by haider on 5/14/2016.
 */


(function () {
  'use strict';
  angular
    .module('ngCordovaEG')
    .factory('availablePlugins', availablePlugins);
    function availablePlugins(){
      var Action_Sheet =  {
        name:'Action Sheet',
        desc: "The Action Sheet plugin shows a native sheet of options the user can choose from. iOS uses the native UIActionSheet. Android uses the native AlertDialog.",
        _route: '#/actionSheet'
      };
      var App_Availability =  {
        name:'App Availability',
        desc: "The AppAvailability plugin allows you to check if an app is installed on the user’s device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android.",
        _route: '#/appAvailability'
      };
      var Battery_Status =  {
        name:'Battery Status',
        desc: "The BatteryStatus plugin provides an API for the current battery status.",
        _route: '#/batteryStatus'
      };
      var Flash_Light =  {
        name:'Flash Light',
        desc: "Flash light can be accessed through this plugin.",
        _route: '#/flashLight'
      };
      var Device =  {
        name:'Device',
        desc: "Grab device related information, such as platform, and device model.",
        _route: '#/device'
      };
      var Dialogs =  {
        name:'Dialogs',
        desc: "Trigger alert, confirm, and prompt windows, or send beeps (beep, beep!)",
        _route: '#/dialogs'
      };
      var Image_Picker =  {
        name:'Image Picker',
        desc: "Cordova Plugin For Multiple Image Selection - implemented for iOS and Android 4.0 and above.",
        _route: '#/imagePicker'
      };
      var Cordova_SMS =  {
        name:'Cordova SMS',
        desc: "Easily send SMS natively in iOS or Android SMS app/",
        _route: '#/cordovaSMS'
      };
      var Cordova_Network =  {
        name:'Cordova Network',
        desc: "This plugin provides an implementation of an old version of the Network Information API. It provides information about the device’s cellular and wifi connection, and whether the device has an internet connection.",
        _route: '#/cordovaNetwork'
      };
      var Cordova_Vibration =  {
        name:'Cordova Vibration',
        desc: "Vibrate the device programmatically.",
        _route: '#/cordovaVibration'
      };
      var Cordova_Statusbar =  {
        name:'Cordova Statusbar',
        desc: "Configure the device’s StatusBar with colors and styles.",
        _route: '#/cordovaStatusbar'
      };
      var plugins = [Action_Sheet, App_Availability, Battery_Status, Flash_Light, Device, Dialogs, Image_Picker,
        Cordova_SMS, Cordova_Network, Cordova_Vibration, Cordova_Statusbar];
      return plugins
    }
})();
