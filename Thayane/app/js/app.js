System.register(["./controllers/AddFormacaoController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddFormacaoController_1, controller;
    return {
        setters: [
            function (AddFormacaoController_1_1) {
                AddFormacaoController_1 = AddFormacaoController_1_1;
            }
        ],
        execute: function () {
            controller = new AddFormacaoController_1.AddFormacaoController();
            $('[data-form]').submit(controller.adiciona.bind(controller));
        }
    };
});
