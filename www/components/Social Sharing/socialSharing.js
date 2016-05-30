/**
 * Created by haider on 5/24/2016.
 */

(function() {
  'use strict';
  angular
    .module('ngCordovaEG')
    .controller('socialSharingController', socialSharing);
  function socialSharing($cordovaSocialSharing, contentToShare){

    var socialSharing = this;
    socialSharing.contentToShare = contentToShare;
    socialSharing.shareViaNativeShareSheet = function(){
      $cordovaSocialSharing
        .share(socialSharing.contentToShare.message, socialSharing.contentToShare.subject, socialSharing.contentToShare.file, socialSharing.contentToShare.link) // Share via native share sheet
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occured. Show a message to the user
          alert(err);
        });
    };

    socialSharing.shareViaTwitter = function(){
      $cordovaSocialSharing
        .shareViaTwitter(socialSharing.contentToShare.message, socialSharing.contentToShare.image, socialSharing.contentToShare.link)
        .then(function(result) {
          // Success!
        }, function(err) {
          // An error occurred. Show a message to the user
          alert("Check if twitter is installed?");
        });
    };



  /*  $cordovaSocialSharing
      .shareViaTwitter(message, image, link)
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred. Show a message to the user
      });

    $cordovaSocialSharing
      .shareViaWhatsApp(message, image, link)
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred. Show a message to the user
      });

    $cordovaSocialSharing
      .shareViaFacebook(message, image, link)
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred. Show a message to the user
      });

    // access multiple numbers in a string like: '0612345678,0687654321'
    $cordovaSocialSharing
      .shareViaSMS(message, number)
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred. Show a message to the user
      });

// toArr, ccArr and bccArr must be an array, file can be either null, string or array
    $cordovaSocialSharing
      .shareViaEmail(message, subject, toArr, ccArr, bccArr, file)
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred. Show a message to the user
      });

    $cordovaSocialSharing
      .canShareVia(socialType, message, image, link)
      .then(function(result) {
        // Success!
      }, function(err) {
        // An error occurred. Show a message to the user
      });

    $cordovaSocialSharing
      .canShareViaEmail()
      .then(function(result) {
        // Yes we can
      }, function(err) {
        // Nope
      });

*/

  }
})();