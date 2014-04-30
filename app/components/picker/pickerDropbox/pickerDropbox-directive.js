'use strict';
/**
 * @constructor
 * @param {pickerDropboxService} pickerDropboxService
 * @ngInject
 */
function pickerDropboxDirective(pickerDropboxService){
    return {
        'scope':{},
        'link': function(scope, element, attrs){
            scope['label'] = pickerDropboxService.label;
            scope['style'] = pickerDropboxService.style;
            scope['object'] = pickerDropboxService;
            scope['pickFrom'] = scope['$parent']['pickFrom'];
        },
        'templateUrl': 'components/picker/pickerDropbox/pickerDropbox.html'
    };
}

/**
 * Provide the pickerDropbox directive to the pickerDropbox module.
 */
pickerDropboxModule.directive('pickerDropbox', pickerDropboxDirective);