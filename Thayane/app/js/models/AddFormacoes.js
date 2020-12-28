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
                removeAFazer(formacao) {
                    console.log("Removendo...");
                    const index = this._formacoes.indexOf(formacao, 0);
                    if (index > -1)
                        this._formacoes.splice(index, 1);
                }
                removeFazendo(formacao) {
                    console.log("Removendo...");
                    const index = this._formacoes.indexOf(formacao, 0);
                    if (index > -1)
                        this._formacoes.splice(index, 1);
                }
                removeFeitas(formacao) {
                    console.log("Removendo...");
                    const index = this._formacoes.indexOf(formacao, 0);
                    if (index > -1)
                        this._formacoes.splice(index, 1);
                }
                paraArray() {
                    return [].concat(this._formacoes);
                }
                pop(title) {
                    let card = this._formacoes.find(card => card.numD === title);
                    return card;
                }
            };
            exports_1("AddFormacoes", AddFormacoes);
        }
    };
});
