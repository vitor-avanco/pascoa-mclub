(function () {
    

    angular
        .module('mercedes-clube-ui')
        .config(AppConfig);

    AppConfig.$inject = [
        '$compileProvider',
        '$locationProvider',
        '$urlRouterProvider',
        'cfpLoadingBarProvider'

    ];

    function AppConfig($compileProvider, $locationProvider, $urlRouterProvider, cfpLoadingBarProvider) {
        $compileProvider.aHrefSanitizationWhitelist(/^\s*(https|http):/);
        // $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
        $urlRouterProvider.otherwise('/');
        cfpLoadingBarProvider.includeSpinner = false;

    }



})();
