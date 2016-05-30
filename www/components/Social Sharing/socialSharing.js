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

    /*****Function For Share Via Native Sheet*****/
    socialSharing.shareViaNativeShareSheet = function(){
      $cordovaSocialSharing
        .share(socialSharing.contentToShare.message, socialSharing.contentToShare.subject, socialSharing.contentToShare.file, socialSharing.contentToShare.link) // Share via native share sheet
        .then(function(result) {
          alert("Shared");
          // Success!
        }, function(err) {
          // An error occured. Show a message to the user
          alert("Error occurred");
        });
    };

    /*****Function For Share Via Twitter*****/
    socialSharing.shareViaTwitter = function(){
      $cordovaSocialSharing
        .shareViaTwitter(socialSharing.contentToShare.message, socialSharing.contentToShare.image, socialSharing.contentToShare.link)
        .then(function(result) {
          // Success!
          alert("Shared");
        }, function(err) {
          // An error occurred. Show a message to the user
          alert("Error occurred, check if twitter is installed?");
        });
    };

    /*****Function For Share Via What's App*****/
    socialSharing.shareViaWhatsApp = function(){
      $cordovaSocialSharing
        .shareViaWhatsApp(socialSharing.contentToShare.message, socialSharing.contentToShare.image, socialSharing.contentToShare.link)
        .then(function(result) {
          // Success!
          alert("Shared");
        }, function(err) {
          // An error occurred. Show a message to the user
          alert("Error occurred, check if What's App is installed?");
        });
    };

    /*****Function For Share Via Facebook*****/
    socialSharing.shareViaFacebook = function(){
      $cordovaSocialSharing
        .shareViaFacebook(socialSharing.contentToShare.message, socialSharing.contentToShare.image, socialSharing.contentToShare.link)
        .then(function(result) {
          // Success!
          alert("Shared");
        }, function(err) {
          // An error occurred. Show a message to the user
          alert("Error occurred, check if Facebook is installed?");
        });
    };

    /*****Function For Share Via SMS*****/
      // access multiple numbers in a string like: '0612345678,0687654321'
    socialSharing.shareViaSMS = function(){
      var sendingNumber = prompt('Type Number');
      $cordovaSocialSharing
        .shareViaSMS(socialSharing.contentToShare.message, sendingNumber)
        .then(function(result) {
          // Success!
          alert("Shared");
        }, function(err) {
          // An error occurred. Show a message to the user
          alert("Error occurred.");
        });
    };

    /*****Function For Share Via Email*****/
    socialSharing.shareViaEmail = function(){
      $cordovaSocialSharing
        .shareViaEmail(socialSharing.contentToShare.message, socialSharing.contentToShare.subject, socialSharing.contentToShare.toArr, socialSharing.contentToShare.ccArr, socialSharing.contentToShare.bccArr, socialSharing.contentToShare.file)
        .then(function(result) {
          // Success!
          alert("Shared");
        }, function(err) {
          // An error occurred. Show a message to the user
          alert("Error occurred.");
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
