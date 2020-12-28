System.register(["../views/index", "../models/index", "./ModalController", "../dao/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, ModalController_1, index_3, AddSkillController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (ModalController_1_1) {
                ModalController_1 = ModalController_1_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            AddSkillController = class AddSkillController {
                constructor() {
                    this._inputSkillTitulo = $('#novaSkillTitulo');
                    this._inputSkillPorcentagem = $('#novaSkillPorcentagem');
                    this._modal = new ModalController_1.ModalController();
                    this._skills = new index_2.AddSkills();
                    this._addSkillsView = new index_1.AddSkillsView('#novaSkill');
                    ConnectionFactory
                        .getConnection()
                        .then((connection) => {
                        return new index_3.SkillDao(connection);
                    })
                        .then(dao => dao.listaTodos())
                        .then((skills) => {
                        skills.forEach((skill) => this._skills.adiciona(skill));
                        this._addSkillsView.update(this._skills);
                    })
                        .catch(erro => console.log(erro));
                }
                adiciona(event) {
                    event.preventDefault();
                    ConnectionFactory
                        .getConnection()
                        .then(connection => {
                        let skill = this._addSkill();
                        new index_3.SkillDao(connection)
                            .adiciona(skill)
                            .then(() => {
                            if (this._inputSkillPorcentagem.val() < 0 || this._inputSkillPorcentagem.val() > 100) {
                                this._modal.mostrarModal();
                                this._inputSkillPorcentagem = $('#novaSkillPorcentagem').val("");
                            }
                            else {
                                this._skills.adiciona(this._addSkill());
                                this._addSkillsView.update(this._skills);
                                this._limparFormulario();
                            }
                            ;
                            this._limparFormulario();
                        });
                    }).catch(erro => console.log(erro));
                }
                _addSkill() {
                    return new index_2.AddSkill(this._inputSkillTitulo.val(), this._inputSkillPorcentagem.val());
                }
                _limparFormulario() {
                    this._inputSkillTitulo = $('#novaSkillTitulo').val("");
                    this._inputSkillPorcentagem = $('#novaSkillPorcentagem').val("");
                }
            };
            exports_1("AddSkillController", AddSkillController);
        }
    };
});
