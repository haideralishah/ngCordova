/**
 * Created by haider on 5/16/2016.
 */
/**
 * Created by haider on 5/14/2016.
 */
(function () {
  'use strict';
  angular
    .module('ngCordovaEG')
    .factory('uriPackage', uriPackage);
    function uriPackage(){
      var whatsApp =  {
        name: "What's App",
        iOSUri:'whatsapp://',
        androidSchemes: 'com.whatsapp'
      };
      var facebook =  {
        name: "facebook",
        iOSUri:'fb://',
        androidSchemes: 'com.facebook.katana'
      };
      var twitter =  {
        name: "twitter",
        iOSUri:'twitter://',
        androidSchemes: 'com.twitter.android'
      };
      var uriPackageName = [whatsApp, facebook, twitter];
      return uriPackageName
    }
})();
