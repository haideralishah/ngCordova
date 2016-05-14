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
                      }
                     ];
      return plugins
    }
})();
