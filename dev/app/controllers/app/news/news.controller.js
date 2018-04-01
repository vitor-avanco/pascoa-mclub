(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('NewsController', NewsController);

    NewsController.$inject = [
        '$scope',
        'FeedService',
        'CarouselFactory'
    ];

    function NewsController ($scope, FeedService, CarouselFactory) {
        var news = this;
        ////////////////

        news.list = [];
        news.init = init;
        ////////////////

        $scope.repeaterEnd = repeaterEnd;
        ////////////////

        function init () {
            FeedService.news()
                .then(newsSuccess);
        }

        function newsSuccess (response) {
            news.list = response;
        }

        function repeaterEnd () {
            CarouselFactory.news();
        }
    }
})();
