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
                    this.eu = $(this);
                    console.log(this.eu);
                    this.pai = this.eu.parents('.formacoes');
                    this.pai.remove();
                    console.log(this.pai);
                }
                editar() {
                    console.log("Editando...");
                    this.eu = $(this);
                    console.log(this.eu);
                    this.pai = this.eu.parents('.formacoes');
                    this.pai.remove();
                    console.log(this.pai);
                }
            };
            exports_1("BotoesDeletarEditar", BotoesDeletarEditar);
        }
    };
});
