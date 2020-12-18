System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddSkill;
    return {
        setters: [],
        execute: function () {
            AddSkill = class AddSkill {
                constructor(skillTitulo, skillPorcentagem) {
                    this.skillTitulo = skillTitulo;
                    this.skillPorcentagem = skillPorcentagem;
                }
                get skillFalta() {
                    return 100 - this.skillPorcentagem;
                }
            };
            exports_1("AddSkill", AddSkill);
        }
    };
});
