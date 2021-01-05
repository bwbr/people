System.register(["../views/index", "../models/index", "../dao/AtividadesDao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, AtividadesDao_1, AddAtividadesController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (AtividadesDao_1_1) {
                AtividadesDao_1 = AtividadesDao_1_1;
            }
        ],
        execute: function () {
            AddAtividadesController = class AddAtividadesController {
                constructor() {
                    this._atividades = new index_2.AddAtividades();
                    this._addAtividadesView = new index_1.AddAtividadesView('#addAtividades');
                    this.listarTodos();
                }
                listarTodos() {
                    return ConnectionFactory
                        .getConnection()
                        .then((connection) => {
                        return new AtividadesDao_1.AtividadeDao(connection);
                    })
                        .then(dao => dao.listaTodos())
                        .then((skills) => {
                        let skilllist = new index_2.AddAtividades();
                        skills.forEach((skill) => skilllist.adiciona(skill));
                        this._addAtividadesView.update(skilllist);
                    })
                        .catch(erro => console.log(erro));
                }
                adiciona() {
                    ConnectionFactory
                        .getConnection()
                        .then(connection => {
                        let skill = this.adicionou();
                        new AtividadesDao_1.AtividadeDao(connection)
                            .adiciona(skill)
                            .then(() => this.listarTodos());
                    }).catch(erro => console.log(erro));
                }
                adicionaMudanca() {
                    ConnectionFactory
                        .getConnection()
                        .then(connection => {
                        let skill = this.mudou();
                        new AtividadesDao_1.AtividadeDao(connection)
                            .adiciona(skill)
                            .then(() => this.listarTodos());
                    }).catch(erro => console.log(erro));
                }
                adicionouSkill() {
                    this.atividadeNome = $('#novaSkillTitulo');
                    this._tipo = "Skill adicionada: ";
                    this.adiciona();
                }
                adicionouFormacao() {
                    this.atividadeNome = $('#novaFormacaoTitulo');
                    this._tipo = "Formação adicionada: ";
                    this.adiciona();
                }
                adicionou() {
                    let now = moment().format('lll');
                    return new index_2.AddAtividade(this._tipo + this.atividadeNome.val(), this._atividadeData = now);
                }
                removeuSkill() {
                    this._tipo = "Skill removida";
                    this.adicionaMudanca();
                }
                removeuFormacao() {
                    this._tipo = "Formação removida";
                    this.adicionaMudanca();
                }
                editouFormacao() {
                    this._tipo = "Formação editada";
                    this.adicionaMudanca();
                }
                editouSkill() {
                    this._tipo = "Skill editada";
                    this.adicionaMudanca();
                }
                mudou() {
                    let local = moment.locale('pt-br');
                    console.log(local);
                    let now = moment().format('lll');
                    return new index_2.AddAtividade(this._tipo, this._atividadeData = now);
                }
            };
            exports_1("AddAtividadesController", AddAtividadesController);
        }
    };
});
