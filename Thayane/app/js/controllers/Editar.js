System.register(["../dao/index", "../models/index", "../views/index", "./AddSkillController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, AddSkillController_1, Editar;
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
            },
            function (AddSkillController_1_1) {
                AddSkillController_1 = AddSkillController_1_1;
            }
        ],
        execute: function () {
            Editar = class Editar {
                constructor(kanban, skill) {
                    this.kanban = kanban;
                    this.skill = skill;
                    this._addKanbanView = new index_3.KanbanView('');
                    this._addSkillView = new index_3.AddSkillsView('');
                    this._skillController = new AddSkillController_1.AddSkillController();
                }
                deletar(tabela) {
                    this.dao = ConnectionFactory.getConnection()
                        .then((connection) => {
                        connection.transaction([tabela], 'readwrite')
                            .objectStore(tabela)
                            .delete(this.algoID);
                    });
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
                addFormacao() {
                    this._inputAlgoTitulo = $(`#formacaoTitulo${this.formacaoA}`);
                    this._inputAlgoConteudo = $(`#formacaoDescricao${this.formacaoA}`);
                    if (this._inputAlgoTitulo.val() == '')
                        this._inputAlgoTitulo.val(this.algoTitulo);
                    if (this._inputAlgoConteudo.val() == '')
                        this._inputAlgoConteudo.val(this.formacaoDescricao);
                    return new index_2.AddFormacao(this._inputAlgoTitulo.val(), this._inputAlgoConteudo.val(), parseInt(this.formacaoA), this.formacaoB);
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
                pegarInformacoesSkills() {
                    this.algoID = $(this.eu).data('key');
                    this.algoTitulo = $(this.eu).data('titulo');
                    this.sucesso = $(this.eu).data('sucesso');
                }
                addSkill() {
                    this._inputAlgoTitulo = $(`#skillTitulo${this.algoID}`);
                    this._inputAlgoConteudo = $(`#skillPorcent${this.algoID}`);
                    if (this._inputAlgoTitulo.val() == '')
                        this._inputAlgoTitulo.val(this.algoTitulo);
                    if (this._inputAlgoConteudo.val() == '')
                        this._inputAlgoConteudo.val(this.sucesso);
                    return new index_2.AddSkill(this._inputAlgoTitulo.val(), parseInt(this._inputAlgoConteudo.val()));
                }
                editarSkill(tabela) {
                    this.pegarInformacoesSkills();
                    this.deletar(tabela);
                    this.eu.parent().remove();
                    this.dao = ConnectionFactory.getConnection()
                        .then((connection) => {
                        let skill = this.addSkill();
                        new index_1.SkillDao(connection)
                            .adiciona(skill)
                            .then(skillID => {
                            skill.id = skillID;
                            return skill;
                        })
                            .then(() => this.skill.adiciona(skill))
                            .then(() => this._skillController.listarTodos());
                    });
                }
            };
            exports_1("Editar", Editar);
        }
    };
});
