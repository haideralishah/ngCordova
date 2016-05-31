/**
 * Created by haider on 5/31/2016.
 */


(function () {
  'use strict';
  angular
    .module('ngCordovaEG')
    .factory("posOptions", posOptions);
    function posOptions(){
      var posOptions = {
        timeout: 10000,
        enableHighAccuracy: false
      };
      return posOptions;
    }
})();
