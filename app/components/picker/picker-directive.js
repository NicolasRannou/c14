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
        'link': function (scope, iElement, iAttrs, controller) {
            // attach pickFrom to the scope so child scopes can call it
            scope['pickFrom'] = function(pickerObject){pickerService.pickFrom(pickerObject);};
            scope['pickList'] = pickerService.pickList;

            var pickerButtons = document.querySelector('#pickerButtons');
            var span = document.createElement('span');
            span.innerHTML = '';

            for (var i=0,  tot=pickerService.pickers.length; i < tot; i++) {
                if(pickerService.pickers[i].type === 'button'){
                    span.innerHTML += '<span><span picker-' + pickerService.pickers[i].name + '></span></span>';
                }
            }

            pickerButtons.appendChild(span);
            $compile(pickerButtons)(scope);
        }
    };

    return pickerDirectiveDefinitionObject;
}

/**
 * Provide the picker directive to the picker module.
 */
pickerModule.directive('picker', pickerDirective);