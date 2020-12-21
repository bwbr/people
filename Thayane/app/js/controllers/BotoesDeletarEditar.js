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
                deletarSkill() {
                    console.log("Deletando...");
                    this.pai = this.eu.parent();
                    this.pai.remove();
                }
                editarSkill() {
                    console.log("Editando...");
                    this.pai = this.eu.parent();
                    this.pai.text('TS');
                    this.irmao = this.eu.siblings('.progress');
                    this.sobrinho = this.irmao.children('.bg-success');
                    this.sobrinho.css('width:50%');
                }
            };
            exports_1("BotoesDeletarEditar", BotoesDeletarEditar);
        }
    };
});
