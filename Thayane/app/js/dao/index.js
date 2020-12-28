System.register(["./Dao", "./FormacaoDaoAFazer", "./FormacaoDaoFazendo", "./FormacaoDaoFeitas", "./SkillDao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for (var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters: [
            function (Dao_1_1) {
                exportStar_1(Dao_1_1);
            },
            function (FormacaoDaoAFazer_1_1) {
                exportStar_1(FormacaoDaoAFazer_1_1);
            },
            function (FormacaoDaoFazendo_1_1) {
                exportStar_1(FormacaoDaoFazendo_1_1);
            },
            function (FormacaoDaoFeitas_1_1) {
                exportStar_1(FormacaoDaoFeitas_1_1);
            },
            function (SkillDao_1_1) {
                exportStar_1(SkillDao_1_1);
            }
        ],
        execute: function () {
        }
    };
});
