System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BotoesDeletarEditar;
    return {
        setters: [],
        execute: function () {
            BotoesDeletarEditar = class BotoesDeletarEditar {
                deletar() {
                    console.log("Deletando...");
                    this.pai = this.eu.parents('.formacoes');
                    this.pai.remove();
                }
                editar() {
                    console.log("Editando...");
                    this.pai = this.eu.parent();
                    this.tio = this.pai.siblings('.quebrarTexto');
                    this.tio.text('Oi');
                    this.biso = this.pai.parents('.card-header');
                    this.tioBiso = this.biso.siblings();
                    this.primo2 = this.tioBiso.children('.card-body');
                    this.primo2.text('Olá');
                }
            };
            exports_1("BotoesDeletarEditar", BotoesDeletarEditar);
        }
    };
});
