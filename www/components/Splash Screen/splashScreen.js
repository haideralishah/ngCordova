/**
 * Created by haider on 5/24/2016.
 */
(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('splashScreenController', splashScreen);
  function splashScreen($cordovaSplashscreen){
    var splashScreen = this;
    splashScreen.showSplashScreen = function(){
      $cordovaSplashscreen.show();
    };
  }
})();
