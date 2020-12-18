System.register(["./controllers/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, muda, controllerFormacoes, controllerSkills, modal, contarFormacoes, editarDeletarKanban, observer;
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
            observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    $("#addAqui").find(".btnExpandir").click(function () {
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
                    $("#addAqui").find(".btnDeletar").click(function () {
                        var eu = $(this);
                        if (eu.hasClass('btnDeletar')) {
                            var card = $(eu).siblings();
                            card.remove();
                        }
                        else if (eu.hasClass('btnEditar')) {
                            var voltando = $(eu).parents('.botoes');
                            console.log(voltando);
                            var titulo = $(voltando).children('.quebrarTexto');
                            console.log(titulo);
                            titulo.text('Oi');
                        }
                    });
                    $("#addAqui").find(".btnMoverDireita").click(function () {
                        var eu = $(this);
                        var card = eu.parents('.card');
                        console.log(card);
                    });
                    $("#addAqui").find(".btnMoverEsquerda").click(function () {
                        var eu = $(this);
                        var card = eu.parents('.card');
                        console.log(card);
                    });
                    contarFormacoes.update();
                });
            });
            observer.observe(document.querySelector("#addAqui"), { childList: true });
        }
    };
});
