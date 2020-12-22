System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, AtividadeController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            AtividadeController = class AtividadeController {
                constructor() {
                    this._atividades = new index_2.Atividades();
                    this._atividadesView = new index_1.AtividadesView('[data-toDo]');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._inputId = $('#id');
                    this._inputTitulo = $('#titulo');
                    this._inputDescricao = $('#descricao');
                    this._inputIdCard = $('#idCard');
                    this._atividadesView.update(this._atividades);
                }
                limpa() {
                    this._inputId.val(''),
                        this._inputTitulo.val(''),
                        this._inputDescricao.val(''),
                        this._inputIdCard.val('');
                }
                adiciona(event) {
                    event.preventDefault();
                    const atividade = new index_2.Atividade(this._inputId.val(), this._inputTitulo.val(), this._inputDescricao.val(), this._inputIdCard.val());
                    this._atividades.adiciona(atividade);
                    this._atividadesView.update(this._atividades);
                    this._mensagemView.update('Atividade adicionada com sucesso!');
                    this.limpa();
                }
            };
            exports_1("AtividadeController", AtividadeController);
        }
    };
});
