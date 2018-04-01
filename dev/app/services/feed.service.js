(function () {
    

    angular
        .module('mercedes-clube-ui')
        .service('FeedService', FeedService);

    FeedService.$inject = [
        '$rootScope',
        '$http',
        'ApisConstant'
    ];

    function FeedService ($rootScope, $http, ApisConstant) {
        var service = {
            registerOffice      : function ()       { return sendRequest(buildRequest('OFFICE'));                    },
            registerFleetOffice : function ()       { return sendRequest(buildRequest('FLEET_OFFICE'));              },
            officine            : function ()       { return sendRequest(buildRequest('OFFICINE'));                  },
            validation          : function (params) { return sendRequest(buildRequest('VALIDATION', false, params)); },
            states              : function ()       { return sendRequest(buildRequest('STATES'));                    },
            cities              : function (params) { return sendRequest(buildRequest('CITIES', false, params));     },
            maritalState        : function ()       { return sendRequest(buildRequest('MARITAL_STATE', false));      },
            userDetails         : function ()       { return sendRequest(buildRequest('USER_DETAILS', true));        },
            banners             : function ()       { return sendRequest(buildRequest('BANNERS', true));             },
            news                : function (params) { return sendRequest(buildRequest('NEWS', false, params));       },
            subject             : function ()       { return sendRequest(buildRequest('SUBJECTS'));                  },
            faq                 : function ()       { return sendRequest(buildRequest('FAQ'));                       }
        };

        return service;
        ////////////////////

        function buildRequest (query, authorization, params) {
            return {
                method  : 'GET',
                url     : ApisConstant.BASE_URL + ApisConstant.QUERIES[query] + (params ? '/' + params : ''),
                headers : authorization ? { 'Authorization' : 'bearer ' + $rootScope.safe.token } : {}
            };
        }

        function sendRequest (request) {
            return $http(request)
                .then(responseSuccess, responseFailed);
        }

        function responseSuccess (response) {
            if (response.status !== 200)
                return responseFailed();

            return response.data;
        }

        function responseFailed (err) {
            var url = err.config.url.split("/");
            
            if(err.data.error_description){
                $rootScope.$broadcast('response.failed',err.data.error_description + '<br/>' + url[url.length-1]);
            }else if(err.data.Message){
                $rootScope.$broadcast('response.failed',err.data.Message + '<br/>' + url[url.length-1]);
            }else{
                $rootScope.$broadcast('response.failed','Ocorreu um erro.');
            }
            //$rootScope.$broadcast('request.error');
        }
    }
})();
