/**
 * Created by haider on 5/23/2016.
 */
(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('toastController', toast);
  function toast($cordovaToast){
    var toast = this;

    toast.toastWorking = function(){
      $cordovaToast
        .show('How the toast works', 'long', 'center')
        .then(function(success) {
          // success
        }, function (error) {
          // error
        });
    };

    toast.shortTop = function(){
      $cordovaToast.showShortTop('Short top toast').then(function(success) {
        // success
      }, function (error) {
        // error
      });
    };

    toast.longBottom = function(){
      $cordovaToast.showLongBottom('Long bottom toast').then(function(success) {
        // success
      }, function (error) {
        // error
      });
    };



  }
})();
