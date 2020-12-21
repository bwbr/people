System.register(["../views/KanbanView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var KanbanView_1, MoverKanban;
    return {
        setters: [
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
                moverAFazer() {
                    let title = this.eu.data('title');
                    let card = this.kanban.pop(title);
                    if (card == undefined) {
                        return;
                    }
                    this.kanban.afazer.adiciona(card);
                    this._addKanbanView.update(this.kanban);
                }
                moverFazendo() {
                    console.log("Movendo...");
                    this.biso = this.eu.parents('.formacoes');
                    this.novoBiso = $('#nav-link-kanban_fazendo');
                    this.novoBiso.append(this.biso);
                    this.biso = this.novoBiso;
                }
                moverFeitas() {
                    console.log("Movendo...");
                    this.biso = this.eu.parents('.formacoes');
                    this.novoBiso = $('#nav-link-kanban_feitas');
                    this.novoBiso.append(this.biso);
                    this.biso = this.novoBiso;
                }
            };
            exports_1("MoverKanban", MoverKanban);
        }
    };
});
