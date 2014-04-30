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
            scope['label'] = pickerGoogledriveService.label;
            scope['style'] = pickerGoogledriveService.style;
            scope['object'] = pickerGoogledriveService;
            scope['pickFrom'] = scope['$parent']['pickFrom'];
        },
        'templateUrl': 'components/picker/pickerGoogledrive/pickerGoogledrive.html'
    };
}

/**
 * Provide the pickerGoogledrive directive to the pickerGoogledrive module.
 */
pickerGoogledriveModule.directive('pickerGoogledrive', pickerGoogledriveDirective);