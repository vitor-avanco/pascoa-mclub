(function () {
    

    angular
        .module('mercedes-clube-ui')
        .service('SendService', SendService);

    SendService.$inject = [
        '$rootScope',
        '$http',
        '$httpParamSerializerJQLike',
        'ApisConstant'
    ];

    function SendService ($rootScope, $http, $httpParamSerializerJQLike, ApisConstant) {
        var service = {
            login          : login,
            externalLogin  : externalLogin,
            forgotPassword : forgotPassword,
            register       : register,
            personal       : personal,
            indication     : indication,
            contact        : contact,
            dealership     : dealership,
            catalog        : catalog
        };

        return service;
        ////////////////////

        function login (params) {
            var request         = buildRequest('LOGIN');
                request.data    = $httpParamSerializerJQLike(params);
                request.headers = { 'Content-Type' : 'application/x-www-form-urlencoded' };

            return sendData(request);
        }

        function externalLogin () {
            var request         = buildRequestGet();
                request.headers = { 'Content-Type' : 'application/x-www-form-urlencoded' };

            return sendData(request);
        }

        function externalLogin2(url){

            var request =  {
                method  : 'GET',
                url     : url
            };

            return sendData(request);
        }

        function forgotPassword (params) {
            var request         = buildRequest('FORGOT_PASSWORD', params);
            request.headers = {
                'Content-Type'  : 'application/json'
            };

            return sendData(request);
        }

        function register (params) {
            var request         = buildRequest('REGISTER', params);
                request.headers = { 'Content-Type' : 'application/json' };

            return sendData(request);
        }

        function personal (params) {
            var request         = buildRequest('PERSONAL', params);
                request.headers = {
                'Content-Type'  : 'application/json',
                'Authorization' : 'bearer ' + $rootScope.safe.token
            };

            return sendData(request);
        }

        function indication (params) {
            var request         = buildRequest('INDICATION', params);
                request.headers = {
                'Content-Type'  : 'application/json',
                'Authorization' : 'bearer ' + $rootScope.safe.token
            };
            return sendData(request);
        }



        function catalog (params) {
            var request         = buildRequestIntegration('CATALOG', params);
                request.headers = {
                'Content-Type'  : 'application/json',
                'Authorization' : 'bearer ' + $rootScope.safe.token
            };

            return sendData(request);
        }


        function dealership (params) {
            var request         = buildRequest('DEALERSHIP', params);
                request.headers = {
                'Content-Type'  : 'application/json',
                'Authorization' : 'bearer ' + $rootScope.safe.token
            };

            return sendData(request);
        }

        function contact (params) {
            var request         = buildRequest('CONTACT', params);
                request.headers = {
                    'Content-Type'  : 'application/json',
                    'Authorization' : 'bearer ' + $rootScope.safe.token
                };

            return sendData(request);
        }

        function buildRequest (query, params) {
            return {
                method  : 'POST',
                url     : ApisConstant.BASE_URL + ApisConstant.QUERIES[query],
                data    : params
            };
        }

        function buildRequestIntegration (query, params) {
            return {
                method  : 'POST',
                url     : ApisConstant.BASE_URL_INTEGRATION + ApisConstant.QUERIES[query],
                data    : params
            };
        }

        function buildRequestOuthFacebook() {
            return {
                method  : 'GET'
            };
        }

        function buildRequestGet () {
            return {
                method  : 'GET',
                url     : ApisConstant.BASE_URL + 'participante/LoginFacebook',
                
            };
        }

        function sendData (request) {
            return $http(request)
                .then(responseSuccess, responseFailed);
        }

        function responseSuccess (response) {
            if (response.status !== 200)
                return responseFailed();

            return response.data;
        }

        function responseFailed (err) {
            if(err.data.error_description){
                $rootScope.$broadcast('response.failed',err.data.error_description);
            }else{
                $rootScope.$broadcast('response.failed',err.data.Message);
            }            
        }
    }
})();
