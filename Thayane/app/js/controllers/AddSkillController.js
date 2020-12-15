System.register(["../views/index", "../models/index", "./ModalController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, ModalController_1, AddSkillController;
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
            }
        ],
        execute: function () {
            AddSkillController = class AddSkillController {
                constructor() {
                    this._modal = new ModalController_1.ModalController();
                    this._skills = new index_2.AddSkills();
                    this._addSkillsView = new index_1.AddSkillsView('#novaSkill');
                    this._inputSkillTitulo = $('#novaSkillTitulo');
                    this._inputSkillPorcentagem = $('#novaSkillPorcentagem');
                    this._addSkillsView.update(this._skills);
                }
                adiciona(event) {
                    event.preventDefault();
                    const addSkill = new index_2.AddSkill(this._inputSkillTitulo.val(), this._inputSkillPorcentagem.val());
                    if (this._inputSkillPorcentagem.val() < 0 || this._inputSkillPorcentagem.val() > 100) {
                        this._modal.mostrarModal();
                        this._inputSkillPorcentagem = $('#novaSkillPorcentagem').val("");
                    }
                    else {
                        this._skills.adiciona(addSkill);
                        this._addSkillsView.update(this._skills);
                        this._limparFormulario();
                    }
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
