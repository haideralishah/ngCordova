/**
 * Created by haider on 6/2/2016.
 */

(function () {
  'use strict';
  angular
    .module('ngCordovaEG')
    .factory("cameraOptions", cameraOptions);
  function cameraOptions(){
    var cameraOptions = {
      quality: 50,
      destinationType: Camera.DestinationType.DATA_URL,
      sourceType: Camera.PictureSourceType.CAMERA,
      allowEdit: true,
      encodingType: Camera.EncodingType.JPEG,
      targetWidth: 100,
      targetHeight: 100,
      popoverOptions: CameraPopoverOptions,
      saveToPhotoAlbum: false,
      correctOrientation:true
    };
    return cameraOptions;
  }
})();
