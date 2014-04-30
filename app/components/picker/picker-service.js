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
    // do something for the status
    this.pickList = [{'file':'imthefilename', 'status':'100', 'size':'20kB'},
                     {'file':'imthefilename2', 'status':'100', 'size':'20kB'},
                     {'file':'imthefilename3', 'status':'100', 'size':'20kB'}];

    // list pickers
    this.pickers = [pickerDropboxService, pickerGoogledriveService, pickerLocalService];

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

    // attach a progress method, a add method, a finised, etc.?
    var self = this;
    pickerDropboxService.prototype.test = function(){self.test();};
    pickerGoogledriveService.prototype.test = function(){self.test();};
    pickerLocalService.prototype.test = function(){self.test();};
};

// MIGH NOT BE USEFUL
// contradiction (opposite) with pickFrom
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
    window.console.log(this);
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