(function () {
    

    angular
        .module('mercedes-clube-ui')
        .run(AppRun);

    AppRun.$inject = [
        '$rootScope',
        '$window',
        'StorageFactory'
    ];

    function AppRun($rootScope, $window,StorageFactory) {
        $rootScope.simulado = false;
        $rootScope.safe = {
            device: 'smartphone',
            browser: '',
            token: undefined,
            userResume: {},
            userPersonal: {},
            userVehicle: {}
        };
        
        //Quando for retorno pelo Facebook, pegamos o cookie gravado pelo server e damos sequência.
        accessToken();
        function accessToken(){            
            var get = getCookie('access_token');
            
            if(get != undefined && get != ""){
                StorageFactory.setToken(get);
                var token = StorageFactory.getToken('token');
                window.location = window.location.protocol + '//' + window.location.host + '/#/home';
            }

            function getCookie(cname) {
                var name = cname + "=";
                var decodedCookie = decodeURIComponent(document.cookie);
                var ca = decodedCookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ') {
                        c = c.substring(1);
                    }
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
        }
        
        
        ////////////////////

        setDevice();
        setBrowser();

        function setDevice() {
            var pattern = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

            if (!pattern.test(navigator.userAgent)) return ($rootScope.safe.device = 'desktop');
            if ($window.innerWidth > 800 && $window.innerHeight > 800) return ($rootScope.safe.device = 'tablet');
        }

        function setBrowser() {
            $rootScope.browser = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
        }

        // $window.fbAsyncInit = function () {
        //     // Executed when the SDK is loaded

        //     FB.init({

        //         /*
        //          The app id of the web app;
        //          To register a new app visit Facebook App Dashboard
        //          ( https://developers.facebook.com/apps/ )
        //         */

        //         appId: 'xxxxxxxxxxxxxxx',

        //         /*
        //          Adding a Channel File improves the performance
        //          of the javascript SDK, by addressing issues
        //          with cross-domain communication in certain browsers.
        //         */

        //         channelUrl: 'app/channel.html',

        //         /*
        //          Set if you want to check the authentication status
        //          at the start up of the app
        //         */

        //         status: true,

        //         /*
        //          Enable cookies to allow the server to access
        //          the session
        //         */

        //         cookie: true,

        //         /* Parse XFBML */

        //         xfbml: true
        //     });

        //     sAuth.watchAuthenticationStatusChange();

        // };

        // (function (d) {
        //     // load the Facebook javascript SDK

        //     var js,
        //         id = 'facebook-jssdk',
        //         ref = d.getElementsByTagName('script')[0];

        //     if (d.getElementById(id)) {
        //         return;
        //     }

        //     js = d.createElement('script');
        //     js.id = id;
        //     js.async = true;
        //     js.src = "//connect.facebook.net/en_US/all.js";

        //     ref.parentNode.insertBefore(js, ref);

        // }(document));
    }
})();
