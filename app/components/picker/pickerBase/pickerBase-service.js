'use strict';

/**
 * @constructor
 *
 *
 */
function pickerBaseService(){
    this.name = 'name';
    this.type = 'start';
    this.style = 'btn-info';
    this.label = 'label';
    this.formats = ['scene','dcm', 'nii', 'trk'];
    this.pickList = [];
}

/**
 * Start the picker module. To be overloaded.
 */
pickerBaseService.prototype.pick = function(){
    window.console.log('Aloha Picker Base, please implement me! -pick');
};

/**
 * Test the picker module. To be overloaded.
 */
pickerBaseService.prototype.addToPickList = function(file){
    window.console.log('Aloha Picker Base, please implement me! -test');
};

/**
 * Update the status callbacks
 */
pickerBaseService.prototype.status = function(){
    window.console.log('I\'m the status');
};

/**
 * Provide the pickerBase service to the pickerBase module.
 */
pickerBaseModule.service('pickerBaseService', pickerBaseService);