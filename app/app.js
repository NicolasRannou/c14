'use strict';

/**
 * @description App configuration
 *
 *
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
 * @description Inject route provider in module configuration
 *
 *
 */
Config['$inject'] = ['$routeProvider'];

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