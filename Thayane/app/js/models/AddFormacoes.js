System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddFormacoes;
    return {
        setters: [],
        execute: function () {
            AddFormacoes = class AddFormacoes {
                constructor() {
                    this._formacoes = [];
                }
                adiciona(formacao) {
                    this._formacoes.push(formacao);
                }
                paraArray() {
                    return [].concat(this._formacoes);
                }
                pop(title) {
                    let card = this._formacoes.find(card => card.formacaoTitulo === title);
                    return card;
                }
            };
            exports_1("AddFormacoes", AddFormacoes);
        }
    };
});
