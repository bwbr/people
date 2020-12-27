System.register(["./controllers/AtividadeController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AtividadeController_1, controller;
    return {
        setters: [
            function (AtividadeController_1_1) {
                AtividadeController_1 = AtividadeController_1_1;
            }
        ],
        execute: function () {
            controller = new AtividadeController_1.AtividadeController();
            controller.atualiza();
            $('#cards').submit(controller.adiciona.bind(controller));
            $('#clear_btn').click(controller.limpa.bind(controller));
            $('#cancel_btn').click(controller.limpa.bind(controller));
            $('#trash_all_btn').click(controller.clear_all.bind(controller));
        }
    };
});
