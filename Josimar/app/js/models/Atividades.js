System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Atividades;
    return {
        setters: [],
        execute: function () {
            Atividades = class Atividades {
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
            exports_1("Atividades", Atividades);
        }
    };
});
