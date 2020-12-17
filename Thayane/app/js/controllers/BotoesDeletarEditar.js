System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BotoesDeletarEditar;
    return {
        setters: [],
        execute: function () {
            BotoesDeletarEditar = class BotoesDeletarEditar {
                constructor() {
                    this._btnDeletar = $('.iconeDeletar').parent();
                    this._btnEditar = $('.iconeEditar').parent();
                }
                deletar() {
                }
                editar() {
                }
            };
            exports_1("BotoesDeletarEditar", BotoesDeletarEditar);
        }
    };
});
