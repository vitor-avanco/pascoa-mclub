(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('AppController', AppController);

    AppController.$inject = [
        '$scope',
        '$rootScope',
        '$state',
        'FeedService',
        'StorageFactory',
        'ngNotify'
    ];

    function AppController ($scope, $rootScope, $state, FeedService, StorageFactory,ngNotify) {

        $rootScope.participantStars  = "000";
        $rootScope.participantPoints = "000";
        
        ngNotify.config({
            theme: 'pure',
            position: 'top',
        });
    
        $rootScope.$on('response.failed', function (event, args) {
            ngNotify.set(args, {
                sticky: false,
                duration: 5000,
                type: 'error',
                button: true,
                html: true
            });
        });

        var app    = this;
        var routes = [
            'app.registerResume',
            'app.facebook',
            'app.registerConfirmation',
            'app.registerTerms',
            'app.forgotPassword'
        ];
        ////////////////////
        
        app.init      = init;
        app.goToHome  = goToHome;
        app.logout    = logout;
        app.asideHide = asideHide;
        ////////////////////

        $scope.$on('$stateChangeSuccess', stateChange); 
        $scope.$on('request.error',       requestError);
        $scope.$on('login.success',       loginSuccess);
        ////////////////////

        function init () {
            $rootScope.safe.token = StorageFactory.getToken();
            if ($rootScope.safe.token)
                return setTimeout(function () {
                    loginSuccess();
                    $scope.$broadcast('token.exists');
                });

            if (routes.indexOf($state.current.name) === -1 && !$rootScope.safe.token)
                $state.go('app.home');
        }

        function goToHome () {
            $state.go('app.home');
        }

        function logout () {
            $rootScope.safe = {};
            $rootScope.simulado = false;
            $rootScope.participantPoints = "000";
            $rootScope.participantStars = "000";

            StorageFactory.removeToken();
        }

        function asideHide () {
            $('#navbarNav').removeClass("show");
        }

        function stateChange (e, toState) {
            $rootScope.safe.token = StorageFactory.getToken();
            
            gtag('config', 'UA-116577902-1', {
                'page_path': toState.url
              });
            
            gtag('event', 'pageview', {
                'event_category': 'pageviews',
                'event_label': toState.url
            });

            if (routes.indexOf(toState.name) === -1 && !$rootScope.safe.token)
                $state.go('app.home');
        }

        function requestError () {
            alert('Erro durante o carregamento!');
            $state.go('app.home');
        }

        function loginSuccess () {
            FeedService.userDetails()
                .then(userDetailsSuccess);
        }

        function userDetailsSuccess (response) {
            $rootScope.safe.userResume = response;
            
            /*
            SIMULADO
            Quando o participante tiver um email com um dos domínios abaixo, os pontos e estrelas aparecerão:
                @daimler.com
                @deloitte.com
                @devpartner.com.br
                @grupoltm.com.br
            */
            var email = $rootScope.safe.userResume.email;
            if(
                email.substr(email.indexOf('@'),email.lenght) === '@daimler.com' ||
                email.substr(email.indexOf('@'),email.lenght) === '@deloitte.com' ||
                email.substr(email.indexOf('@'),email.lenght) === '@devpartner.com.br' ||
                email.substr(email.indexOf('@'),email.lenght) === '@grupoltm.com.br' ||
                email.substr(email.indexOf('@'),email.lenght) === '@ltm.digital'
            ){
                console.log('SIMULADO');
                $rootScope.participantStars  = "500";
                $rootScope.participantPoints = "500";
                $rootScope.simulado = true;
            }
            $scope.$broadcast('user.details');
            
            if (!$rootScope.safe.userResume.statusConfirmacao) {
                gtag('event', 'pageview', {
                    'event_category': 'register',
                    'event_action': 'confirm',
                    'event_label': 'Confirme seu cadastro'
                });
                return $('#modalConfirmacao').modal('show');
            }
                
        
            if (!$rootScope.safe.userResume.realizouPrimeiroAcesso)
                $state.go('app.profile');
        }
    }
})();
