'use strict';

/**
 * @constructor
 * @param {!angular.$compile} $compile
 * @param {pickerService} pickerService
 * @ngInject
 */

function pickerDirective($compile, pickerService){
    var pickerDirectiveDefinitionObject = {
        'scope':{},
        'templateUrl': 'components/picker/picker.html',
        'compile': function(element, attributes) {

            var pickerButtons = document.querySelector('#pickerButtons');
            var span = document.createElement('span');
            span.innerHTML = '';

            for (var i=0,  tot=pickerService.pickers.length; i < tot; i++) {
                if(pickerService.pickers[i].type === 'button'){
                    span.innerHTML += '<span><span picker-' + pickerService.pickers[i].name + ' the-Parent-Prop=pickList></span></span>';
                }
            }

            pickerButtons.appendChild(span);

            var linkFunction = function($scope, element, attributes) {
                $scope['pickFrom'] = function(pickerObject){pickerService.pickFrom(pickerObject);};
                $scope['pickList'] = pickerService.getPickList();
            };

            return linkFunction;
        }
    };

    return pickerDirectiveDefinitionObject;
}

/**
 * Provide the picker directive to the picker module.
 */
pickerModule.directive('picker', pickerDirective);