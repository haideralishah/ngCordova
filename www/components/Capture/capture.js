/**
 * Created by haider on 6/2/2016.
 */

(function () {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('captureController', capture);
  function capture($cordovaCapture, captureOptions) {
    var capture = this;
    capture.captureOptions = captureOptions;
    capture.getPicture = function () {
      $cordovaCapture.captureImage(capture.captureOptions)
        .then(function (imageData) {
          // Success! Image data is here
        }, function (err) {
          // An error occurred. Show a message to the user
        });
    };
    capture.recAudio = function () {
      $cordovaCapture.captureAudio(capture.captureOptions)
        .then(function (audioData) {
          // Success! Audio data is here
        }, function (err) {
          // An error occurred. Show a message to the user
        });
    };
    capture.recVideo = function () {
      $cordovaCapture.captureVideo(capture.captureOptions)
        .then(function (videoData) {
          // Success! Video data is here
        }, function (err) {
          // An error occurred. Show a message to the user
        });
    };
  }
})();
