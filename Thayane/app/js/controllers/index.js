System.register(["./AddFormacaoController", "./AddSkillController", "./MudarClasseResponsivo"], function (exports_1, context_1) {
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
            function (AddFormacaoController_1_1) {
                exportStar_1(AddFormacaoController_1_1);
            },
            function (AddSkillController_1_1) {
                exportStar_1(AddSkillController_1_1);
            },
            function (MudarClasseResponsivo_1_1) {
                exportStar_1(MudarClasseResponsivo_1_1);
            }
        ],
        execute: function () {
        }
    };
});
