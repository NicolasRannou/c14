'use strict';

/**
 * @constructor
 * @description hello
 * @param {angular.$scope} $scope
 * @ngInject
 */
function MainpageCtrl($scope) {
    // general info for the main page
    // not module specific
    $scope['awesomeThings'] = ['HTML5 Boilerplate',
                            'AngularJS',
                            'Karma'];
}

/**
 * @description hello
 */
mainpageModule.controller('MainpageCtrl', MainpageCtrl);