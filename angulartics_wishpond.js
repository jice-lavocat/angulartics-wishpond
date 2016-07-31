/**
 * @license Angulartics v0.19.2
 * (c) 2013 Luis Farzati http://luisfarzati.github.io/angulartics
 * Universal Analytics update contributed by http://github.com/willmcclellan
 * License: MIT
 */
(function(angular) {
'use strict';

/**
 * @ngdoc overview
 * @name angulartics.wishpond
 * Enables analytics support for Wishpond (https://www.wishpond.com/)
 */
angular.module('angulartics.wishpond', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {


var associateLead = function(properties){
    if(properties.email !== undefined) {
      var email = properties.email;
      Wishpond.Tracker.identify(email, properties);
    }
  };

  // Works
  angulartics.waitForVendorApi('Wishpond', 500, 'Tracker', function (Wishpond) {
    $analyticsProvider.registerSetUserProperties(function (properties) {
      associateLead(properties);
    });
  });

  angulartics.waitForVendorApi('Wishpond', 500, 'Tracker', function (Wishpond) {
    $analyticsProvider.registerEventTrack(function (action, properties) {
      Wishpond.Tracker.track(action, properties);
    });
  });


  // Not tested yet

  angulartics.waitForVendorApi('Wishpond', 500, 'Tracker', function (Wishpond) {
    $analyticsProvider.registerSetUsername(function (userId) {
      Wishpond.Tracker.identify(userId);
    });
  });


  angulartics.waitForVendorApi('Wishpond', 500, 'Tracker', function (Wishpond) {
    $analyticsProvider.registerSetAlias(function (userId) {
      Wishpond.Tracker.identify(userId);
    });
  });

  angulartics.waitForVendorApi('Wishpond', 500, 'Tracker', function (Wishpond) {
    $analyticsProvider.registerSetSuperPropertiesOnce(function (properties) {
      associateLead(properties);
    });
  });

  angulartics.waitForVendorApi('Wishpond', 500, 'Tracker', function (Wishpond) {
    $analyticsProvider.registerSetSuperProperties(function (properties) {
      associateLead(properties);
    });
  });
  
  angulartics.waitForVendorApi('Wishpond', 500, 'Tracker', function (Wishpond) {
    $analyticsProvider.registerSetUserPropertiesOnce(function (properties) {
      associateLead(properties);
    });
  });

  // Not implemented, Wishpond tracks pages
  /*angulartics.waitForVendorApi('Wishpond', 500, 'Tracker', function (Wishpond) {
    $analyticsProvider.registerPageTrack(function (path) {
      Wishpond.Tracker.track("Page Viewed", {"page": path });
    });
  });*/

}]);
})(angular);