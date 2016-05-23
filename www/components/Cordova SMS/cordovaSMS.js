/**
 * Created by haider on 5/21/2016.
 */

(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('cordovaSMSController', cordovaSMS);
  function cordovaSMS($cordovaSms){
    var cordovaSMS = this;

    cordovaSMS.sendSMS = function(){
      cordovaSMS.contact = prompt('Please type the number.');
      $cordovaSms
        .send(cordovaSMS.contact, 'Hello World')
        .then(function() {
          alert('SMS sent');
          // Success! SMS was sent
        }, function(error) {
          alert('An error occurred while sending SMS');
          // An error occurred
        });
    }
  }
})();
