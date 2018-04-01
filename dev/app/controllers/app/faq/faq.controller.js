(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('FaqController', FaqController);

    FaqController.$inject = [
        'FeedService'
    ];

    function FaqController (FeedService) {
        var faq = this;
        ////////////////

        faq.list = [];
        faq.init = init;
        ////////////////

        function init () {
            setTimeout(window.init);
            
            FeedService.faq()
                .then(faqSuccess);
        }

        function faqSuccess (response) {
            faq.list = response.sort(sortFaq);
        }
        
        function sortFaq (faq1, faq2) {
            return faq1.ordem - faq2.ordem;
        }
    }
})();
