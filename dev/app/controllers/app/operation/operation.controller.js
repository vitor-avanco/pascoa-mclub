(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('OperationController', OperationController);

    OperationController.$inject = [];

    function OperationController () {
        var operation = this;
        ////////////////

        operation.init = function () {
            setTimeout(window.init);
        };
    }
})();
