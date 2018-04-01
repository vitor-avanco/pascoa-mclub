(function () {
    

    angular
        .module('mercedes-clube-ui')
        .config(AppRoutes);

    AppRoutes.$inject = [
        '$stateProvider'
    ];

    function AppRoutes ( $stateProvider) {
        $stateProvider
            .state('app', {
                templateUrl  : './app/controllers/app/app.html',
                controller   : 'AppController',
                controllerAs : 'app'
            })
            .state('app.home', {
                url          : '/',
                templateUrl  : './app/controllers/app/home/home.html',
                controller   : 'HomeController',
                controllerAs : 'home'
            })
            .state('app.registerTerms', {
                url          : '/termos',
                templateUrl  : './app/controllers/app/register/terms/terms.html',
                controller   : 'RegisterTermsController',
                controllerAs : 'registerTerms'
            })
            .state('app.registerResume', {
                url          : '/cadastro',
                templateUrl  : './app/controllers/app/register/resume/resume.html',
                controller   : 'RegisterResumeController',
                controllerAs : 'registerResume'
            })
            .state('app.facebook', {
                url          : '/facebook',
                templateUrl  : './app/controllers/app/register/facebook/facebook.html',
                controller   : 'facebookController',
                controllerAs : 'facebook'
            })
            .state('app.registerConfirmation', {
                url          : '/confirmacao',
                templateUrl  : './app/controllers/app/register/confirmation/confirmation.html',
                controller   : 'RegisterConfirmationController',
                controllerAs : 'registerConfirmation'
            })
            .state('app.forgotPassword', {
                url          : '/esqueci-minha-senha',
                templateUrl  : './app/controllers/app/forgot-password/forgot-password.html',
                controller   : 'ForgotPasswordController',
                controllerAs : 'forgotPassword'
            })
            .state('app.operation', {
                url          : '/como-funciona',
                templateUrl  : './app/controllers/app/operation/operation.html',
                controller   : 'OperationController',
                controllerAs : 'operation'
            })
            .state('app.news', {
                url          : '/noticias',
                templateUrl  : './app/controllers/app/news/news.html',
                controller   : 'NewsController',
                controllerAs : 'news'
            })
            .state('app.catalog', {
                url          : '/catalogo',
                templateUrl  : './app/controllers/app/catalog/catalog.html',
                controller   : 'CatalogController',
                controllerAs : 'catalog'
            })
            .state('app.newsSingle', {
                url          : '/noticia/:id',
                templateUrl  : './app/controllers/app/news/single/single.html',
                controller   : 'NewsSingleController',
                controllerAs : 'newsSingle'
            })
            .state('app.indication', {
                url          : '/indicar-amigo',
                templateUrl  : './app/controllers/app/indication/indication.html',
                controller   : 'IndicationController',
                controllerAs : 'indication'
            })
            .state('app.dealership', {
                url          : '/concessionaria',
                templateUrl  : './app/controllers/app/dealership/dealership.html',
                controller   : 'DealershipController',
                controllerAs : 'dealership'
            })
            .state('app.contact', {
                url          : '/fale-conosco',
                templateUrl  : './app/controllers/app/contact/contact.html',
                controller   : 'ContactController',
                controllerAs : 'contact'
            })
            .state('app.partness', {
                url          : '/parceiros',
                templateUrl  : './app/controllers/app/partness/partness.html',
                controller   : 'PartnessController',
                controllerAs : 'partness'
            })
            .state('app.faq', {
                url          : '/duvidas-frequentes',
                templateUrl  : './app/controllers/app/faq/faq.html',
                controller   : 'FaqController',
                controllerAs : 'faq'
            })
            .state('app.simulator', {
                url          : '/simulador',
                templateUrl  : './app/controllers/app/simulator/simulator.html',
                controller   : 'SimulatorController',
                controllerAs : 'simulator'
            })
            .state('app.profile', {
                url          : '/perfil',
                templateUrl  : './app/controllers/app/profile/profile.html',
                controller   : 'ProfileController',
                controllerAs : 'profile'
            });

            
    }
})();
