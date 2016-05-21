/**
 * Created by haider on 5/19/2016.
 */
(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('imagePickerController', imagePicker);
  function imagePicker(optionsForImagePicker, $cordovaImagePicker){
    var imagePicker = this;
    imagePicker.options = optionsForImagePicker;

    imagePicker.imageGet = function(){
      imagePicker.imagesURI = [];
      $cordovaImagePicker.getPictures(imagePicker.options)
        .then(function (results) {
          for (var i = 0; i < results.length; i++) {
            //console.log('Image URI: ' + results[i]);
            imagePicker.imagesURI.push(results[i]);
          }
        }, function(error) {
          // error getting photos
        });
    };
  }
})();
