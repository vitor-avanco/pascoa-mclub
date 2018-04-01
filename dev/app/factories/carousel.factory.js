(function () {
    

    angular
        .module('mercedes-clube-ui')
        .factory('CarouselFactory', CarouselFactory);

    CarouselFactory.$inject = [];

    function CarouselFactory () {
        var factory = {
            works  : works,
            banner : banner,
            news   : news
        };

        return factory;
        ////////////////////

        function works () {
            $('#funcionamento').owlCarousel({
                loop:false,
                margin:10,
                responsive:{
                    0:{
                        items:1
                    },
                    1000:{
                        items:4
                    }
                }
            });
        }

        function banner () {
            $('#carousel-mercedes').owlCarousel();
        }

        function news () {
            $('#noticias').owlCarousel({
                loop:false,
                margin:10,
                responsive:{
                    0:{
                        items:1
                    },
                    1000:{
                        items:4
                    }
                }
            });
        }
    }
})();
