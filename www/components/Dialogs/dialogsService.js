/**
 * Created by haider on 5/19/2016.
 */

(function () {
  'use strict';
  angular
    .module('ngCordovaEG')
    .factory('dialogsComponents', dialogsComponents);
    function dialogsComponents(){
      var alertComponent =  {
        message:"Hi, it's working fine alert",
        title: "Checking Alert",
        button: 'Checked Alert'
      };
      var confirmComponent =  {
        message:"Are you a programmer?",
        title: "Checking Confirm",
        button: ['Yes','No']
      };
      var promptComponent =  {
        message:"Enter your user name",
        title: "Checking Prompt",
        button: ['Cancel','Login'],
        defaultText: "Bindas Hailee"
      };
      var dialogComponents = [alertComponent, confirmComponent, promptComponent];
      return dialogComponents
    }
})();
