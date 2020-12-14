System.register(["./controllers/AddFormacaoController", "./controllers/MudarClasseResponsivo"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddFormacaoController_1, MudarClasseResponsivo_1, muda, controller;
    return {
        setters: [
            function (AddFormacaoController_1_1) {
                AddFormacaoController_1 = AddFormacaoController_1_1;
            },
            function (MudarClasseResponsivo_1_1) {
                MudarClasseResponsivo_1 = MudarClasseResponsivo_1_1;
            }
        ],
        execute: function () {
            muda = new MudarClasseResponsivo_1.MudarClasseResponsivo();
            $.when(window).then(() => muda.tamanho());
            $(window).resize(() => muda.tamanho());
            controller = new AddFormacaoController_1.AddFormacaoController();
            $('[data-form]').submit(controller.adiciona.bind(controller));
        }
    };
});
