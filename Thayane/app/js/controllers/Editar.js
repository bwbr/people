System.register(["../dao/index", "../models/index", "../views/KanbanView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, KanbanView_1, Editar;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (KanbanView_1_1) {
                KanbanView_1 = KanbanView_1_1;
            }
        ],
        execute: function () {
            Editar = class Editar {
                constructor(kanban) {
                    this.kanban = kanban;
                    this._addKanbanView = new KanbanView_1.KanbanView('');
                }
                pegarInformacoesKanban() {
                    this.algoID = $(this.eu).data('key');
                    this.algoTitulo = $(this.eu).data('titulo');
                    this.formacaoDescricao = $(this.eu).data('descricao');
                    this.formacaoA = $(this.eu).data('a');
                    this.formacaoB = $(this.eu).data('title');
                    this.title = this.eu.data('title');
                    this.card = this.kanban.pop(this.title);
                    if (this.card == undefined)
                        return;
                }
                pegarInformacoesSkills() {
                    this.algoID = $(this.eu).data('key');
                    this.algoTitulo = $(this.eu).data('titulo');
                    this.sucesso = $(this.eu).data('sucesso');
                }
                addFormacao() {
                    return new index_2.AddFormacao("this.algoTitulo", "this.formacaoDescricao", parseInt(this.formacaoA), this.formacaoB);
                }
                deletar(tabela) {
                    this.dao = ConnectionFactory.getConnection()
                        .then((connection) => {
                        connection.transaction([tabela], 'readwrite')
                            .objectStore(tabela)
                            .delete(this.algoID);
                    });
                }
                editarAFazer(tabela) {
                    this.pegarInformacoesKanban();
                    this.deletar(tabela);
                    this.dao = ConnectionFactory.getConnection()
                        .then((connection) => {
                        let formacao = this.addFormacao();
                        new index_1.FormacaoDaoAFazer(connection)
                            .adiciona(formacao)
                            .then(formacaoID => {
                            formacao.id = formacaoID;
                            return formacao;
                        })
                            .then(() => {
                            this.kanban.adiciona(formacao);
                            this._addKanbanView.update(this.kanban);
                        });
                        this.kanban.removeAFazer(this.card);
                    });
                }
                editarFazendo(tabela) {
                    this.pegarInformacoesKanban();
                    this.deletar(tabela);
                    this.dao = ConnectionFactory.getConnection()
                        .then((connection) => {
                        let formacao = this.addFormacao();
                        new index_1.FormacaoDaoFazendo(connection)
                            .adiciona(formacao)
                            .then(formacaoID => {
                            formacao.id = formacaoID;
                            return formacao;
                        })
                            .then(() => {
                            this.kanban.adicionaFazendo(formacao);
                            this._addKanbanView.update(this.kanban);
                        });
                        this.kanban.removeFazendo(this.card);
                    });
                }
                editarFeitas(tabela) {
                    this.pegarInformacoesKanban();
                    this.deletar(tabela);
                    this.dao = ConnectionFactory.getConnection()
                        .then((connection) => {
                        let formacao = this.addFormacao();
                        new index_1.FormacaoDaoFeitas(connection)
                            .adiciona(formacao)
                            .then(formacaoID => {
                            formacao.id = formacaoID;
                            return formacao;
                        })
                            .then(() => {
                            this.kanban.adicionaFeitas(formacao);
                            this._addKanbanView.update(this.kanban);
                        });
                        this.kanban.removeFeitas(this.card);
                    });
                }
                editarSkill() {
                    console.log("Editando...");
                    this.pai = this.eu.parent();
                    this.pai.text('TS');
                    this.sobrinho = this.eu.siblings('.progress').children('.bg-success');
                    this.sobrinho.css('width:50%');
                }
            };
            exports_1("Editar", Editar);
        }
    };
});
