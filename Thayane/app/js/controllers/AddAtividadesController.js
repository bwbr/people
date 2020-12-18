System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, AddAtividadesController;
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
            AddAtividadesController = class AddAtividadesController {
                constructor() {
                    this._atividades = new index_2.AddAtividades();
                    this._addAtividadesView = new index_1.AddAtividadesView('#novaAtividade');
                    this._inputAtividadeNome = $('#novaAtividadeNome');
                    this._inputAtividadeData = $('#novaAtividadeData');
                    this._addAtividadesView.update(this._atividades);
                }
                adiciona(event) {
                    event.preventDefault();
                    const addAtividade = new index_2.AddAtividade(this._inputAtividadeNome.val(), this._inputAtividadeData.val());
                    this._atividades.adiciona(addAtividade);
                    this._addAtividadesView.update(this._atividades);
                }
            };
            exports_1("AddAtividadesController", AddAtividadesController);
        }
    };
});
