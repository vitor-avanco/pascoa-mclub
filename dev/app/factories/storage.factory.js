(function () {
    

    angular
        .module('mercedes-clube-ui')
        .factory('StorageFactory', StorageFactory);

    StorageFactory.$inject = [
        'store',
        'StorageConstant'
    ];

    function StorageFactory (store, StorageConstant) {
        var factory = {
            getToken    : getToken,
            setToken    : setToken,
            removeToken : removeToken
        };

        return factory;
        ////////////////////

        function getToken () {
            return sessionStorage.getItem(StorageConstant.TOKEN);
        }

        function setToken (data) {
            return sessionStorage.setItem(StorageConstant.TOKEN, data);
        }

        function removeToken (data) {
            return sessionStorage.removeItem(StorageConstant.TOKEN);
        }
    }
})();
