'use strict';

/**
 * @constructor
 * @param {pickerService} pickerService
 * @ngInject
 */
function ViewerCtrl($scope, pickerService){
    $scope.version = '0.3';

    // attach our pickers to the current scope.
    $scope.pickY2 = pickerService.pickList;

    // looking at the reference
    // we might want to look at a value ratther than obj
    // $scope.$watchCollection('pickY2', function() {
    //   indexerService.index($scope['pickY2']);
    // });
}

/**
 * @description hello
 */
viewerModule.controller('ViewerCtrl', ViewerCtrl);