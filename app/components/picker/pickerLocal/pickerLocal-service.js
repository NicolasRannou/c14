'use strict';

/**
 * The pickerLocal service defines the behavior of the pickerLocal module.
 * @constructor
 * @extends pickerBaseService
 */
function pickerLocalService(){

    pickerBaseService.call(this);
    this.name = 'Local';
    this.type = 'button';
    this.label = 'Local';
    this.style = 'btn-success';

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
 * @description hello
 */
pickerLocalService.prototype.handleFileSelect = function(evt) {

    for (var i=0,  tot=evt.target.files.length; i < tot; i++) {
        var file = {'name':evt.target.files[i].name,
                    'size':evt.target.files[i].size,
                    'link':'',
                    'file':evt.target.files[i]};
        this.addToPickList(file);
    }

 //    window.console.log(evt.target.files[0]);
	// //this.test();
 //    window.console.log(evt);

    // var reader = new FileReader();
    // reader['onerror'] = function(evt) {
    //     window.console.log('File read errorHandler');
    // };
    // reader['onprogress'] = function(evt) {
    //     window.console.log('File read updateProgress');
    // };
    // reader['onabort'] = function(e) {
    //     window.console.log('File read onabort');
    // };
    // reader['onloadstart'] = function(e) {
    //     window.console.log('File read onloadstart');
    // };

    // reader['onload'] = function(e) {
    //     window.console.log('File read onload');
    //     window.console.log(self);
    // };

    // // only read the first file for now
    // // Read in the image file as a binary string.
    // reader.readAsBinaryString(evt.target.files[0]);
};

/**
 * Provide the pickerLocal service to the pickerLocal module.
 */
pickerLocalService.prototype.abortRead = function() {
	// must be a button
    window.console.log('File read abortRead');
};

/**
 * Provide the pickerLocal service to the pickerLocal module.
 */
pickerLocalModule.service('pickerLocalService', pickerLocalService);
