/**
 * Created by haider on 6/2/2016.
 */


(function () {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('cameraController', camera);
  function camera($cordovaCamera, cameraOptions) {
    var camera = this;
    camera.cameraOptions = cameraOptions;
    camera.imgStatus = true;
    camera.getPicture = function () {
      $cordovaCamera.getPicture(camera.cameraOptions)
        .then(function (imageData) {
          var image = document.getElementById('myImage');
          image.src = "data:image/jpeg;base64," + imageData;
          camera.imgStatus = false;
        }, function (err) {
          // error
        });
    };




  }
})();
