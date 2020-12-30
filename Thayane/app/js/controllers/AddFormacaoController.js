System.register(["../views/index", "../models/index", "../dao/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, formacaoID, AddFormacaoController;
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
            formacaoID = 1;
            AddFormacaoController = class AddFormacaoController {
                constructor(_kanban, _add) {
                    this._kanban = _kanban;
                    this._add = _add;
                    this._inputFormacaoTitulo = $('#novaFormacaoTitulo');
                    this._inputFormacaoDescricao = $('#novaFormacaoDescricao');
                    this._numA = 0;
                    this._addKanbanView = new index_1.KanbanView('#nav-link-kanban_afazer');
                    this._numB = 'expandir' + this._numA;
                    this.listarTodos();
                }
                listarTodos() {
                    return ConnectionFactory
                        .getConnection()
                        .then((connection) => {
                        return new index_3.FormacaoDaoAFazer(connection);
                    })
                        .then(dao => dao.listaTodos())
                        .then((formacoes) => {
                        formacoes.forEach((formacao) => {
                            this._kanban.aFazer.adiciona(formacao);
                            this._numA++;
                            this._numB = 'expandir' + this._numA;
                        });
                        this._addKanbanView.update(this._kanban);
                    })
                        .catch(erro => console.log(erro));
                }
                adiciona(event) {
                    event.preventDefault();
                    ConnectionFactory
                        .getConnection()
                        .then(connection => {
                        let formacao = this._addFormacao();
                        new index_3.FormacaoDaoAFazer(connection)
                            .adiciona(formacao)
                            .then(formacaoID => {
                            formacao.id = formacaoID;
                            return formacao;
                        })
                            .then(() => {
                            this._kanban.adiciona(formacao);
                            this._numA++;
                            this._numB = 'expandir' + this._numA;
                        })
                            .then(() => this._addKanbanView.update(this._kanban))
                            .then(() => this._limparFormulario());
                    }).catch(erro => console.log(erro));
                }
                _addFormacao() {
                    return new index_2.AddFormacao(this._inputFormacaoTitulo.val(), this._inputFormacaoDescricao.val(), this._numA, this._numB);
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
