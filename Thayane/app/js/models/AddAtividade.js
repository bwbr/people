System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddAtividade;
    return {
        setters: [],
        execute: function () {
            AddAtividade = class AddAtividade {
                constructor(_atividadeNome, _atividadeData) {
                    this._atividadeNome = _atividadeNome;
                    this._atividadeData = _atividadeData;
                }
                get atividadeNome() {
                    return this._atividadeNome;
                }
                get atividadeData() {
                    return this._atividadeData;
                }
            };
            exports_1("AddAtividade", AddAtividade);
        }
    };
});
