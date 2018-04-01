(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('HomeController', HomeController);

    HomeController.$inject = [
        '$rootScope',
        '$scope',
        'FeedService',
        'SendService',
        'StorageFactory',
        'CarouselFactory'
    ];

    function HomeController($rootScope, $scope, FeedService, SendService, StorageFactory, CarouselFactory) {
        var home = this;
        var count = 0;
        ////////////////

        home.login = {};
        home.externalLogin = {};
        home.banners = [];
        home.news = [];
        home.init = init;
        home.tokenExists = tokenExists;
        home.loginSubmit = loginSubmit;
        home.externalLoginSubmit = externalLoginSubmit;
        home.loginFailed = loginFailed;
        // url = [];
        ////////////////

        $scope.repeaterEnd = repeaterEnd;
        ////////////////////

        $scope.$on('token.exists', tokenExists);
        ////////////////////

        function init() {
            CarouselFactory.works();
        }


        function externalLoginSubmit(){
            window.location = window.location.protocol + '//' + window.location.host + "/default.aspx";
        }

        function loginSubmit() {
            var params = {
                grant_type: 'password',
                username: home.login.username.replace(/[./-]/g, ''),
                password: home.login.password
            };

            SendService.login(params)
                .then(loginSuccess);
        }

        function loginSuccess(response) {
            if (!response){
                return;
            }

            /*Limpa o Formulário de login*/
            home.login.username = "";
            home.login.password = "";

            $rootScope.safe.token = response.access_token;
            $scope.$emit('login.success');

            StorageFactory.setToken(response.access_token);

            loadBanners();
            loadNews();
        }

        function loginFailed() {
            $('#modalLoginFailed').modal('hide');
        }

        function loadBanners() {
            FeedService.banners()
                .then(bannersSuccess);
        }

        function bannersSuccess(response) {
            home.banners = response.sort(sortBanners);
        }

        function sortBanners(banner1, banner2) {
            return banner1.ordem - banner2.ordem;
        }

        function loadNews() {
            FeedService.news()
                .then(newsSuccess);
        }

        function newsSuccess(response) {
            if (!home.news.length)
                home.news = response;
        }

        function repeaterEnd() {
            CarouselFactory.news();
        }

        function tokenExists() {
            loadBanners();
            loadNews();
        }
    }
})();
