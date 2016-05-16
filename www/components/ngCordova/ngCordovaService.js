/**
 * Created by haider on 5/14/2016.
 */


(function () {
  'use strict';
  angular
    .module('ngCordovaEG')
    .factory('availablePlugins', availablePlugins);
    function availablePlugins(){
      var plugins = [
                      {
                      name:'Action Sheet',
                      desc: "The Action Sheet plugin shows a native sheet of options the user can choose from. iOS uses the native UIActionSheet. Android uses the native AlertDialog.",
                      _route: '#/actionSheet'
                      },
                      {
                        name:'App Availability',
                        desc: "The AppAvailability plugin allows you to check if an app is installed on the user’s device. It requires an URI Scheme (e.g. twitter://) on iOS or a Package Name (e.g com.twitter.android) on Android.",
                        _route: '#/appAvailability'
                      }
                     ];
      return plugins
    }
})();
