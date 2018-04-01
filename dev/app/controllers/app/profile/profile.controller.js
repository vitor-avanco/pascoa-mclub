(function () {


    angular
        .module('mercedes-clube-ui')
        .controller('ProfileController', ProfileController);

    ProfileController.$inject = [
        '$http',
        '$scope',
        '$state',
        '$timeout',
        '$rootScope',
        'SendService',
        'Upload',
        'ApisConstant'
    ];


    function ProfileController($http, $scope, $state, $timeout, $rootScope, SendService, Upload, ApisConstant) {
        var profile = this;
        ////////////////
        profile.form = {};
        profile.formVeiculo = {};
        profile.formSenha = {};
        profile.fields = {};
        profile.init = init;
        profile.submit = submit
        profile.getCidade = getCidade;
        profile.editCadastro = editCadastro;
        profile.editVeiculo = editVeiculo;
        profile.deleteVeiculo = deleteVeiculo;
        profile.deleteVeiculoCall = deleteVeiculoCall;
        profile.editSenha = editSenha;
        profile.endereco = {};
        profile.dadosPessoais = {};
        profile.dadosVeiculo = {};
        profile.veiculos = {};
        profile.dadosSenha = {};

        $scope.endereco = {};
        $scope.veiculo = {};
        ////////////////

        //upload de bunners
        $scope.uploadFiles = function (files, errFiles) {

            angular.forEach(files, function (file) {
                var ext = file.name.substr(file.name.lastIndexOf('.') + 1);
                if (verifyFileExt(ext)) {
                    $scope.files = files;
                    $scope.errFiles = errFiles;

                    file.upload = Upload.upload({
                        url: ApisConstant.BASE_URL + 'veiculo/uploadDocumento',
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': 'bearer ' + $rootScope.safe.token
                        },
                        data: {
                            file: file
                        }
                    });

                    file.upload.then(function (response) {
                        $timeout(function () {
                            file.result = response.data;

                            //delete $scope.files;
                            //$scope.newBannerOrdem = '';
                            profile.dadosVeiculo.urlFile = response.data.url;
                            //carregarFotoPefil();
                        });
                    }, function (response) {
                        if (response.status > 0)
                            $scope.errorMsg = response.status + ': ' + response.data;

                        //sysServicos.sendErrorMsg(response.status, response.statusText, response.url, response.data.message);

                    }, function (evt) {
                        file.progress = Math.min(100, parseInt(100.0 * evt.loaded / evt.total));
                    });
                } else {
                    //sysServicos.sendWarnMsg('O arquivo deve ser em formato de imagem (JPG ou PNG).');
                }
                //verifica qual a ext do arquivo de upload
                function verifyFileExt(ext) {
                    var extArray = ['jpg', 'png'];

                    for (var n = 0; n < extArray.length; n++) {
                        if (extArray[n].toUpperCase() == ext.toUpperCase()) {
                            return true;
                        }
                    }
                    return false;
                }
            });



        };

        // carrega drop cidades
        function getCidade(ufId) {
            var promise = $http.get(ApisConstant.BASE_URL + "endereco/cidade/" + ufId);
            promise.then(
                function (ret) {
                    $scope.endereco.cidades = ret.data;
                },
                function (err) {
                    //sysServicos.sendErrorMsg(err.status, err.statusText, err.config.url, err.data.mensagem);
                }
            );
        };
        //carregamento por cep
        $scope.loadCep = function (cep) {
            if (cep != undefined && cep != "") {
                //corrige formato de cep
                if (cep.length >= 7) {
                    if (cep != null) {
                        var strCep = cep.toString();
                        cep = strCep.substr(0, 5) + "-" + strCep.substr(5, 3);
                    }
                    if (cep != undefined) {
                        var promise = $http.get(ApisConstant.BASE_URL + "endereco/cep/" + cep);
                        promise.then(
                            function (ret) {
                                profile.dadosPessoais.logradouro = ret.data.logradouro;
                                profile.dadosPessoais.bairro = ret.data.bairro;
                                profile.endereco.uf = ret.data.uf.ufId;
                                getCidade(ret.data.uf.ufId);
                                $timeout(function () {
                                    profile.endereco.cidade = ret.data.cidade.cidadeId;
                                }, 500);

                                /*
                                $scope.endereco.uf = ret.data.uf.sigla;
                                $scope.loadCity(ret.data.uf.sigla);
  
                                $scope.endereco.cidade = ret.data.cidade.cidadeId.toString();
  
                                $scope.cadastro.bairro = ret.data.bairro;
                                $scope.cadastro.logradouro = ret.data.logradouro;*/
                            },
                            function (err) {
                                if (err.status == 500) {
                                    //sysServicos.sendErrorMsg(400, err.statusText, err.config.url, 'Cep inv�lido');
                                } else {
                                    //sysServicos.sendErrorMsg(err.status, err.statusText, err.config.url, err.data.mensagem);
                                }
                            }
                        );
                    }
                }
            }
        };

        $scope.dataValidate = function () {
            var birthdate = profile.dadosPessoais.dataNascimento;

            if (birthdate && birthdate.length >= 7)
                return parseInt(birthdate.substr(6, 4)) > 1900;
        };

        function editCadastro(firstFlux) {
            if (profile.form.$invalid || !$scope.dataValidate()) {
                var ul = document.getElementById("invalidFields");
                ul.innerHTML = "";
                profile.form.$error.required.forEach(function (error) {
                    var li = document.createElement("li");
                    li.appendChild(document.createTextNode(error.$$attr.placeholder));
                    ul.appendChild(li);
                });

                
            
                gtag('event', 'pageview', {
                    'event_category': 'profile',
                    'event_action': 'error'
                });

                return $('#modalInvalido').modal('show');
            }


            var objEnvio = {};
            //objEnvio.veiculo = {}
            objEnvio.participanteId = profile.fields.participanteId;

            objEnvio.cpf = profile.fields.identification;
            objEnvio.nome = profile.fields.name;
            objEnvio.email = profile.fields.email;
            objEnvio.tel = profile.fields.phone;
            objEnvio.cnpj = profile.fields.companyCNPJ;
            objEnvio.receberNovidades = profile.fields.news;
            objEnvio.termoAceite = true; //sempre o termo é verdade

            objEnvio.cep = profile.dadosPessoais.cep;
            objEnvio.logradouro = profile.dadosPessoais.logradouro;
            objEnvio.numero = profile.dadosPessoais.numero;
            objEnvio.complemento = profile.dadosPessoais.complemento;
            objEnvio.bairro = profile.dadosPessoais.bairro;
            objEnvio.cidadeId = profile.endereco.cidade;
            objEnvio.ufId = profile.endereco.uf;
            objEnvio.razaoSocial = profile.dadosPessoais.razaoSocial;
            objEnvio.nomeFantasia = profile.dadosPessoais.nomeFantasia;
            objEnvio.sexo = profile.dadosPessoais.sexo;
            objEnvio.estadoCivil = profile.dadosPessoais.estadoCivil;
            objEnvio.DataNascimento = profile.dadosPessoais.dataNascimento;

            //objEnvio.veiculo.categoriaId = profile.dadosVeiculo.categoria;
            //objEnvio.veiculo.modeloId = profile.dadosVeiculo.modelo;
            //objEnvio.veiculo.ano = profile.dadosVeiculo.ano;
            //objEnvio.veiculo.placa = profile.dadosVeiculo.placa;
            //objEnvio.veiculo.chassi = profile.dadosVeiculo.chassi;
            //objEnvio.veiculo.arquivo = profile.dadosVeiculo.urlFile;

            /**/
            var promise = $http({
                method: 'PUT',
                url: ApisConstant.BASE_URL + "participante/editar",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + $rootScope.safe.token
                },
                data: objEnvio
            });
            promise.then(
                function (ret) {
                    $('#modalCadastroAlterado').modal('show');

                    if (!firstFlux)
                        return (profile.firstFlux = true);
                    //$scope.endereco.cidades = ret.data;
                },
                function (err) {
                    //sysServicos.sendErrorMsg(err.status, err.statusText, err.config.url, err.data.mensagem);
                }

            );

        };

        function deleteVeiculoCall(veiculoId) {
            $scope.veiculoIdExcluir = veiculoId;
            return $('#modalExcluirVeiculo').modal('show');
        }

        function deleteVeiculo() {
            var promise = $http({
                method: 'PUT',
                url: ApisConstant.BASE_URL + "veiculo/" + $scope.veiculoIdExcluir,
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + $rootScope.safe.token
                }
            });
            promise.then(
                function (ret) {
                    init();
                },
                function (err) {
                    //sysServicos.sendErrorMsg(err.status, err.statusText, err.config.url, err.data.mensagem);
                }
            );
        };

        function editVeiculo() {
            if (profile.formVeiculo.$invalid || !profile.dadosVeiculo.urlFile) {

                var ul = document.getElementById("invalidFields");
                ul.innerHTML = "";

                if (typeof profile.formVeiculo.$error.required != "undefined") {
                    profile.formVeiculo.$error.required.forEach(function (error) {
                        var li = document.createElement("li");
                        li.appendChild(document.createTextNode(error.$$attr.placeholder));
                        ul.appendChild(li);
                    });
                }
                if (typeof profile.formVeiculo.$error.mask != "undefined") {
                    profile.formVeiculo.$error.mask.forEach(function (error) {
                        var li = document.createElement("li");
                        li.appendChild(document.createTextNode(error.$$attr.placeholder));
                        ul.appendChild(li);
                    });
                }
                if (!profile.dadosVeiculo.urlFile) {
                    var li = document.createElement("li");
                    li.appendChild(document.createTextNode("Imagem do DUT"));
                    ul.appendChild(li);
                }
                
            
                gtag('event', 'pageview', {
                    'event_category': 'profile',
                    'event_action': 'error'
                });
                return $('#modalInvalido').modal('show');
            }

            var objEnvio = {};
            //objEnvio.veiculo = {}
            objEnvio.participanteId = profile.fields.participanteId;

            objEnvio.categoriaId = profile.dadosVeiculo.categoria;
            objEnvio.modeloId = profile.dadosVeiculo.modelo;
            objEnvio.ano = profile.dadosVeiculo.ano;
            objEnvio.placa = profile.dadosVeiculo.placa;
            objEnvio.chassi = profile.dadosVeiculo.chassi;
            objEnvio.arquivo = profile.dadosVeiculo.urlFile;

            /**/
            var promise = $http({
                method: 'POST',
                url: ApisConstant.BASE_URL + "veiculo",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + $rootScope.safe.token
                },
                data: objEnvio
            });
            promise.then(
                function (ret) {
                    $('#modalCadastroVeiculo').modal('show');
                    profile.firstFluxBtnFinalizar = true;
                    init();
                },
                function (err) {
                    //sysServicos.sendErrorMsg(err.status, err.statusText, err.config.url, err.data.Message);
                }
            );

        };

        function editSenha() {
            if (profile.formSenha.$invalid || (profile.dadosSenha.nova !== profile.dadosSenha.conf)) {
                return $('#modalInvalido').modal('show');
                
            
                gtag('event', 'pageview', {
                    'event_category': 'profile',
                    'event_action': 'error'
                });
            }

            var objEnvio = {};
            objEnvio.participanteId = profile.fields.participanteId;
            objEnvio.senha = profile.dadosSenha.nova;

            var promise = $http({
                method: 'PUT',
                url: ApisConstant.BASE_URL + "participante/editar",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + $rootScope.safe.token
                },
                data: objEnvio
            });
            promise.then(
                function (ret) {
                    $('#modalCadastroAlterado').modal('show');
                    //$scope.endereco.cidades = ret.data;
                },
                function (err) {
                    //sysServicos.sendErrorMsg(err.status, err.statusText, err.config.url, err.data.mensagem);
                }
            );

        };

        //if (!$rootScope.safe.token.length)
        //    history.back();

        function init() {
            setTimeout(window.init);
            //profile.fields.identification = $rootScope.safe.userResume.documentoParticipante;
            //profile.fields.name = $rootScope.safe.userResume.nome;
            //profile.fields.email = $rootScope.safe.userResume.email;
            //profile.fields.phone = $rootScope.safe.userResume.telefone;
            //profile.fields.companyCNPJ = $rootScope.safe.userResume.documentoEmpresa;
            //profile.fields.news = $rootScope.safe.userResume.receberNovidades;

            //Limpa caixa de alerta
            var ul = document.getElementById("invalidFields");
            ul.innerHTML = "";

            // carrega drop de estados
            var promise = $http.get(ApisConstant.BASE_URL + "endereco/uf");
            promise.then(
                function (ret) {
                    $scope.endereco.ufs = ret.data;
                },
                function (err) {
                    //sysServicos.sendErrorMsg(err.status,err.statusText,err.config.url,err.data.mensagem);
                }
            );

            // carrega drop categoria do ve�culo
            /*
            var promise = $http({
                method:'GET',
                url: ApisConstant.BASE_URL + "categoria",
                headers: {
                    'Content-Type'  : 'application/json',
                    'Authorization' : 'bearer ' + $rootScope.safe.token
                }
            });
            promise.then(
              function (ret) {
                  $scope.veiculo.categorias = ret.data;
              },
              function (err) {
                  //sysServicos.sendErrorMsg(err.status,err.statusText,err.config.url,err.data.mensagem);
              }
            );
            // carrega drop categoria de modelo
            var promise = $http({
                method:'GET',
                url: ApisConstant.BASE_URL + "modelo",
                headers: {
                    'Content-Type'  : 'application/json',
                    'Authorization' : 'bearer ' + $rootScope.safe.token
                }
            });
            promise.then(
              function (ret) {
                  $scope.veiculo.modelos = ret.data;
              },
              function (err) {
                  //sysServicos.sendErrorMsg(err.status,err.statusText,err.config.url,err.data.mensagem);
              }
            );
            */
            $scope.dropCategoria = [{
                'value': 1,
                'text': 'Categoria 1'
            },
            {
                'value': 2,
                'text': 'Categoria 2'
            }
            ];

            $scope.dropModelo = [{
                'value': 1,
                'text': 'Modelo 1 C1',
                'item': 1
            },
            {
                'value': 2,
                'text': 'Modelo 1 C2',
                'item': 2
            }
            ];



            // carrega infos completas do participante
            /**/
            var promise = $http({
                method: 'GET',
                url: ApisConstant.BASE_URL + "participante",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'bearer ' + $rootScope.safe.token
                }
            });
            promise.then(
                function (ret) {
                    //profile.veiculo.modelos = ret.data;
                    getCidade(ret.data.ufId);

                    profile.fields.participanteId = ret.data.participanteId;
                    profile.veiculos = ret.data.Veiculos;

                    profile.fields.identification = ret.data.documentoParticipante;
                    profile.fields.name = ret.data.nome;
                    profile.fields.email = ret.data.email;
                    profile.fields.phone = ret.data.telefone;
                    profile.fields.companyCNPJ = ret.data.documentoEmpresa;
                    profile.fields.news = ret.data.receberNovidades;

                    profile.dadosPessoais.cep = ret.data.cep;
                    profile.dadosPessoais.logradouro = ret.data.logradouro;
                    profile.dadosPessoais.numero = ret.data.numero;
                    profile.dadosPessoais.complemento = ret.data.complemento;
                    profile.dadosPessoais.bairro = ret.data.bairro;
                    profile.endereco.uf = ret.data.ufId ? ret.data.ufId.toString() : '';
                    profile.endereco.cidade = ret.data.cidadeId ? ret.data.cidadeId.toString() : '';
                    profile.dadosPessoais.razaoSocial = ret.data.razaoSocial;
                    profile.dadosPessoais.nomeFantasia = ret.data.nomeFantasia;
                    profile.dadosPessoais.sexo = ret.data.sexo;
                    profile.dadosPessoais.estadoCivil = ret.data.estadoCivil ? ret.data.estadoCivil.toString() : '';
                    profile.dadosPessoais.dataNascimento = ret.data.DataNascimento;

                    if (profile.dadosPessoais.dataNascimento != null) {
                        var strDataNasc = profile.dadosPessoais.dataNascimento.toString();
                        profile.dadosPessoais.dataNascimento = strDataNasc.substr(8, 2) + '/' + strDataNasc.substr(5, 2) + '/' + strDataNasc.substr(0, 4);
                    };

                    //profile.veiculo.categoria = ret.data;
                    //profile.veiculo.modelo = ret.data;
                    //profile.veiculo.ano = ret.data;
                    //profile.dadosPessoais.dataNascimento = ret.data;
                    //profile.veiculo.chassi = ret.data;


                },
                function (err) {

                }
            );

        }


        // function buttonDisabled () {
        //     return (
        //         registerResume.form.$invalid      ||
        //         !registerResume.fields.activation ||
        //         !registerResume.fields.office     ||
        //         (registerResume.fields.office === 1 && !registerResume.fields.fleet) ||
        //         (registerResume.fields.password !== registerResume.fields.passwordConfirmation)
        //     );
        // }

        function submit() {
            var params = {
                documentoParticipante: profile.fields.identification,
                nome: profile.fields.name,
                email: profile.fields.email,
                telefone: profile.fields.phone,
                documentoEmpresa: profile.fields.companyCnpj,
                receberNovidades: profile.fields.news || false
            };

            SendService.register(params)
                .then(registerSuccess);
        }

        function registerSuccess() {
            
            
            gtag('event', 'pageview', {
                'event_category': 'register',
                'event_action': 'success'
            });            
            
            $('#modalCadastro2').modal('show');
        }

        $scope.goToHome = function () {
            if ($rootScope.safe.userResume.realizouPrimeiroAcesso)
                $state.go('app.home');
        };
    }
})();
