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
                // scope['showPickers'] = pickerService.showPickers;
                // scope['pickers'] = pickerService.pickers;
                // scope['pickFrom'] = function(location){pickerService.pickFrom(location);};
                // scope['print'] = function(){pickerService.test();};
            },
        'templateUrl': 'components/picker/pickerDropbox/pickerDropbox.html'
    };
}

/**
 * Provide the pickerDropbox directive to the pickerDropbox module.
 */
pickerDropboxModule.directive('pickerDropbox', pickerDropboxDirective);