(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('CatalogController', CatalogController);

    CatalogController.$inject = ['SendService','$state','$rootScope'];

    function CatalogController (SendService,$state,$rootScope) {
        var catalog = this;
        ////////////////

        catalog.init = function () {
            setTimeout(window.init);
            catalog.login();
        };

        catalog.login = function () {
            var params = {};
            SendService.catalog(params)
                .then(catalogSuccess);
        }

        function catalogSuccess (response) {
            if( response || typeof response != "undefined"){
                if (typeof response.link != undefined) {
                    catalog.link = response.link;
                    window.open(response.link,'_catalogo');
                }
            }else{
                $rootScope.$broadcast('response.failed','Erro ao acessar o Catálogo.');
            }
            
        }
    }
})();
