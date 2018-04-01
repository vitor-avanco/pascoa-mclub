(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('ContactController', ContactController);

    ContactController.$inject = [
        '$scope',
        '$rootScope',
        'FeedService',
        'SendService'
    ];

    function ContactController ($scope, $rootScope, FeedService, SendService) {
        var contact = this;
        ////////////////

        contact.subject      = [];
        contact.form         = {};
        contact.fields       = {};
        contact.init         = init;
        contact.submit       = submit;
        ////////////////

        $scope.$on('user.details', init);
        ////////////////

        function init () {
            contact.fields.name  = $rootScope.safe.userResume.nome;
            contact.fields.email = $rootScope.safe.userResume.email;

            FeedService.subject()
                .then(subjectSuccess);
        }

        function subjectSuccess (response) {
            contact.subject = response;
        }

        function submit () {
            var params = {
                nome            : contact.fields.name,
                email           : contact.fields.email,
                telefone        : $rootScope.safe.userResume.telefone,
                assuntoId       : contact.fields.subject,
                mensagem        : contact.fields.description,
                cpf             : $rootScope.safe.userResume.documentoParticipante,
                IdentityUser_Id : $rootScope.safe.userResume.IdentityUser_Id,
                user            : null
            };
            
            gtag('event', 'pageview', {
                'event_category': 'contact',
                'event_action': 'send',
                'event_label': $("[data-user-email]").attr("data-user-email")
            });

            SendService.contact(params)
                .then(contactSuccess);
        }

        function contactSuccess (response) {
            $('#modalContato').modal('show');
            
            gtag('event', 'pageview', {
                'event_category': 'contact',
                'event_action': 'success',
                'event_label': $("[data-user-email]").attr("data-user-email")
            });

            setTimeout(contactReset, 3000);
        }

        function contactReset () {
            contact.fields.name        = '';
            contact.fields.email       = '';
            contact.fields.subject     = '';
            contact.fields.description = '';

            $('#modalContato').modal('hide');
        }
    }
})();
