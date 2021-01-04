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
            controller.lista();
            $('#cards').submit(controller.adiciona.bind(controller));
            $('#clear_btn').click(controller.limpa.bind(controller));
            $('#cancel_btn').click(controller.limpa.bind(controller));
            $('#clear_all_btn').click(controller.clear_all.bind(controller));
            $("#cardToDo").on('click', '#trash_btn', function () {
                controller.deleta($(this).attr('data-activity'));
            });
            $("#cardInProgress").on('click', '#trash_btn', function () {
                controller.deleta($(this).attr('data-activity'));
            });
            $("#cardDone").on('click', '#trash_btn', function () {
                controller.deleta($(this).attr('data-activity'));
            });
            $("#cardToDo").on('click', '#next', function () {
                var id = $(this).attr('data-activity');
                controller.move(id, 'cardInProgress');
            });
            $("#cardInProgress").on('click', '#next', function () {
                var id = $(this).attr('data-activity');
                controller.move(id, 'cardDone');
            });
            $("#cardDone").on('click', '#next', function () {
                var id = $(this).attr('data-activity');
                controller.move(id, 'cardInToDo');
            });
            $("#cardToDo").on('click', '#back', function () {
                var id = $(this).attr('data-activity');
                controller.move(id, 'cardDone');
            });
            $("#cardInProgress").on('click', '#back', function () {
                var id = $(this).attr('data-activity');
                controller.move(id, 'cardToDo');
            });
            $("#cardDone").on('click', '#back', function () {
                var id = $(this).attr('data-activity');
                controller.move(id, 'cardInProgress');
            });
        }
    };
});
