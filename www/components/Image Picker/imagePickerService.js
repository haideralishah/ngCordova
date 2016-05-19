/**
 * Created by haider on 5/19/2016.
 */
(function () {
  'use strict';
  angular
    .module('ngCordovaEG')
    .factory('optionsForImagePicker', optionsForImagePicker);
  function optionsForImagePicker(){
    var options = {
      maximumImagesCount: 10,
      width: 800,
      height: 800,
      quality: 80
    };
    return options
  }
})();
