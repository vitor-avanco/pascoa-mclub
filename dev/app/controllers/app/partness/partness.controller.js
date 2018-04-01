(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('PartnessController', PartnessController);

    PartnessController.$inject = [];

    function PartnessController () {
        var partness = this;
        ////////////////

        partness.init = function () {
            setTimeout(window.init);
        };
    }
})();
