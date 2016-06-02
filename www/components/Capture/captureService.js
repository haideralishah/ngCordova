/**
 * Created by haider on 6/2/2016.
 */
(function () {
  'use strict';
  angular
    .module('ngCordovaEG')
    .factory("captureOptions", captureOptions);
  function captureOptions() {
    var captureOptions = {
      limit: 3,
      duration: 15
    };
    return captureOptions;
  }
})();
