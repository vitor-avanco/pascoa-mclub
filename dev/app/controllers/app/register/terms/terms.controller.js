(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('RegisterTermsController', RegisterTermsController);

    RegisterTermsController.$inject = [];

    function RegisterTermsController () {
        var registerTerms = this;
        ////////////////

        registerTerms.init = function () {
            setTimeout(window.init);
        };

        registerTerms.historyBack = function () {
            history.back();
        }
    }
})();
