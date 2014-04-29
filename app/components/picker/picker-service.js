'use strict';
/**
 * @constructor
 * @param {!angular.$filter} $filter
 * @param {pickerDropboxService} pickerDropboxService
 * @param {pickerGoogledriveService} pickerGoogledriveService
 * @param {pickerLocalService} pickerLocalService
 * @ngInject
 */
function pickerService($filter, pickerDropboxService, pickerGoogledriveService, pickerLocalService){
    this.version = '0.1';
    this.showPickers = {status:false};
    this.filter = $filter;

    // picked elements
    this.pickList = [];

    // list pickers
    this.pickers = [pickerDropboxService, pickerGoogledriveService];

    // check on url only at load time
    this.init();
}

/**
 * Initialize the pickers.
 * Some pickers ('start' pickers), such as the URL picker need to be started at load time.
 */
pickerService.prototype.init = function(){
      // run 'start' pickers, such as the url
    var pickerObject = this.filter('filter')(this.pickers, {type:'start'});
    pickerObject.forEach(this.pickFrom);

      // start 'bg' pickers, such as the draganddrop
      // NO! drag and drop will be a viewer feature
};

/**
 * Start the provided picker.
 * @param {pickerBaseService} pickerObject
 */
pickerService.prototype.pickFrom = function(pickerObject){
    pickerObject.pick();
};

/**
 * @description hello
 *
 *
 */
pickerService.prototype.test = function(){
    this.pickList.push({'yayay':'yayaya'});
    window.console.log(this.pickList);
};

/**
 * @description hello
 *
 *
 */
pickerService.prototype.get = function(){
  
};

/**
 * Provide the picker service to the picker module.
 */
pickerModule.service('pickerService', pickerService);