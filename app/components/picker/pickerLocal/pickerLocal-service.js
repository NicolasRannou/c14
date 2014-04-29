'use strict';

/**
 * The pickerLocal service defines the behavior of the pickerLocal module.
 * @constructor
 * @extends pickerBaseService
 */
function pickerLocalService(){

    pickerBaseService.call(this);
    this.name = 'local';
    this.type = 'click';
    this.label = 'Local';
}

/**
 * Inheritance pattern.
 */
pickerLocalService.prototype = Object.create(pickerBaseService.prototype);

/**
 * @description hello
 */
pickerLocalService.prototype.pick = function(){
    window.console.log('start the local picker!');
};

/**
 * Provide the pickerLocal service to the pickerLocal module.
 */
pickerLocalModule.service('pickerLocalService', pickerLocalService);
