(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('RegisterResumeController', RegisterResumeController);

    RegisterResumeController.$inject = [
        '$rootScope',
        'FeedService',
        'SendService'
    ];

    function RegisterResumeController($rootScope, FeedService, SendService) {
        var registerResume = this;
        var facebook = '';
        ////////////////
        registerResume.externalLogin = {};
        registerResume.form = {};
        registerResume.fields = {};
        registerResume.fields.news = true; //Marca flag padrão
        registerResume.passwordStrength = {};
        registerResume.office = [];
        registerResume.fleetOffice = [];
        registerResume.officine = [];
        registerResume.init = init;
        registerResume.officeValid = officeValid;
        registerResume.submit = submit;
        registerResume.loader = null;

        ////////////////

        function init() {
            setTimeout(window.init, 1000);
            loadDataOffice();
            loadOffice();
            checkCookie();
            $rootScope.checkPass = false;
        }

        var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{12,})");
        var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})");
        $rootScope.passwordStrength = {};
        $rootScope.passwordConfirmationStrength = {};

        $rootScope.analyzePassword = function (value) {
            /*if (strongRegex.test(value)) {
                $rootScope.checkPass = true;
                $rootScope.senhaForca = "senha forte";
                $rootScope.passwordStrength["border"] = "solid green";
            } else if (mediumRegex.test(value)) {
                $rootScope.checkPass = true;
                $rootScope.senhaForca = "senha média";
                $rootScope.passwordStrength["border"] = "solid orange";
            } else {
                $rootScope.checkPass = true;
                $rootScope.senhaForca = "senha fraca";
                $rootScope.passwordStrength["border"] = "solid red";
            }*/
        };

        $rootScope.analyzePasswordConfirmation = function (value) {
            /*if (strongRegex.test(value)) {
                $rootScope.checkPass = true;
                $rootScope.senhaConfirmacaoForca = "senha forte";
                $rootScope.passwordConfirmationStrength["border"] = "solid green";
            } else if (mediumRegex.test(value)) {
                $rootScope.checkPass = true;
                $rootScope.senhaConfirmacaoForca = "senha média";
                $rootScope.passwordConfirmationStrength["border"] = "solid orange";
            } else {
                $rootScope.checkPass = true;
                $rootScope.senhaConfirmacaoForca = "senha fraca";
                $rootScope.passwordConfirmationStrength ["border"] = "solid red";
            }*/
        };

        function loginSuccess() {

            fbwindow.close;
        }

        function officeValid() {
            if (!registerResume.office.length)
                return false;

            return (
                (registerResume.fields.office === registerResume.office[1].funcaoId) ||
                (registerResume.fields.office === registerResume.office[0].funcaoId && registerResume.fields.fleet) ||
                (registerResume.fields.office === registerResume.office[2].funcaoId && registerResume.fields.officine)
            );
        }

        function submit() {
            if (
                !registerResume.officeValid() ||
                registerResume.form.$invalid ||
                (registerResume.fields.office === registerResume.office[0].funcaoId && !registerResume.fields.companyCnpj) ||
                (registerResume.fields.office === registerResume.office[2].funcaoId && !registerResume.fields.companyCnpj) ||
                (registerResume.fields.password != registerResume.fields.passwordConfirmation) /*||
                ($rootScope.senhaForca != "senha forte") ||
                ($rootScope.senhaConfirmacaoForca != "senha forte")*/
            ) {
                var ul = document.getElementById("invalidFields");
                ul.innerHTML = "";
                if (typeof registerResume.form.$error.required != "undefined") {
                    registerResume.form.$error.required.forEach(function (error) {
                        var li = document.createElement("li");
                        li.appendChild(document.createTextNode(error.$$attr.placeholder));
                        ul.appendChild(li);
                    });
                }
                if (typeof registerResume.form.$error.mask != "undefined") {
                    registerResume.form.$error.mask.forEach(function (error) {
                        var li = document.createElement("li");
                        li.appendChild(document.createTextNode(error.$$attr.placeholder));
                        ul.appendChild(li);
                    });
                }
                
            
                gtag('event', 'pageview', {
                    'event_category': 'profile',
                    'event_action': 'error'
                });
                return $('#modalInvalido').modal('show');
            }

            //Liga o Loader
            registerResume.loader = null;

            /*TRATAMENTO DOS CAMPOS*/
            if (registerResume.fields.office === registerResume.office[0].funcaoId) {
                registerResume.fields.funcaoParticipanteDetalhe = registerResume.fields.fleet;
            }
            if (registerResume.fields.office === registerResume.office[2].funcaoId) {
                registerResume.fields.funcaoParticipanteDetalhe = registerResume.fields.officine;
            }
            if (registerResume.fields.companyCnpj) {
                registerResume.fields.documentoEmpresa = registerResume.fields.companyCnpj.replace(/[^\w\s]/gi, '');
            }

            var params = {
                facebookId: registerResume.fields.facebookId,
                funcaoParticipante: registerResume.fields.office,
                funcaoParticipanteDetalhe: registerResume.fields.funcaoParticipanteDetalhe,
                senha: registerResume.fields.password,
                confirmacaoSenha: registerResume.fields.passwordConfirmation,
                documentoParticipante: registerResume.fields.identification.replace(/[^\w\s]/gi, ''),
                documentoEmpresa: registerResume.fields.documentoEmpresa,
                email: registerResume.fields.email,
                nome: registerResume.fields.name,
                telefone: registerResume.fields.phone,
                facebookId: registerResume.fields.facebookId,
                googleId: '',
                receberNovidades: registerResume.fields.news || false,
                termoAceite: registerResume.fields.terms || false,
                meioConfirmacao: 'EMAIL'
            };
            SendService.register(params)
                .then(registerSuccess);
        }

        function registerSuccess(response) {
            gtag('event', 'pageview', {
                'event_category': 'register',
                'event_action': 'success',
                'event_label': response
            });

            if (response === 'Usuario criado com sucesso') {
                $('#modalCadastro2').modal('show');
            } else{
                registerResume.loader = true;
            }
        }

        function loadDataOffice() {
            FeedService.registerOffice()
                .then(dataOfficeSuccess);
        }

        function dataOfficeSuccess(response) {
            registerResume.office = response;
            registerResume.loader = true;
            
            FeedService.registerFleetOffice()
                .then(fleetOfficeSuccess);
        }

        function fleetOfficeSuccess(response) {
            registerResume.fleetOffice = response;
        }

        function loadOffice() {
            FeedService.officine()
                .then(officineSuccess);
        }

        function officineSuccess(response) {
            registerResume.officine = response;
        }

        function checkCookie() {
            var facebookId = getCookie('id');
            // console.log(facebookId);                 

            if (facebookId != "") {
                registerResume.fields.checkFb = false;
                registerResume.fields.facebookId = getCookie('id');
                registerResume.fields.name = getCookie('name');
                registerResume.fields.email = getCookie('email');
                registerResume.fields.password = 'z5#Kp7#Ru7#C';
                registerResume.fields.passwordConfirmation = 'z5#Kp7#Ru7#C';

                // console.log("Olá  " + name);

            } else {
                registerResume.fields.checkFb = true;
                // setCookie('id', '123456789');
                // setCookie('name', 'carlos ribeiro');
                // setCookie('email', 'carlos.ribeiro@devpartner.com.br');
            }
        }

        function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for (var i = 0; i < ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }

        function setCookie(cname, cvalue, exdays) {
            var d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
        }
    }
})();