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
      var plugins = [Action_Sheet, App_Availability, Battery_Status, Flash_Light, Device];
      return plugins
    }
})();
