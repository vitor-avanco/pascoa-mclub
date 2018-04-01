(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('RegisterConfirmationController', RegisterConfirmationController);

    RegisterConfirmationController.$inject = [
        '$rootScope',
        '$state',
        'FeedService'
    ];

    function RegisterConfirmationController ($rootScope, $state, FeedService) {
        var registerConfirmation = this;
        ////////////////

        registerConfirmation.validated = false;
        registerConfirmation.init      = init;
        registerConfirmation.login     = login;
        registerConfirmation.hideModal = hideModal;
        ////////////////

        function init () {
            var url = location.href.split('=');
            
            FeedService.validation(url[1])
                .then(validationSuccess);
        }

        function validationSuccess (response) {
            if (response && response.status){
                registerConfirmation.validated = true;
                $('#modalConfimation').modal('show');

                gtag('event', 'pageview', {
                    'event_category': 'register',
                    'event_action': 'confirmation',
                    'event_label': "Cadastro Confirmado"
                });
    
            }
                
        }

        function hideModal () {
            $('#modalConfimation').modal('hide');
        }

        function login () {
            $('#modalConfimation').modal('hide');
            $state.go('app.home');
        }
    }
})();
