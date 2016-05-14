/**
 * Created by haider on 5/14/2016.
 */
(function () {
  'use strict';
  angular
    .module('ngCordovaEG')

    .factory('actionSheetOptions', actionSheetOptions);
    function actionSheetOptions(){
      var options = {
        title: 'Do you understand?',
        buttonLabels: ['Yes', 'No'],
        addCancelButtonWithLabel: 'Cancel',
        androidEnableCancelButton : true,
        winphoneEnableCancelButton : true,
        addDestructiveButtonWithLabel : "Don't Know"
      };
      return options;
    }

})();
