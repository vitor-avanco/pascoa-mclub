(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('RegulamentoController', RegulamentoController);

        RegulamentoController.$inject = [];

    function RegulamentoController () {
        var regulamentoTerms = this;
        ////////////////

        regulamentoTerms.init = function () {
            setTimeout(window.init);
        };

        regulamentoTerms.historyBack = function () {
            history.back();
        }
    }
})();
