System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddAtividade;
    return {
        setters: [],
        execute: function () {
            AddAtividade = class AddAtividade {
                constructor(atividadeNome, atividadeData) {
                    this.atividadeNome = atividadeNome;
                    this.atividadeData = atividadeData;
                }
            };
            exports_1("AddAtividade", AddAtividade);
        }
    };
});
