System.register(["./controllers/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, muda, controller;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            muda = new index_1.MudarClasseResponsivo();
            $.when(window).then(() => muda.tamanho());
            $(window).resize(() => muda.tamanho());
            controller = new index_1.AddFormacaoController();
            $('[data-form]').submit(controller.adiciona.bind(controller));
        }
    };
});
