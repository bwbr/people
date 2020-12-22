System.register(["./View", "./AddFormacoesView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, AddFormacoesView_1, KanbanView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            },
            function (AddFormacoesView_1_1) {
                AddFormacoesView_1 = AddFormacoesView_1_1;
            }
        ],
        execute: function () {
            KanbanView = class KanbanView extends View_1.View {
                constructor() {
                    super(...arguments);
                    this._formacaoAFazerView = new AddFormacoesView_1.AddFormacoesView('#nav-link-kanban_aFazer');
                    this._formacaoFazendoView = new AddFormacoesView_1.AddFormacoesView('#nav-link-kanban_fazendo');
                    this._formacaoFeitoView = new AddFormacoesView_1.AddFormacoesView('#nav-link-kanban_feitas');
                }
                update(model) {
                    this._formacaoAFazerView.update(model.aFazer);
                    this._formacaoFazendoView.update(model.fazendo);
                    this._formacaoFeitoView.update(model.feitas);
                }
                template(model) {
                    return '';
                }
            };
            exports_1("KanbanView", KanbanView);
        }
    };
});
