(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('DealershipController', DealershipController);

    DealershipController.$inject = ['$rootScope','SendService'];

    function DealershipController ($rootScope,SendService) {
        var dealership = this;
        dealership.getLocation = getLocation;
        ////////////////

        dealership.init = function () {
            setTimeout(window.init,1000);
            setTimeout(getLocation,1000);
        };

        function setMarkers(map) {
            var infowindow = new google.maps.InfoWindow({
                content: 'contentString'
            });
    
            var image = {
                url: 'https://mercedesclube-hml.azurewebsites.net/assets/img/logo.png',
                // This marker is 20 pixels wide by 32 pixels high.
                size: new google.maps.Size(20, 32),
                // The origin for this image is (0, 0).
                origin: new google.maps.Point(0, 0),
                // The anchor for this image is the base of the flagpole at (0, 32).
                anchor: new google.maps.Point(0, 32)
            };
            // Shapes define the clickable region of the icon. The type defines an HTML
            // <area> element 'poly' which traces out a polygon as a series of X,Y points.
            // The final coordinate closes the poly by connecting to the first coordinate.
            var shape = {
                coords: [1, 1, 1, 20, 18, 20, 18, 1],
                type: 'poly'
            };
            var lat = 0;
            var lon = 0;
            var concessionarias = [
                ['ACREDIESEL',-10.01108056,-67.79594722],
                ['ANADIESEL - ANÁPOLIS',-16.403585,-48.977759],
                ['ANADIESEL - PORANGATU',-13.441049,-49.142758],
                ['ANADIESEL - GURUPI',-11.75313333,-49.09141944],
                ['ANADIESEL - PALMAS',-10.245541,-48.312979],
                ['AOKI - TRÊS LAGOAS',20797304,51687166],
                ['AUTO COMÉRCIO - CONS. LAFAIETE',-20.647139,-43.809133],
                ['AUTO COMÉRCIO - BARBACENA',-21.2132,-43.75321944],
                ['AUTOSETE',-19.46955,-44.25341111],
                ['AVEPE - OLIVEIRA',-20.69946,-44.824197],
                ['BLU STAR',-26.870047,-49.226958],
                ['CALISTO DIESEL',-17.831557,-41.510103],
                ['CARDIESEL',-19.945657,-44.004977],
                ['CEARÁ DIESEL - FORTALEZA',-3.757094,-38.523219],
                ['CEARÁ DIESEL - JUAZEIRO DO NORTE',-7.229852,-39.324124],
                ['CEARÁ DIESEL - SOBRAL',-3.719661111,-40.33173333],
                ['COMERCIAL DE NIGRIS',-23.648878,-46.578673],
                ['COMVEIMA - VITÓRIA. DA CONQUISTA',-14.89589444,-40.86643056],
                ['COMVEIMA - GUANANBI',-14.207811,-42.764572],
                ['DIVESUL',-26.88478333,-52.40811111],
                ['DIVESUL',-27.224019,-51.967864],
                ['DIVESUL',-27.181089,-51.536887],
                ['COSMAR - JUNDIAÍ',-23.174387,-46.919163],
                ['CURT SCHROEDER',-27.206339,-49.648463],
                ['DE NIGRIS - ITÚ',-23.244673,-47.31723],
                ['DE NIGRIS - S.J.DOS CAMPOS',-23.180729,-45.844011],
                ['DE NIGRIS - SÃO PAULO',-23.51077222,-46.68049167],
                ['DE NIGRIS - GUARULHOS',-23.43357,-46.407978],
                ['DE NIGRIS - SÃO PAULO - VAN CENTER',-23.616953,-46.662315],
                ['DE NIGRIS - SOROCABA',-23.53489722,-47.49611944],
                ['DE NIGRIS - ITAPEVA',-23.97694,-48.903478],
                ['DIVENA CAMINHÕES - SÃO PAULO',-23.50901944,-46.83188333],
                ['DIVENA BUS',-23.683497,-46.604878],
                ['DIVENA LITORAL',-23.927609,-46.386587],
                ['ENZO CAMINHÕES - DOURADOS',-22.221555,-54.745764],
                ['FIGUEIREDO',-23.0764,-48.92834444],
                ['GOIAS CAMINHÕES - GOIÂNIA',-16.693729,-49.322208],
                ['GOIÁS CAMINHÕES - BARRA DO GARÇAS',-15.879987,-52.282412],
                ['GUANABARA DIESEL',-22.840807,-43.253651],
                ['IDISA',-25.48851111,-54.50695],
                ['INGÁ CAMINHÕES - IÇARA',-28.764376,-49.296093],
                ['INGÁ VEÍCULOS - ARAÇATUBA',-21.254897,-50.420326],
                ['INGÁ VEÍCULOS - ITAJAÍ',-26.860385,-48.727546],
                ['INGÁ VEÍCULOS LONDRINA',-23.29316111,-51.16190833],
                ['INGÁ VEÍCULOS - MARINGÁ',-23.48403,-52.005394],
                ['INGÁ VEÍCULOS - PARANAVAÍ',-23.07622222,-52.415175],
                ['INGÁ VEÍCULOS - SÃO MIGUEL D.OESTE',-26.76090556,-53.49992778],
                ['INGÁ VEÍCULOS - VITORINO',-26.27105556,-52.71275],
                ['IRMÃOS DAVOLI - MOGI-MIRIM',-22.461777,-46.982828],
                ['IRMÃOS DAVOLI - PORTO FERREIRA',-21.872929,-47.48761],
                ['IRMÃOS DAVOLI - JAÚ',-22.303728,-48.586473],
                ['ITADIL',-14.807184,-39.296492],
                ['ITAMADIL',-17.523808,-39.706671],
                ['JAGUARDIESEL - JAGUARIBE',-5.88774,-38.61989],
                ['JUIZ DE FORA DIESEL',-21.681039,-43.441851],
                ['MARDISA - BRASÍLIA',-15.876176,-48.023655],
                ['MARDISA - MANAUS',-3.047729,-60.025257],
                ['MARDISA - ITABAIANA',-10.687135,-37.439883],
                ['MARDISA - N.S.DO SOCORRO',-10.90006111,-37.14271389],
                ['MARDISA SÃO GONÇALO',-22.85067,-43.021259],
                ['MARDISA - SÃO LUIS',-2.590302778,-44.24500556],
                ['MARDISA - TERESINA',-5.15506,-42.771943],
                ['MARDISA - FLORIANO',-6.779011,-43.004139],
                ['MAVEL - PETROLINA',-9.396522,-40.514295],
                ['MAVEL - ARCOVERDE',-8.415358333,-37.08078889],
                ['MAVEL - SENHOR DO BONFIM',-10.468478,-40.171927],
                ['MAVEL - PICOS',-7.085011111,-41.40944722],
                ['MAVEL - BARREIRAS',-12.146102,-44.991624],
                ['MECÂNICA ATLAS',-26.997569,-51.114095],
                ['MINASMÁQUINAS',-19.961157,-44.052236],
                ['MINASMÁQUINAS - DIVINÓPOLIS',-20.120716,-44.911482],
                ['MIRIAM',-22.844352,-43.249252],
                ['MONTES CLAROS - MONTES CLAROS',-16.717426,-43.843904],
                ['PARANÁ DIESEL',-24.026745,-52.365161],
                ['PAULISTA AUTO DIESEL',-21.71653333,-51.01297222],
                ['PEDRO MONTELEONE - BARRETOS',-20.579238,-48.581178],
                ['PEDRO MONTELEONE - CATANDUVA',-21.15316667,-48.99175833],
                ['PERES DIESEL - ARARAQUARA',-21.78607,-48.220188],
                ['PERES DIESEL - S.J.DA BOA VISTA',-21.984791,-46.788036],
                ['PERES DIESEL - POÇOS DE CALDAS',-21.806594,-46.488985],
                ['PIRASA - CAMPINAS',-22.887208,-47.113042],
                ['PIRASA - LIMEIRA',-22.587248,-47.375997],
                ['PIRASA - PIRACICABA',-22.72824,-47.61966],
                ['POSTO IMPERIAL - LEOPOLDINA',-21.546244,-42.660921],
                ['PRODOESTE - FORMIGA',-20.44393333,-45.45673056],
                ['PRODOESTE - GUARATINGUETÁ',-22.77683611,-45.14062222],
                ['PRODOESTE - POUSO ALEGRE',-22.2393,-45.88044722],
                ['PRODOESTE - TRÊS CORAÇÕES',-21.66692778,-45.31854167],
                ['PRODOESTE - UBERABA',-19.777658,-47.929198],
                ['PRODOESTE - ARAXÁ',-19.559871,-46.971735],
                ['REUNIDAS',-5.872676,-35.220452],
                ['REUNIDAS',-5.135313,-37.344569],
                ['RIBEIRÃO DIESEL - RIBEIRÃO PRETO',-21.1883,-47.7827],
                ['RIBEIRÃO DIESEL - FRANCA',-20.570308,-47.394612],
                ['RIO DIESEL',-22.763687,-43.429374],
                ['RODOBENS - MACAPÁ',0.041209,-51.073809],
                ['RODOBENS - CURITIBA - VAN CENTER',-24.457087,-49.258832],
                ['RODOBENS - ARAGUAÍNA',-7.170404,-48.213576],
                ['RODOBENS - JATAÍ',-17.917,-51.724],
                ['RODOBENS - RIO VERDE',-17.78933889,-50.90616667],
                ['RODOBENS - FEIRA DE SANTANA',-12.287005,-39.017258],
                ['RODOBENS - SALVADOR',-12.88118333,-38.43350556],
                ['RODOBENS - ANANINDEUA',-1.392852778,-48.41716111],
                ['RODOBENS - SANTARÉM',-2.476238,-54.729488],
                ['RODOBENS - FERNADÓPOLIS',-20.276227,-50.225329],
                ['RODOBENS - IMPERATRIZ',-5.558256,-47.452601],
                ['RODOBENS - PARAUAPEBAS',-6.038737,-49.892564],
                ['RODOBENS - MARABÁ',-5.344719,-49.080906],
                ['RODOBENS - S.J.R.PRETO',-20.834327,-49.359255],
                ['RODOBENS - SINOP',-11.86411389,-55.49661111],
                ['RODOBENS - CUIABÁ',-15.634072,-56.047053],
                ['RODOBENS - RONDONOPOLIS',-16.46207222,-54.66094167],
                ['RODOBENS - CARUARU',-8.262203,-35.976421],
                ['RODOBENS - JAB.DOS GUARARAPES',-8.174264,-34.942521],
                ['RODOBENS - PORTO VELHO',-8.775069,-63.877054],
                ['RODOBENS - VILHENA',-12.742985,-60.121608],
                ['RODOBENS - JI-PARANÁ',-10.867931,-61.964908],
                ['RODOBENS - CAMPO GRANDE',-20.511867,-54.602925],
                ['RODOBENS - GUARULHOS',-23.473454,-46.523291],
                ['SANTORRES - CAICÓ',-7.043383333,-37.41865278],
                ['SANTORRES - PATOS',-7.043383333,-37.41865278],
                ['VD - SAVANA - SÃO JOSÉ DOS PINHAIS',-25.543076,-49.150245],
                ['VD - SAVANA - CURITIBA',-25.39041111,-49.20673056],
                ['VD - SAVANA - JOINVILLE',-26.305746,-48.881049],
                ['VD - SAVANA - PONTA GROSSA',-25.081056,-50.193958],
                ['SODAUTO - UBÁ',-21.123496,-42.980533],
                ['SPERANDIO',-27.095522,-52.638465],
                ['STEFANI - JABOTICABAL',-21.26626,-48.327854],
                ['UBERLÂNDIA CAM. - UBERLÂNDIA',-18.90359722,-48.282766],
                ['UBERLÂNDIA CAM. - ITUMBIARA',-18.366497,-49.21286],
                ['UMUARAMA DIESEL',-23.778193,-53.291051],
                ['UNIDAS - JOÃO PESSOA',-7.171336111,-34.89746667],
                ['UNIDAS - CAMPINA GRANDE',-7.228362,-35.873961],
                ['VADIESEL',-19.526738,-42.641716],
                ['VALADARES DIESEL',-18.901922,-41.944739],
                ['VD - CARIACICA',-20.341448,-40.40499],
                ['VD - LINHARES',-19.40186,-40.061023],
                ['VD - CACHOEIRO DO ITAPEMIRIM',-20.8467047,-41.1202199],
                ['VEGRANDE - CASCAVEL',-24.96785556,-53.40158889],
                ['VEGRANDE - GUARAPUAVA',-25.348726,-51.453331],
                ['VEÍCULOS MALLON - UNIÃO DA VITÓRIA',-26.197522,-51.052316],
                ['VEÍCULOS MALLON - MAFRA',-26.152279,-49.832139]
              ];
    
            for (var i = 0; i < concessionarias.length; i++) {
                var concessionaria = concessionarias[i];
                var marker = new google.maps.Marker({
                    position: {lat: concessionaria[1], lng: concessionaria[2]},
                    map: map,
                    //icon: image,
                    shape: shape,
                    title: concessionaria[0],
                    zIndex: concessionaria[3],
                    info: "Concessionário: " + concessionaria[0],
                    latitude: concessionaria[1],
                    longitude: concessionaria[2]
                });
                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent( this.info + '<br/>Sua distância até esta Concessionário: ' + parseFloat(getDistanceFromLatLonInKm($rootScope.lat,$rootScope.lon,this.latitude, this.longitude).toFixed(2)) + ' km');
                    infowindow.open( map, this );
                });
            }
        }
        function getLocation(){
            if (navigator.geolocation){
                navigator.geolocation.getCurrentPosition(showPosition,showError);
            }else{
                showPosition(null);
            }
        }
        function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
            var R = 6371; // Radius of the earth in km
            var dLat = deg2rad(lat2-lat1);  // deg2rad below
            var dLon = deg2rad(lon2-lon1); 
            var a = 
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * 
                Math.sin(dLon/2) * Math.sin(dLon/2)
                ; 
            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
            var d = R * c; // Distance in km
            return d;
        }
        function deg2rad(deg) {
            return deg * (Math.PI/180)
        }
        function showPosition(position){
            var msgPinInicial = "";
            if(position){
                $rootScope.lat = position.coords.latitude;
                $rootScope.lon = position.coords.longitude;
                msgPinInicial = "Você está aqui";

                var params = {
                    latitude  : position.coords.latitude,
                    longitude : position.coords.longitude
                };

                SendService.dealership(params)
                    .then(dealershipSuccess);
            }else{
                //São Paulo
                $rootScope.lat = -23.6655067;
                $rootScope.lon = -46.5890473;            
                
            }

            var latlon=new google.maps.LatLng($rootScope.lat, $rootScope.lon)
            var mapholder=document.getElementById('mapholder')
                mapholder.style.height='600px';
                mapholder.style.width='100%';
    
            var myOptions={
                center:latlon,
                zoom:13,
                mapTypeId:google.maps.MapTypeId.ROADMAP,
                mapTypeControl:false,
                navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
            };
    
            var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
            var marker=new google.maps.Marker({position:latlon,map:map,title:msgPinInicial,icon:'https://developers.google.com/maps/documentation/javascript/images/circle.png'});
            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent( this.title );
                infowindow.open( map, this );
            });
            setMarkers(map);

            var markers = [];
            // Create the search box and link it to the UI element.
            var input = document.getElementById('pac-input');
            var searchBox = new google.maps.places.SearchBox(input);
            //map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
    
            // Bias the SearchBox results towards current map's viewport.
            map.addListener('bounds_changed', function() {
              searchBox.setBounds(map.getBounds());
            });

            searchBox.addListener('places_changed', function() {
                var places = searchBox.getPlaces();

                if (places.length == 0) {
                    return;
                }

                // Clear out the old markers.
                markers.forEach(function(marker) {
                    marker.setMap(null);
                });
                markers = [];
        
                // For each place, get the icon, name and location.
                var bounds = new google.maps.LatLngBounds();
                places.forEach(function(place) {
                    if (!place.geometry) {
                        console.log("Returned place contains no geometry");
                        return;
                    }
                    var icon = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };
        
                    // Create a marker for each place.
                    markers.push(new google.maps.Marker({
                        map: map,
                        icon: icon,
                        title: place.name,
                        position: place.geometry.location
                    }));
        
                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }
                    
                    var params = {
                        latitude  : place.geometry.location.lat(),
                        longitude : place.geometry.location.lng()
                    };
        
                    SendService.dealership(params)
                        .then(dealershipSuccess);
                });
                map.fitBounds(bounds);

            });

        }
        function showError(error)  {
            switch(error.code)
            {
                case error.PERMISSION_DENIED:
                    $rootScope.geolocation = 2;
                    $rootScope.geolocationMessage = "Infelizmente não foi possível carregar o mapa de concessionários. Por favor, autorize o acesso à sua localização.";
                    break;
                case error.POSITION_UNAVAILABLE:                    
                    $rootScope.geolocation = 2;
                    $rootScope.geolocationMessage ="Informação de sua localização não está disponível";
                    break;
                case error.TIMEOUT:                  
                    $rootScope.geolocation = 2;
                    $rootScope.geolocationMessage ="Tempo limite de consulta de sua localização.";
                    break;
                case error.UNKNOWN_ERROR:  
                    $rootScope.geolocation = 2;
                    $rootScope.geolocationMessage ="Um erro inexperado ocorreu na sua localização.";
                    break;
            }
            //Realiza a chamada sem localização;

            
            gtag('event', 'pageview', {
                'event_category': 'dealership',
                'event_action': 'error',
                'event_label': $("[data-user-email]").attr("data-user-email")
            });

            showPosition(null);
        }

        function dealershipSuccess(response){
            $rootScope.dealerships = response;
            
            gtag('event', 'pageview', {
                'event_category': 'dealership',
                'event_action': 'success',
                'event_label': $("[data-user-email]").attr("data-user-email")
            });


        }

        
    }



})();
