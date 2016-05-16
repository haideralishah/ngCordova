/**
 * Created by haider on 5/14/2016.
 */

(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('actionSheetController', actionSheet);
  function actionSheet($cordovaActionSheet, actionSheetOptions){
    var actionSheet = this;

    actionSheet.options = actionSheetOptions;
    console.log(actionSheet.options);

    actionSheet.showActionSheet = function () {
      $cordovaActionSheet.show(actionSheet.options)
        .then(function(btnIndex) {
          var index = btnIndex;
          alert(index);
        });
    };

   /* document.addEventListener("deviceready", function () {
      $cordovaActionSheet.show(actionSheet.options)
        .then(function(btnIndex) {
          var index = btnIndex;
          alert(index);
        });
    }, false);*/

  }
})();
