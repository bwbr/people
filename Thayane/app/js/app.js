System.register(["./controllers/index", "./models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, muda, kabanboard, controllerFormacoes, controllerSkills, modal, contarFormacoes, editarDeletarKanban, expandir, mover;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
                index_2 = index_1_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            muda = new index_1.MudarClasseResponsivo();
            $.when(window).then(() => muda.tamanho());
            $(window).resize(() => muda.tamanho());
            kabanboard = new index_3.Kanban();
            controllerFormacoes = new index_1.AddFormacaoController(kabanboard);
            $('[data-form-formacao]').submit(controllerFormacoes.adiciona.bind(controllerFormacoes));
            controllerSkills = new index_1.AddSkillController();
            $('[data-form-skill]').submit(controllerSkills.adiciona.bind(controllerSkills));
            modal = new index_2.ModalController();
            $('#btn-modal').click(() => modal.esconderModal());
            contarFormacoes = new index_1.ContarFormacoes();
            editarDeletarKanban = new index_1.BotoesDeletarEditar();
            expandir = new index_1.Expandir();
            mover = new index_1.MoverKanban(kabanboard);
            $("#nav-link-kanban_afazer").on('click', '.btnMoverDireita', function () {
                mover.eu = $(this);
                console.log('teste somente botao btnMoverDireita');
                mover.moverAFazer();
            });
        }
    };
});
