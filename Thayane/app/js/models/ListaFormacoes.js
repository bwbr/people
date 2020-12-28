System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ListaFormacoes;
    return {
        setters: [],
        execute: function () {
            ListaFormacoes = class ListaFormacoes {
                constructor() {
                    this._formacoes = [];
                }
                adiciona(formacao) {
                    this._formacoes.push(formacao);
                }
                get formacoes() {
                    return [].concat(this._formacoes);
                }
                esvazia() {
                    this._formacoes = [];
                }
                get volumeTotal() {
                    return this._formacoes.reduce((total, n) => total + n.volume, 0.0);
                }
            };
            exports_1("ListaFormacoes", ListaFormacoes);
        }
    };
});
