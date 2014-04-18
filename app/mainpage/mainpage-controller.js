'use strict';

/**
 * @constructor
 * @description hello
 */
function MainpageCtrl($scope) {
    // general info for the main page
    // not module specific
    $scope.awesomeThings = ['HTML5 Boilerplate',
                            'AngularJS',
                            'Karma'];
}

/**
 * @description hello
 */
MainpageCtrl['$inject'] = ['$scope'];

/**
 * @description hello
 */
mainpageModule.controller('MainpageCtrl', MainpageCtrl);