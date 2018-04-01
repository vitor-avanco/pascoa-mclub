(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('SimulatorController', SimulatorController);

    SimulatorController.$inject = [];

    function SimulatorController () {
        var simulator = this;
        ////////////////
       
        simulator.init = function () {
            setTimeout(window.init);
        };

        simulator.calculator = function(){
            
            gtag('event', 'pageview', {
                'event_category': 'simulator',
                'event_action': 'calculator',
                'event_label': $("[data-user-email]").attr("data-user-email")
            });

            var fator = 0.01;
            var conversao = 0.0;
            if(!isNaN(simulator.points)){
                conversao = (simulator.points * fator).toFixed(2);
            }
            simulator.pointsConverted = "R$ " + String(conversao).replace('.',',');
        }
    }
})();
