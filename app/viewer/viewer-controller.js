'use strict';

/**
 * @constructor
 * @param {pickerService} pickerService
 *
 *
 */
function ViewerCtrl($scope, pickerService){
    $scope.version = '0.3';
    // $scope.pickY = {dfg:'fdo'};
    //    window.console.log($scope.pickY);
    // $scope.pickY = patientService.patientList;
    $scope.pickY2 = pickerService.pickList;
    window.console.log($scope.pickY2);


    // looking at the reference
    // we might want to look at a value ratther than obj
    // $scope.$watchCollection('pickY2', function() {
    //   indexerService.index($scope['pickY2']);
    // });
}

/**
 * @description hello
 */
ViewerCtrl['$inject'] = ['$scope', 'pickerService'];

/**
 * @description hello
 */
viewerModule.controller('ViewerCtrl', ViewerCtrl);