System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Expandir;
    return {
        setters: [],
        execute: function () {
            Expandir = class Expandir {
                expandir() {
                    this.irmao = this.eu.siblings();
                    this.sobrinho = this.irmao.children();
                    if (this.sobrinho.hasClass('iconeDeletar')) {
                        this.sobrinho.removeClass('iconeDeletar').addClass('iconeEditar');
                        this.irmao.removeClass('btnDeletar').addClass('btnEditar');
                    }
                    else if (this.sobrinho.hasClass('iconeEditar')) {
                        this.sobrinho.removeClass('iconeEditar').addClass('iconeDeletar');
                        this.irmao.removeClass('btnEditar').addClass('btnDeletar');
                    }
                }
            };
            exports_1("Expandir", Expandir);
        }
    };
});
