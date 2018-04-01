(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('facebookController', facebookController);

    facebookController.$inject = [
        '$rootScope',
        'FeedService',
        'SendService'
    ];

    function facebookController($rootScope, FeedService, SendService) {
        var facebook = this;

        facebook.init = init;
        facebook.console = teste;


        function teste(){ 
            window.close;
        };

        function init() {
            setTimeout(window.init, 1000);
        }


        function externalLoginSubmit() {

            SendService.externalLogin()
                .then(externalLoginSuccess);

            function externalLoginSuccess(response) {
                var newwindow = window.open(response, 'MercedesClub', 'height=320,width=585');
                if (window.focus) { newwindow.focus() }
                return false;
            }

        }
    }
})();