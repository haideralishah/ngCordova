/**
 * Created by haider on 5/24/2016.
 */

(function () {
  'use strict';
  angular
    .module('ngCordovaEG')

    .factory('contentToShare', contentToShare);
    function contentToShare(){
      var contentToShare = {
        message: 'testing',
        subject: 'test to share',
        file: 'www/img/controll.jpg',
        image: 'www/img/controll.jpg',
        link: 'https://www.facebook.com/Haidervolunteer',
        toArr: 'headeralishah@gmail.com',
        ccArr: 'headeralishah@gmail.com',
        bccArr: 'headeralishah@gmail.com'
      };
      return contentToShare
    }
})();
