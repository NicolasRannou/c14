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
 * @description hello
 */
pickerBaseService.prototype.pick = function(){
    window.console.log('Aloha Picker Base, please implement me!');
};

/**
 * @description hello
 */
pickerBaseModule.service('pickerBaseService', pickerBaseService);