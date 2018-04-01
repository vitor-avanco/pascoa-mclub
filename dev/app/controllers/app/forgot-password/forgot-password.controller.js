(function () {
    

    angular
        .module('mercedes-clube-ui')
        .controller('ForgotPasswordController', ForgotPasswordController);

    ForgotPasswordController.$inject = [
        'SendService'
    ];

    function ForgotPasswordController (SendService) {
        var forgotPassword = this;
        ////////////////
        
        forgotPassword.form           = {};
        forgotPassword.identification = undefined;
        forgotPassword.email          = undefined;
        forgotPassword.init           = init;
        forgotPassword.submit         = submit
        forgotPassword.hideFailed     = hideFailed;
        ////////////////

        function submit () {
            var params = { documento : forgotPassword.identification.replace(/[./-]/g, ''), email: forgotPassword.email };

            SendService.forgotPassword(params)
                .then(forgotPasswordSuccess);
        }

        function forgotPasswordSuccess (response) {
            if (response === 'Senha alterada com sucesso') {
                $('#modalSenha').modal('show');
                return setTimeout(fieldReset, 3000);
            }

            $('#modalLoginFailed').modal('show');
        }

        function hideFailed () {
            $('#modalSenhaFalha').modal('hide');
        }

        function fieldReset () {
            $('#modalSenha').modal('hide');
        }
    }
})();
