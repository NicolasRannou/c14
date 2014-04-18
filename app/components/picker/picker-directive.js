'use strict';
/**
 * @constructor
 * @param {pickerService} pickerService
 */
function pickerDirective(pickerService){
    return {
        'scope':{},
        'link': function(scope, element, attrs){
                scope['showPickers'] = pickerService.showPickers;
                scope['pickers'] = pickerService.pickers;
                scope['pickFrom'] = function(location){pickerService.pickFrom(location);};
                scope['print'] = function(){pickerService.test();};
            },
        'templateUrl': 'components/picker/picker.html'
    };
}

/**
 * @description hello
 *
 *
 */
pickerDirective['$inject'] = ['pickerService'];

/**
 * @description hello
 *
 *
 */
pickerModule.directive('picker', pickerDirective);