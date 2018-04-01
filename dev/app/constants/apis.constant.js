(function () {
    
    
    angular
        .module('mercedes-clube-ui')
        .constant('ApisConstant', {
            // BASE_URL : 'https://mercedesclube-hml-api.azurewebsites.net/',
            BASE_URL_INTEGRATION : 'https://mercedesclube-integracao.azurewebsites.net/',
            BASE_URL : 'https://mercedesclube-vld-api.azurewebsites.net/',
            // BASE_URL : 'http://localhost:61171/',
            QUERIES  : {
                LOGIN           : 'token',
                FORGOT_PASSWORD : 'usuario/esqueceuSenha',
                OFFICE          : 'usuario/funcoes/participante',
                FLEET_OFFICE    : 'usuario/funcoes/frota',
                OFFICINE        : 'usuario/funcoes/oficina',
                REGISTER        : 'participante',
                VALIDATION      : 'participante/validacaoCadastro/',
                STATES          : 'Endereco/uf',
                CITIES          : 'Endereco/Cidade/',
                MARITAL_STATE   : 'estadocivil',
                CEP             : 'Endereco/cep/',
                PERSONAL_DATA   : 'participante/dadosPessoais',
                INDICATION      : 'participante/indique',
                MODEL           : 'modelo',
                CATEGORY        : 'categoria',
                PROFILE         : 'usuario/perfil',
                PARTICIPANTS    : 'usuario/funcoes/frota',
                USER_DETAILS    : 'participante',
                BANNERS         : 'banner',
                NEWS            : 'noticia',
                SUBJECTS        : 'faleconosco/assunto',
                CONTACT         : 'faleconosco',
                FAQ             : 'faq',
                DEALERSHIP      : 'veiculo/agencias',
                CATALOG         : 'clubebeneficio'
            }
        });
})();