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
                moverAFazerFazendo() {
                    console.log("Movendo...");
                    let title = this.eu.data('title');
                    let card = this.kanban.pop(title);
                    if (card == undefined)
                        return;
                    this.kanban.fazendo.adiciona(card);
                    this.kanban.aFazer.removeAFazer(card);
                    this._addKanbanView.update(this.kanban);
                }
                moverAFazerFeitas() {
                    console.log("Movendo...");
                    let title = this.eu.data('title');
                    let card = this.kanban.pop(title);
                    if (card == undefined)
                        return;
                    this.kanban.feitas.adiciona(card);
                    this.kanban.aFazer.removeAFazer(card);
                    this._addKanbanView.update(this.kanban);
                }
                moverFazendoFeitas() {
                    console.log("Movendo...");
                    let title = this.eu.data('title');
                    let card = this.kanban.pop(title);
                    if (card == undefined)
                        return;
                    this.kanban.feitas.adiciona(card);
                    this.kanban.fazendo.removeAFazer(card);
                    this._addKanbanView.update(this.kanban);
                }
                moverFazendoAFazer() {
                    console.log("Movendo...");
                    let title = this.eu.data('title');
                    let card = this.kanban.pop(title);
                    if (card == undefined)
                        return;
                    this.kanban.aFazer.adiciona(card);
                    this.kanban.fazendo.removeAFazer(card);
                    this._addKanbanView.update(this.kanban);
                }
                moverFeitasFazendo() {
                    console.log("Movendo...");
                    let title = this.eu.data('title');
                    let card = this.kanban.pop(title);
                    if (card == undefined)
                        return;
                    this.kanban.fazendo.adiciona(card);
                    this.kanban.feitas.removeAFazer(card);
                    this._addKanbanView.update(this.kanban);
                }
                moverFeitasAFazer() {
                    console.log("Movendo...");
                    let title = this.eu.data('title');
                    let card = this.kanban.pop(title);
                    if (card == undefined)
                        return;
                    this.kanban.aFazer.adiciona(card);
                    this.kanban.feitas.removeAFazer(card);
                    this._addKanbanView.update(this.kanban);
                }
            };
            exports_1("MoverKanban", MoverKanban);
        }
    };
});
