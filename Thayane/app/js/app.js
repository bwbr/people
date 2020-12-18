System.register(["./controllers/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, muda, controllerFormacoes, controllerSkills, modal, observer;
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
            observer = new MutationObserver(function (mutations) {
                mutations.forEach(function (mutation) {
                    $("#addAqui").find(".btnExpandir").click(function () {
                        var eu = $(this);
                        console.log(eu);
                        var irmao = $(eu).siblings();
                        console.log(irmao);
                        var sobrinho = $(irmao).children();
                        console.log(sobrinho);
                        if (sobrinho.hasClass('iconeDeletar'))
                            sobrinho.removeClass('iconeDeletar').addClass('iconeEditar');
                        else if (sobrinho.hasClass('iconeEditar'))
                            sobrinho.removeClass('iconeEditar').addClass('iconeDeletar');
                    });
                });
            });
            observer.observe(document.querySelector("#addAqui"), { childList: true });
        }
    };
});
