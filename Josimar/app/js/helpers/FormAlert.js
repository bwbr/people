System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FormAlert;
    return {
        setters: [],
        execute: function () {
            FormAlert = class FormAlert {
                form_alert() {
                    $('#cards').submit(e => {
                        alerts(e);
                    });
                    function alerts(e) {
                        e.preventDefault();
                        $('[data-form]').removeClass('show');
                        $('[data-cards]').addClass('show');
                    }
                }
                removeAlert() {
                    if ($('#mensagemView .alert').hasClass('show') == true) {
                        setTimeout(function () {
                            $('#mensagemView .alert').removeClass('show');
                            $('#mensagemView .alert').addClass('hide');
                            $('#mensagemView').html('');
                        }, 4000);
                    }
                }
            };
            exports_1("FormAlert", FormAlert);
        }
    };
});
