/**
 * Created by haider on 5/23/2016.
 */
(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('cordovaStatusbarController', cordovaStatusbar);
  function cordovaStatusbar($cordovaStatusbar){
    $cordovaStatusbar.overlaysWebView(true);
    var cordovaStatusbar = this;
    var isVisible = $cordovaStatusbar.isVisible();
    if(isVisible){
      cordovaStatusbar.visible = true;
    }
    else{
      cordovaStatusbar.visible = false;
    }
    cordovaStatusbar.changeStatusbar = function(){
      alert('Style the status bar.');
      // styles: Default : 0, LightContent: 1, BlackTranslucent: 2, BlackOpaque: 3
      $cordovaStatusbar.style(1);
      // supported names: black, darkGray, lightGray, white, gray, red, green,
      // blue, cyan, yellow, magenta, orange, purple, brown
      $cordovaStatusbar.styleColor('white');
      $cordovaStatusbar.styleHex('#fff');
    };

    cordovaStatusbar.visibleStatusbar = function(){
      if(cordovaStatusbar.visible){
        $cordovaStatusbar.hide();
        cordovaStatusbar.visible = false;
      }
      else {
        $cordovaStatusbar.show();
        cordovaStatusbar.visible = true;
      }
    };

  }
})();
