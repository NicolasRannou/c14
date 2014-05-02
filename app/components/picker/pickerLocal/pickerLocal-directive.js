'use strict';
/**
 * @constructor
 * @param {pickerLocalService} pickerLocalService
 * @ngInject
 */
function pickerLocalDirective(pickerLocalService){
    return {
        'scope':{},
        'link': function(scope, element, attrs){

            scope['label'] = pickerLocalService.label;
            scope['style'] = pickerLocalService.style;
            scope['object'] = pickerLocalService;
            scope['pickFrom2'] = function(){
                document.getElementById('files').click();
            };

            // use apply because of event binding (asynchronous!)
            document.getElementById('files').addEventListener('change',
                                                              function(event){ pickerLocalService.handleFileSelect(event); },
                                                              false);

        },
        'templateUrl': 'components/picker/pickerLocal/pickerLocal.html'
    };
}

/**
 * Provide the pickerLocal directive to the pickerLocal module.
 */
pickerLocalModule.directive('pickerLocal', pickerLocalDirective);