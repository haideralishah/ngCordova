/**
 * Created by haider on 5/23/2016.
 */
(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('pinDialogController', pinDialog);
  function pinDialog($cordovaPinDialog){
    var pinDialog = this;

    pinDialog.pinDialogPrompt = function () {
      $cordovaPinDialog.prompt('Type the password.').then(
        function(result) {
          // result
          alert(result.buttonIndex);
          alert(result.input1);
        },
        function (error) {
          // error
          alert(error);
        })
    };
  }
})();
