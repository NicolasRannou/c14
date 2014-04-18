'use strict';
/**
 * @constructor
 * @extends pickerBaseService
 */
function pickerDropboxService(){

    pickerBaseService.call(this);
    this.name = 'dropbox';
    this.type = 'click';
    this.label = 'Dropbox';

    // test
    this.formats = ['.dcm'];

    this.options = {

        // Required. Called when a user selects an item in the Chooser.
        'success': function(files) {
            window.alert('Here\'s the file link: ' + files[0].link);
        },

        // Optional. Called when the user closes the dialog without selecting a file
        // and does not include any parameters.
        'cancel': function() {

        },

        // Optional. "preview" (default) is a preview link to the document for sharing,
        // "direct" is an expiring link to download the contents of the file. For more
        // information about link types, see Link types below.
        'linkType': 'preview', // or "direct"

        // Optional. A value of false (default) limits selection to a single file, while
        // true enables multiple file selection.
        'multiselect': false, // or true

        // Optional. This is a list of file extensions. If specified, the user will
        // only be able to select files with these extensions. You may also specify
        // file types, such as "video" or "images" in the list. For more information,
        // see File types below. By default, all extensions are allowed.
        'extensions': this.formats,
    };
}

/**
 * @description hello
 */
pickerDropboxService.prototype = Object.create(pickerBaseService.prototype);

/**
 * @description hello
 */
pickerDropboxService.prototype.pick = function(){
    Dropbox.choose(this.options);
};

/**
 * @description hello
 */
pickerDropboxModule.service('pickerDropboxService', pickerDropboxService);
