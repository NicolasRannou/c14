'use strict';
/**
 * @constructor
 * @param {!angular.$rootScope} $rootScope
 * @param {!angular.$filter} $filter
 * @param {pickerDropboxService} pickerDropboxService
 * @param {pickerGoogledriveService} pickerGoogledriveService
 * @param {pickerLocalService} pickerLocalService
 * @ngInject
 */
function pickerService($rootScope, $filter, pickerDropboxService, pickerGoogledriveService, pickerLocalService){
    this.version = '0.1';
    this.showPickers = {status:false};
    this.filter = $filter;
    this.rootScope = $rootScope;

    // picked elements
    // do something for the status
    this.pickList = [];

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

    var self = this;
    for (var i=0,  tot=this.pickers.length; i < tot; i++) {
        if(this.pickers[i].type === 'button'){
            this.pickers[i].addToPickList = function(file){return self.addToPickList(file);};
        }
    }
};

// MIGHT NOT BE USEFUL
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
pickerService.prototype.addToPickList = function(file){
    this.pickList.push(file);
    this.rootScope.$digest();
};

pickerService.prototype.getPickList = function(){
    return this.pickList;
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