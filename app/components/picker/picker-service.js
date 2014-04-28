'use strict';
/**
 * @constructor
 * @param {!angular.$filter} $filter
 * @param {pickerDropboxService} pickerDropboxService
 * @param {pickerGoogledriveService} pickerGoogledriveService
 * @ngInject
 */
function pickerService($filter, pickerDropboxService, pickerGoogledriveService){
    this.version = '0.1';
    this.showPickers = {status:false};
    this.filter = $filter;

    // picked elements
    this.pickList = [{'heelo':'you'},
                     {'heelo':'toto'}];

    // list pickers
    this.pickers = [pickerDropboxService, pickerGoogledriveService];

    // check on url only at load time
    this.init();
}

/**
 * @description hello
 */
pickerService.prototype.init = function(){
      // run 'start' pickers, such as the url
    var pickerObject = this.filter('filter')(this.pickers, {type:'start'});
    pickerObject.forEach(this.pickFrom);

      // start 'bg' pickers, such as the draganddrop
      // NO! drag and drop will be a viewer feature
};

/**
 * @param {pickerBaseService} pickerObject
 *
 *
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
 * @description hello
 *
 *
 */
pickerModule.service('pickerService', pickerService);