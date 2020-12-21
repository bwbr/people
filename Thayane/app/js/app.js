System.register(["./controllers/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, muda, controllerFormacoes, controllerSkills, modal, contarFormacoes, editarDeletarKanban, expandir, mover, observaAFazer, observaFazendo, observaFeitas, observador;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
                index_2 = index_1_1;
            }
        ],
        execute: function () {
            muda = new index_1.MudarClasseResponsivo();
            $.when(window).then(() => muda.tamanho());
            $(window).resize(() => muda.tamanho());
            controllerFormacoes = new index_1.AddFormacaoController();
            $('[data-form-formacao]').submit(controllerFormacoes.adiciona.bind(controllerFormacoes));
            controllerSkills = new index_1.AddSkillController();
            $('[data-form-skill]').submit(controllerSkills.adiciona.bind(controllerSkills));
            modal = new index_2.ModalController();
            $('#btn-modal').click(() => modal.esconderModal());
            contarFormacoes = new index_1.ContarFormacoes();
            editarDeletarKanban = new index_1.BotoesDeletarEditar();
            expandir = new index_1.Expandir();
            mover = new index_1.MoverKanban();
            observaAFazer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    $("#addAqui").find(".btnExpandir").click(function () {
                        expandir.eu = $(this);
                        expandir.expandir();
                    });
                    $("#addAqui").find(".btnDeletar").click(function () {
                        editarDeletarKanban.eu = $(this);
                        if (editarDeletarKanban.eu.hasClass('btnDeletar')) {
                            editarDeletarKanban.deletar();
                        }
                        else if (editarDeletarKanban.eu.hasClass('btnEditar')) {
                            editarDeletarKanban.editar();
                        }
                    });
                    $("#addAqui").find(".btnMoverDireita").click(function () {
                        mover.eu = $(this);
                        mover.moverFazendo();
                    });
                    $("#addAqui").find(".btnMoverEsquerda").click(function () {
                        mover.eu = $(this);
                        mover.moverFeitas();
                    });
                    contarFormacoes.update();
                });
            });
            observaAFazer.observe(document.querySelector("#addAqui"), { childList: true });
            observaFazendo = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    $("#nav-link-kanban_fazendo").find(".btnExpandir").click(function () {
                        var eu = $(this);
                        var irmao = $(eu).siblings();
                        var sobrinho = $(irmao).children();
                        if (sobrinho.hasClass('iconeDeletar')) {
                            sobrinho.removeClass('iconeDeletar').addClass('iconeEditar');
                            irmao.removeClass('btnDeletar').addClass('btnEditar');
                        }
                        else if (sobrinho.hasClass('iconeEditar')) {
                            sobrinho.removeClass('iconeEditar').addClass('iconeDeletar');
                            irmao.removeClass('btnEditar').addClass('btnDeletar');
                        }
                    });
                    $("#nav-link-kanban_fazendo").find(".btnDeletar").click(function () {
                        editarDeletarKanban.eu = $(this);
                        if (editarDeletarKanban.eu.hasClass('btnDeletar')) {
                            editarDeletarKanban.deletar();
                        }
                        else if (editarDeletarKanban.eu.hasClass('btnEditar')) {
                            editarDeletarKanban.editar();
                        }
                    });
                    $("#nav-link-kanban_fazendo").find(".btnMoverDireita").click(function () {
                        mover.eu = $(this);
                        mover.moverFeitas();
                    });
                    $("#nav-link-kanban_fazendo").find(".btnMoverEsquerda").click(function () {
                        mover.eu = $(this);
                        mover.moverAFazer();
                    });
                    contarFormacoes.update();
                });
            });
            observaFazendo.observe(document.querySelector("#nav-link-kanban_fazendo"), { childList: true });
            observaFeitas = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    $("#nav-link-kanban_feitas").find(".btnExpandir").click(function () {
                        var eu = $(this);
                        var irmao = $(eu).siblings();
                        var sobrinho = $(irmao).children();
                        if (sobrinho.hasClass('iconeDeletar')) {
                            sobrinho.removeClass('iconeDeletar').addClass('iconeEditar');
                            irmao.removeClass('btnDeletar').addClass('btnEditar');
                        }
                        else if (sobrinho.hasClass('iconeEditar')) {
                            sobrinho.removeClass('iconeEditar').addClass('iconeDeletar');
                            irmao.removeClass('btnEditar').addClass('btnDeletar');
                        }
                    });
                    $("#nav-link-kanban_feitas").find(".btnDeletar").click(function () {
                        editarDeletarKanban.eu = $(this);
                        if (editarDeletarKanban.eu.hasClass('btnDeletar')) {
                            editarDeletarKanban.deletar();
                        }
                        else if (editarDeletarKanban.eu.hasClass('btnEditar')) {
                            editarDeletarKanban.editar();
                        }
                    });
                    $("#nav-link-kanban_feitas").find(".btnMoverDireita").click(function () {
                        mover.eu = $(this);
                        mover.moverAFazer();
                    });
                    $("#nav-link-kanban_feitas").find(".btnMoverEsquerda").click(function () {
                        mover.eu = $(this);
                        mover.moverFazendo();
                    });
                    contarFormacoes.update();
                });
            });
            observaFeitas.observe(document.querySelector("#nav-link-kanban_feitas"), { childList: true });
            observador = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    $("#novaSkill").find(".btnDeletar").click(function () {
                        editarDeletarKanban.eu = $(this);
                        editarDeletarKanban.deletarSkill();
                    });
                    $("#novaSkill").find(".btnEditar").click(function () {
                        editarDeletarKanban.eu = $(this);
                        editarDeletarKanban.editarSkill();
                    });
                });
            });
            observador.observe(document.querySelector("#novaSkill"), { childList: true });
        }
    };
});
