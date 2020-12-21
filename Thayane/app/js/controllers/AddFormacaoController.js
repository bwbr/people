System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, AddFormacaoController;
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
            AddFormacaoController = class AddFormacaoController {
                constructor(_kanban) {
                    this._kanban = _kanban;
                    this._addKanbanView = new index_1.KanbanView('#nav-link-kanban_afazer');
                    this._inputFormacaoTitulo = $('#novaFormacaoTitulo');
                    this._inputFormacaoDescricao = $('#novaFormacaoDescricao');
                    this._numA = 0;
                    this._numB = 0;
                    this._addKanbanView.update(this._kanban);
                }
                adiciona(event) {
                    console.log('teste');
                    event.preventDefault();
                    const addFormacao = new index_2.AddFormacao(this._inputFormacaoTitulo.val(), this._inputFormacaoDescricao.val(), this._numA, this._numB);
                    this._kanban.adiciona(addFormacao);
                    this._addKanbanView.update(this._kanban);
                    console.log(this._kanban);
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
