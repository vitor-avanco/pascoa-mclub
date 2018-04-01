(function () {
    

    angular
        .module('templates', []);

    angular
        .module('mercedes-clube-ui', [
            'angular-storage',
            'ngSanitize',
            'ui.router',
            'ui.router.state.events',
            'ui.utils.masks',
            'angular-loading-bar',
            'ngFileUpload',
            'ngMask',
            'ngNotify'
        ]);
})();
