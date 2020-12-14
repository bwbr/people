System.register(["../views/AddFormacoesView", "../models/AddFormacoes", "../models/AddFormacao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddFormacoesView_1, AddFormacoes_1, AddFormacao_1, AddFormacaoController;
    return {
        setters: [
            function (AddFormacoesView_1_1) {
                AddFormacoesView_1 = AddFormacoesView_1_1;
            },
            function (AddFormacoes_1_1) {
                AddFormacoes_1 = AddFormacoes_1_1;
            },
            function (AddFormacao_1_1) {
                AddFormacao_1 = AddFormacao_1_1;
            }
        ],
        execute: function () {
            AddFormacaoController = class AddFormacaoController {
                constructor() {
                    this._formacoes = new AddFormacoes_1.AddFormacoes();
                    this._addFormacoesView = new AddFormacoesView_1.AddFormacoesView('#addAqui');
                    this._inputFormacaoTitulo = $('#novaFormacaoTitulo');
                    this._inputFormacaoDescricao = $('#novaFormacaoDescricao');
                    this._numA = 0;
                    this._numB = 0;
                    this._addFormacoesView.update(this._formacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    const addFormacao = new AddFormacao_1.AddFormacao(this._inputFormacaoTitulo.val(), this._inputFormacaoDescricao.val(), this._numA, this._numB);
                    this._formacoes.adiciona(addFormacao);
                    this._addFormacoesView.update(this._formacoes);
                    this._limparFormulario();
                }
                _limparFormulario() {
                    this._inputFormacaoTitulo = $('#novaFormacaoTitulo').val("");
                    this._inputFormacaoDescricao = $('#novaFormacaoDescricao').val("");
                }
            };
            exports_1("AddFormacaoController", AddFormacaoController);
        }
    };
});
