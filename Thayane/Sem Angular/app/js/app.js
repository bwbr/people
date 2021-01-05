System.register(["./controllers/index", "./views/index", "./models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, muda, kabanboard, skillboard, add, controllerFormacoes, controllerSkills, controllerAtividades, modal, deletar, editar, expandir, mover, contarFormacoes, _addKanbanView, observaAFazer, observaFazendo, observaFeitas;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
                index_2 = index_1_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }
        ],
        execute: function () {
            muda = new index_1.MudarClasseResponsivo();
            $.when(window).then(() => muda.tamanho());
            $(window).resize(() => muda.tamanho());
            kabanboard = new index_4.Kanban();
            skillboard = new index_4.AddSkills();
            add = new index_4.AddFormacao('', '', 0, 'expandir0');
            controllerFormacoes = new index_1.AddFormacaoController(kabanboard, add);
            $('[data-form-formacao]').submit(controllerFormacoes.adiciona.bind(controllerFormacoes));
            controllerSkills = new index_1.AddSkillController();
            $('[data-form-skill]').submit(controllerSkills.adiciona.bind(controllerSkills));
            controllerAtividades = new index_1.AddAtividadesController();
            $('[data-form-skill]').submit(controllerAtividades.adicionouSkill.bind(controllerAtividades));
            $('[data-form-formacao]').submit(controllerAtividades.adicionouFormacao.bind(controllerAtividades));
            modal = new index_2.ModalController();
            $('#btn-modal').click(() => modal.esconderModal());
            deletar = new index_1.Deletar(kabanboard);
            $("#nav-link-kanban_aFazer").on('click', '.btnDeletar', function () {
                deletar.eu = $(this);
                deletar.deletarAFazer('formacoesAFazer');
                controllerAtividades.removeuFormacao();
            });
            $("#nav-link-kanban_fazendo").on('click', '.btnDeletar', function () {
                deletar.eu = $(this);
                deletar.deletarFazendo('formacoesFazendo');
                controllerAtividades.removeuFormacao();
            });
            $("#nav-link-kanban_feitas").on('click', '.btnDeletar', function () {
                deletar.eu = $(this);
                deletar.deletarFeitas('formacoesFeitas');
                controllerAtividades.removeuFormacao();
            });
            editar = new index_1.Editar(kabanboard, skillboard);
            $("#nav-link-kanban_aFazer").on('click', '.salvarEditou', function () {
                editar.eu = $(this);
                editar.editarAFazer('formacoesAFazer');
                controllerAtividades.editouFormacao();
            });
            $("#nav-link-kanban_fazendo").on('click', '.salvarEditou', function () {
                editar.eu = $(this);
                editar.editarFazendo('formacoesFazendo');
                controllerAtividades.editouFormacao();
            });
            $("#nav-link-kanban_feitas").on('click', '.salvarEditou', function () {
                editar.eu = $(this);
                editar.editarFeitas('formacoesFeitas');
                controllerAtividades.editouFormacao();
            });
            expandir = new index_1.Expandir();
            $("#nav-link-kanban_aFazer").on('click', '.btnExpandir', function () {
                expandir.eu = $(this);
                expandir.expandir();
            });
            $("#nav-link-kanban_fazendo").on('click', '.btnExpandir', function () {
                expandir.eu = $(this);
                expandir.expandir();
            });
            $("#nav-link-kanban_feitas").on('click', '.btnExpandir', function () {
                expandir.eu = $(this);
                expandir.expandir();
            });
            mover = new index_1.MoverKanban(kabanboard);
            $("#nav-link-kanban_aFazer").on('click', '.btnMoverDireita', function () {
                mover.eu = $(this);
                mover.moverAFazerFazendo('formacoesAFazer');
            });
            $("#nav-link-kanban_aFazer").on('click', '.btnMoverEsquerda', function () {
                mover.eu = $(this);
                mover.moverAFazerFeitas('formacoesAFazer');
            });
            $("#nav-link-kanban_fazendo").on('click', '.btnMoverDireita', function () {
                mover.eu = $(this);
                mover.moverFazendoFeitas('formacoesFazendo');
            });
            $("#nav-link-kanban_fazendo").on('click', '.btnMoverEsquerda', function () {
                mover.eu = $(this);
                mover.moverFazendoAFazer('formacoesFazendo');
            });
            $("#nav-link-kanban_feitas").on('click', '.btnMoverDireita', function () {
                mover.eu = $(this);
                mover.moverFeitasAFazer('formacoesFeitas');
            });
            $("#nav-link-kanban_feitas").on('click', '.btnMoverEsquerda', function () {
                mover.eu = $(this);
                mover.moverFeitasFazendo('formacoesFeitas');
            });
            contarFormacoes = new index_1.ContarFormacoes();
            _addKanbanView = new index_3.KanbanView('');
            observaAFazer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    contarFormacoes.update();
                });
            });
            observaAFazer.observe(document.querySelector("#nav-link-kanban_aFazer"), { childList: true });
            observaFazendo = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    contarFormacoes.update();
                });
            });
            observaFazendo.observe(document.querySelector("#nav-link-kanban_fazendo"), { childList: true });
            observaFeitas = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    contarFormacoes.update();
                });
            });
            observaFeitas.observe(document.querySelector("#nav-link-kanban_feitas"), { childList: true });
            $("#novaSkill").on('click', '.btnDeletarSkill', function () {
                deletar.eu = $(this);
                deletar.deletarSkill('skills');
                controllerAtividades.removeuSkill();
            });
            $("#novaSkill").on('click', '.salvarSkill', function () {
                editar.eu = $(this);
                editar.editarSkill('skills');
                controllerAtividades.editouSkill();
            });
        }
    };
});
