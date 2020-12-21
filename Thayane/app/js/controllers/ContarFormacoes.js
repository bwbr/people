System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ContarFormacoes;
    return {
        setters: [],
        execute: function () {
            ContarFormacoes = class ContarFormacoes {
                update() {
                    var filhosAFazer = $('#addAqui').children().length;
                    this._quantAFazer = filhosAFazer;
                    $('#quantAFazer').text(this._quantAFazer);
                    $('#span_aFazer').text(this._quantAFazer);
                    var filhosFazendo = $('#nav-link-kanban_fazendo').children().length;
                    this._quantFazendo = filhosFazendo;
                    $('#quantFazendo').text(this._quantFazendo);
                    $('#span_fazendo').text(this._quantFazendo);
                    var filhosFeitas = $('#nav-link-kanban_feitas').children().length;
                    this._quantFeitas = filhosFeitas;
                    $('#quantFeitas').text(this._quantFeitas);
                    $('#span_feitas').text(this._quantFeitas);
                }
            };
            exports_1("ContarFormacoes", ContarFormacoes);
        }
    };
});
