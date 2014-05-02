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
            // not to loose its scope!
            scope['pick'] = function(){pickerDropboxService.pick();};
        },
        'templateUrl': 'components/picker/pickerDropbox/pickerDropbox.html'
    };
}

/**
 * Provide the pickerDropbox directive to the pickerDropbox module.
 */
pickerDropboxModule.directive('pickerDropbox', pickerDropboxDirective);