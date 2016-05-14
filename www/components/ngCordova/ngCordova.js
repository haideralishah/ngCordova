/**
 * Created by haider on 5/14/2016.
 */
(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('ngCordovaController', ngCordova);
    function ngCordova(availablePlugins){
      var ngCordova = this;
      ngCordova.plugins = availablePlugins;
      console.log(ngCordova.plugins);



    }
})();
