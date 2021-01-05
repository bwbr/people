System.register(["../dao/index", "../models/index", "../views/KanbanView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, KanbanView_1, MoverKanban;
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
            MoverKanban = class MoverKanban {
                constructor(kanban) {
                    this.kanban = kanban;
                    this._addKanbanView = new KanbanView_1.KanbanView('');
                }
                pegarInformacoes() {
                    this.formacaoID = $(this.eu).data('key');
                    this.formacaoTitulo = $(this.eu).data('titulo');
                    this.formacaoDescricao = $(this.eu).data('descricao');
                    this.formacaoA = $(this.eu).data('a');
                    this.formacaoB = $(this.eu).data('title');
                    this.title = this.eu.data('title');
                    this.card = this.kanban.pop(this.title);
                    if (this.card == undefined)
                        return;
                }
                addFormacao() {
                    return new index_2.AddFormacao(this.formacaoTitulo, this.formacaoDescricao, parseInt(this.formacaoA), this.formacaoB);
                }
                deletar(tabela) {
                    this.dao = ConnectionFactory.getConnection()
                        .then((connection) => {
                        connection.transaction([tabela], 'readwrite')
                            .objectStore(tabela)
                            .delete(this.formacaoID);
                    });
                }
                aFazer() {
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
                    });
                }
                fazendo() {
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
                    });
                }
                feitas() {
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
                    });
                }
                moverAFazerFazendo(tabela) {
                    this.pegarInformacoes();
                    this.deletar(tabela);
                    this.fazendo();
                    this.kanban.removeAFazer(this.card);
                }
                moverAFazerFeitas(tabela) {
                    this.pegarInformacoes();
                    this.deletar(tabela);
                    this.feitas();
                    this.kanban.removeAFazer(this.card);
                }
                moverFazendoFeitas(tabela) {
                    this.pegarInformacoes();
                    this.deletar(tabela);
                    this.feitas();
                    this.kanban.removeFazendo(this.card);
                }
                moverFazendoAFazer(tabela) {
                    this.pegarInformacoes();
                    this.deletar(tabela);
                    this.aFazer();
                    this.kanban.removeFazendo(this.card);
                }
                moverFeitasFazendo(tabela) {
                    this.pegarInformacoes();
                    this.deletar(tabela);
                    this.fazendo();
                    this.kanban.removeFeitas(this.card);
                }
                moverFeitasAFazer(tabela) {
                    this.pegarInformacoes();
                    this.deletar(tabela);
                    this.aFazer();
                    this.kanban.removeFeitas(this.card);
                }
            };
            exports_1("MoverKanban", MoverKanban);
        }
    };
});
