/**
 * Created by haider on 5/19/2016.
 */


(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('dialogsController', dialogs);
  function dialogs(dialogsComponents,$cordovaDialogs){
    var dialogs = this;
    dialogs.dailogs = dialogsComponents;

    dialogs._alert = function (){
      $cordovaDialogs.alert(dialogs.dailogs[0].message, dialogs.dailogs[0].title, dialogs.dailogs[0].button)
        .then(function() {
          // callback success
        });
    };
    dialogs._confirm = function (){
      $cordovaDialogs.confirm(dialogs.dailogs[1].message, dialogs.dailogs[1].title, dialogs.dailogs[1].button)
        .then(function(buttonIndex) {
          // no button = 0, 'OK' = 1, 'Cancel' = 2
          var btnIndex = buttonIndex;
          alert(btnIndex);
        });
    };

    dialogs._prompt = function (){
      $cordovaDialogs.prompt(dialogs.dailogs[2].message, dialogs.dailogs[2].title, dialogs.dailogs[2].button, dialogs.dailogs[2].defaultText)
        .then(function(result) {
          var input = result.input1;
          // no button = 0, 'OK' = 1, 'Cancel' = 2
          var btnIndex = result.buttonIndex;
          alert(btnIndex);
        });
    };


    dialogs._beep = function (){
      // beep 3 times
      $cordovaDialogs.beep(3);
    };




  }
})();
