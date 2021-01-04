System.register(["./Atividade", "./Atividades", "./Badges", "./Progressbar", "./DragAndDrop"], function (exports_1, context_1) {
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
            function (Atividade_1_1) {
                exportStar_1(Atividade_1_1);
            },
            function (Atividades_1_1) {
                exportStar_1(Atividades_1_1);
            },
            function (Badges_1_1) {
                exportStar_1(Badges_1_1);
            },
            function (Progressbar_1_1) {
                exportStar_1(Progressbar_1_1);
            },
            function (DragAndDrop_1_1) {
                exportStar_1(DragAndDrop_1_1);
            }
        ],
        execute: function () {
        }
    };
});
