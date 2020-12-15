System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddSkill;
    return {
        setters: [],
        execute: function () {
            AddSkill = class AddSkill {
                constructor(_skillTitulo, _skillPorcentagem) {
                    this._skillTitulo = _skillTitulo;
                    this._skillPorcentagem = _skillPorcentagem;
                }
                get skillTitulo() {
                    return this._skillTitulo;
                }
                get skillPorcentagem() {
                    return this._skillPorcentagem;
                }
                get skillFalta() {
                    return 100 - this.skillPorcentagem;
                }
            };
            exports_1("AddSkill", AddSkill);
        }
    };
});
