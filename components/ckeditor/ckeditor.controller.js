(function () {
    'use strict';

    angular
        .module('diana')
        .controller('CkeditorController', CkeditorController);

    CkeditorController.$inject = ['myFactory'];

    function CkeditorController(myFactory) {

        // Inside my controller code
        var self = this;


        // Editor options.
        self.options = {
            language: 'en',
            allowedContent: true,
            entities: false
        };

        // Called when the editor is completely ready.
        self.onReady = function () {
            // ...
        };


    }

}());
