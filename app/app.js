'use strict';

/**
 * @description App configuration
 * @param {!angular.$routeProvider} $routeProvider
 * @constructor
 * @ngInject
 */
function Config ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'mainpage/mainpage.html',
            controller: 'MainpageCtrl'
        })
        .when('/viewer', {
            templateUrl: 'viewer/viewer.html',
            controller: 'ViewerCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
}

/**
 * @description Module declaration
 *
 *
 *
 */
angular.module('c14App', ['ngCookies',
                          'ngResource',
                          'ngSanitize',
                          'ngRoute',
                          'mainpageModule',
                          'viewerModule'])
    .config(Config);