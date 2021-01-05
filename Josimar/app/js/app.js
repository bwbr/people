System.register(["./controllers/AtividadeController", "./helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AtividadeController_1, index_1, controller, media, apigithub;
    return {
        setters: [
            function (AtividadeController_1_1) {
                AtividadeController_1 = AtividadeController_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            controller = new AtividadeController_1.AtividadeController();
            media = new index_1.Media();
            apigithub = new index_1.ApiGithub();
            $.when(window).then(() => media.layout());
            $(window).resize(() => media.layout());
            apigithub.github();
            controller.lista();
            controller.drag_and_drop();
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
                $("#nav-to-do").removeClass('active');
                $("#nav-in-progress").addClass('active');
            });
            $("#cardInProgress").on('click', '#next', function () {
                var id = $(this).attr('data-activity');
                controller.move(id, 'cardDone');
                $("#nav-in-progress").removeClass('active');
                $("#nav-done").addClass('active');
            });
            $("#cardDone").on('click', '#next', function () {
                var id = $(this).attr('data-activity');
                controller.move(id, 'cardToDo');
                $("#nav-done").removeClass('active');
                $("#nav-to-do").addClass('active');
            });
            $("#cardToDo").on('click', '#back', function () {
                var id = $(this).attr('data-activity');
                controller.move(id, 'cardDone');
                $("#nav-to-do").removeClass('active');
                $("#nav-done").addClass('active');
            });
            $("#cardInProgress").on('click', '#back', function () {
                var id = $(this).attr('data-activity');
                controller.move(id, 'cardToDo');
                $("#nav-in-progress").removeClass('active');
                $("#nav-to-do").addClass('active');
            });
            $("#cardDone").on('click', '#back', function () {
                var id = $(this).attr('data-activity');
                controller.move(id, 'cardInProgress');
                $("#nav-done").removeClass('active');
                $("#nav-in-progress").addClass('active');
            });
        }
    };
});
