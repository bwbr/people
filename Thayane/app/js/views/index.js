System.register(["./AddFormacoesView", "./AddSkillsView", "./AddAtividadesView", "./View"], function (exports_1, context_1) {
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
            function (AddFormacoesView_1_1) {
                exportStar_1(AddFormacoesView_1_1);
            },
            function (AddSkillsView_1_1) {
                exportStar_1(AddSkillsView_1_1);
            },
            function (AddAtividadesView_1_1) {
                exportStar_1(AddAtividadesView_1_1);
            },
            function (View_1_1) {
                exportStar_1(View_1_1);
            }
        ],
        execute: function () {
        }
    };
});
