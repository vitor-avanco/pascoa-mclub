(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('IndicationController', IndicationController);

    IndicationController.$inject = [
        'SendService'
    ];

    function IndicationController (SendService) {
        var indication = this;
        ////////////////

        indication.form    = {};
        indication.email   = '';
        indication.init   = init;
        indication.submit = submit;
        ////////////////////

        function init () {
            setTimeout(window.init);
        }

        function submit () {
            var params = {
                email  : [indication.email],
                origem : 'site',
            };

            gtag('event', 'pageview', {
                'event_category': 'indication',
                'event_action': 'send',
                'event_label': $("[data-user-email]").attr("data-user-email")
            });

            SendService.indication(params)
                .then(indicationSuccess);
        }

        function indicationSuccess (response) {
            indication.email = '';

            if (response === 'Indicação completada') {
                $('#modalIndication').modal('show');
                setTimeout(hideModal, 3000);
            }

            gtag('event', 'pageview', {
                'event_category': 'indication',
                'event_action': 'success',
                'event_label': $("[data-user-email]").attr("data-user-email")
            });


        }

        function hideModal () {
            $('#modalIndication').modal('hide');
        }
    }
})();
