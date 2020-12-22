System.register(["./AddAtividade", "./AddAtividades", "./AddFormacao", "./AddFormacoes", "./AddSkill", "./AddSkills", "./Kanban"], function (exports_1, context_1) {
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
            function (AddAtividade_1_1) {
                exportStar_1(AddAtividade_1_1);
            },
            function (AddAtividades_1_1) {
                exportStar_1(AddAtividades_1_1);
            },
            function (AddFormacao_1_1) {
                exportStar_1(AddFormacao_1_1);
            },
            function (AddFormacoes_1_1) {
                exportStar_1(AddFormacoes_1_1);
            },
            function (AddSkill_1_1) {
                exportStar_1(AddSkill_1_1);
            },
            function (AddSkills_1_1) {
                exportStar_1(AddSkills_1_1);
            },
            function (Kanban_1_1) {
                exportStar_1(Kanban_1_1);
            }
        ],
        execute: function () {
        }
    };
});
