'use strict';
/**
 * @constructor
 * @extends pickerBaseService
 */
function pickerGoogledriveService(){
    pickerBaseService.call(this);
    this.name = 'googledrive';
    this.type = 'click';
    this.style = 'btn-warning';
    this.label = 'Googledrive';

    this.options = {
        // The API developer key obtained from the Google Developers Console.
        developerKey:'AIzaSyDA66-InYDgr2HJdlMABO_hHaqNTYxginA',

        // The Client ID obtained from the Google Developers Console.
        clientId:'654116319309-9g8oof9j7cd6dg1os5ofn7thf29u6sj7.apps.googleusercontent.com',

        // Scope to use to access user's photos.
        scope :['https://www.googleapis.com/auth/drive.readonly'],

        pickerApiLoaded:false,
        oauthToken:null
    };

    var self = this;
    gapi.load('auth', {'callback': function(){self.onAuthApiLoad();}});
    gapi.load('picker', {'callback': function(){self.onPickerApiLoad();}});
}

/**
 * @description hello
 */
pickerGoogledriveService.prototype = Object.create(pickerBaseService.prototype);

/**
 * @description hello
 */
pickerGoogledriveService.prototype.onAuthApiLoad = function() {
    window.console.log(this);
    var self = this;
    gapi.auth.authorize({
        'client_id': self.options.clientId,
        'scope': self.options.scope,
        'immediate': true
    },
    function(authResult){window.console.log(authResult);self.handleAuthResult(authResult);});
};

/**
 * @description hello
 */
pickerGoogledriveService.prototype.handleAuthResult = function(authResult){
    window.console.log('Auth results!!');
    window.console.log(authResult);
    if (authResult && !authResult.error) {
        this.options.oauthToken = authResult['access_token'];
        this.picker();
    }
};

/**
 * @description hello
 */
pickerGoogledriveService.prototype.onPickerApiLoad = function(){
    window.console.log(this);
    this.options.pickerApiLoaded = true;
    this.picker();
};

/**
 *  @inheritDoc
 *
 */
pickerGoogledriveService.prototype.pick = function(){
    window.console.log('Aloha Googledrive');
    window.console.log('Let\'s pick!');

    window.console.log(this);
    this.gPicker['setVisible'](true);

};

/**
 * @description hello
 */
pickerGoogledriveService.prototype.picker = function(){
    if (this.options.pickerApiLoaded && this.options.oauthToken) {
        this.gPicker = new google.picker.PickerBuilder()
            .addView('google.picker.ViewId.DOCS')
            .setOAuthToken(this.options.oauthToken)
            .setDeveloperKey(this.options.developerKey)
            .setCallback(this.pickerCallback)
            .build();
        window.console.log(this.gPicker);
        this.gPicker['setVisible'](false);
    }
};

/**
 * @description hello
 */
pickerGoogledriveService.prototype.pickerCallback = function(){
    window.console.log('YAYA');
};


/**
 * @description hello
 */
     // Service injection
pickerGoogledriveModule.service('pickerGoogledriveService', pickerGoogledriveService);