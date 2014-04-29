'use strict';
/**
 * @constructor
 * @param {pickerGoogledriveService} pickerGoogledriveService
 * @ngInject
 */
function pickerGoogledriveDirective(pickerGoogledriveService){
    return {
        'scope':{},
        'link': function(scope, element, attrs){
                // scope['showPickers'] = pickerService.showPickers;
                // scope['pickers'] = pickerService.pickers;
                // scope['pickFrom'] = function(location){pickerService.pickFrom(location);};
                // scope['print'] = function(){pickerService.test();};
            },
        'templateUrl': 'components/picker/pickerGoogledrive/pickerGoogledrive.html'
    };
}

/**
 * Provide the pickerGoogledrive directive to the pickerGoogledrive module.
 */
pickerGoogledriveModule.directive('pickerGoogledrive', pickerGoogledriveDirective);