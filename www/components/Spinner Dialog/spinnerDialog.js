/**
 * Created by haider on 5/24/2016.
 */
(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('spinnerDialogController', spinnerDialog);
  function spinnerDialog($cordovaSpinnerDialog){
    var spinnerDialog = this;
    spinnerDialog.showSpinnerDialog = function(){
      $cordovaSpinnerDialog.show("Spinner","How it works", false);
    };

    spinnerDialog.hideSpinnerDialog = function(){
      $cordovaSpinnerDialog.hide();
    };
  }
})();
