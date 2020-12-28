System.register(["../views/index", "../models/index", "../dao/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, AddFormacaoController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            AddFormacaoController = class AddFormacaoController {
                constructor(_kanban, _add) {
                    this._kanban = _kanban;
                    this._add = _add;
                    this._inputFormacaoTitulo = $('#novaFormacaoTitulo');
                    this._inputFormacaoDescricao = $('#novaFormacaoDescricao');
                    this._numA = this._add.numA;
                    this._numB = this._add.numA;
                    this._numC = 'expandir' + 0;
                    this._numD = 'expandir' + 0;
                    this._addKanbanView = new index_1.KanbanView('#nav-link-kanban_afazer');
                    ConnectionFactory
                        .getConnection()
                        .then((connection) => {
                        return new index_3.FormacaoDaoAFazer(connection);
                    })
                        .then(dao => dao.listaTodos())
                        .then((formacoes) => {
                        formacoes.forEach((formacao) => this._kanban.aFazer.adiciona(formacao));
                        this._addKanbanView.update(this._kanban);
                    });
                }
                adiciona(event) {
                    event.preventDefault();
                    ConnectionFactory
                        .getConnection()
                        .then(connection => {
                        let formacao = this._addFormacao();
                        new index_3.FormacaoDaoAFazer(connection)
                            .adiciona(formacao)
                            .then(() => {
                            this._kanban.adiciona(this._addFormacao());
                            this._addKanbanView.update(this._kanban);
                            this._limparFormulario();
                        });
                    }).catch(erro => console.log(erro));
                }
                _addFormacao() {
                    return new index_2.AddFormacao(this._inputFormacaoTitulo.val(), this._inputFormacaoDescricao.val(), this._numA, this._numB, this._numC, this._numD);
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
