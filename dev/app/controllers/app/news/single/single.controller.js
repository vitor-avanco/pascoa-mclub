(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('NewsSingleController', NewsSingleController);

    NewsSingleController.$inject = [
        '$stateParams',
        'FeedService'
    ];

    function NewsSingleController ($stateParams, FeedService) {
        var newsSingle = this;
        ////////////////

        newsSingle.data = {};
        newsSingle.init = init;
        ////////////////

        function init () {
            if ($stateParams.id)
                FeedService.news($stateParams.id)
                    .then(newsSuccess);
        }

        function newsSuccess (response) {
            newsSingle.data = response;
        }

        gtag('event', 'pageview', {
            'event_category': 'news',
            'event_action': 'read',
            'event_label': $("[data-user-email]").attr("data-user-email")
        });


    }
})();
