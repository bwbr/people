System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddAtividades;
    return {
        setters: [],
        execute: function () {
            AddAtividades = class AddAtividades {
                constructor() {
                    this._atividades = [];
                }
                adiciona(atividade) {
                    this._atividades.push(atividade);
                }
                paraArray() {
                    return [].concat(this._atividades);
                }
            };
            exports_1("AddAtividades", AddAtividades);
        }
    };
});
