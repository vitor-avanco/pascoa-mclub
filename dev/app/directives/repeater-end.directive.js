(function () {
    

    angular
        .module('mercedes-clube-ui')
        .directive('repeaterEnd', RepeaterEnd);

    function RepeaterEnd () {
        var directive = {
            restrict : 'A',
            link     : Link
        };

        return directive;
        ////////////////////

        function Link ($scope) {
            if ($scope.$last)
                $scope.repeaterEnd();
        }
    }
})();