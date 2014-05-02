'use strict';

/**
 * @constructor
 * @param {pickerService} pickerService
 * @ngInject
 */
function ViewerCtrl($scope, pickerService){
    $scope.version = '0.3';

    // attach our pickers to the current scope.
    $scope.pickY2 = pickerService.getPickList();

    //looking at the reference
    // we might want to look at a value ratther than obj
// $scope.$watchCollection(
//         function(){ return pickerService.getPickList(); },

//         function(newVal) {
//           $scope.pickY2 = newVal;
//         });
}

/**
 * @description hello
 */
viewerModule.controller('ViewerCtrl', ViewerCtrl);