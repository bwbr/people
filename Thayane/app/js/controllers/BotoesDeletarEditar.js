System.register(["../views/KanbanView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var KanbanView_1, BotoesDeletarEditar;
    return {
        setters: [
            function (KanbanView_1_1) {
                KanbanView_1 = KanbanView_1_1;
            }
        ],
        execute: function () {
            BotoesDeletarEditar = class BotoesDeletarEditar {
                constructor(kanban) {
                    this.kanban = kanban;
                    this._addKanbanView = new KanbanView_1.KanbanView('');
                }
                deletarAFazer() {
                    console.log("Removendo...");
                    let title = this.eu.data('title');
                    let card = this.kanban.pop(title);
                    if (card == undefined)
                        return console.log("Não encontrado");
                    this.kanban.aFazer.remover(card);
                    this._addKanbanView.update(this.kanban);
                }
                deletarFazendo() {
                    console.log("Removendo...");
                    let title = this.eu.data('title');
                    let card = this.kanban.pop(title);
                    if (card == undefined)
                        return console.log("Não encontrado");
                    this.kanban.fazendo.remover(card);
                    this._addKanbanView.update(this.kanban);
                }
                deletarFeitas() {
                    console.log("Removendo...");
                    let title = this.eu.data('title');
                    let card = this.kanban.pop(title);
                    if (card == undefined)
                        return console.log("Não encontrado");
                    this.kanban.feitas.remover(card);
                    this._addKanbanView.update(this.kanban);
                }
                editar() {
                    console.log("Editando...");
                    this.pai = this.eu.parent();
                    this.tio = this.pai.siblings('.quebrarTexto');
                    this.tio.text('Oi');
                    this.biso = this.pai.parents('.card-header');
                    this.tioBiso = this.biso.siblings();
                    this.primo2 = this.tioBiso.children('.card-body');
                    this.primo2.text('Olá');
                }
                deletarSkill() {
                    console.log("Deletando...");
                    this.pai = this.eu.parent();
                    this.pai.remove();
                }
                editarSkill() {
                    console.log("Editando...");
                    this.pai = this.eu.parent();
                    this.pai.text('TS');
                    this.irmao = this.eu.siblings('.progress');
                    this.sobrinho = this.irmao.children('.bg-success');
                    this.sobrinho.css('width:50%');
                }
            };
            exports_1("BotoesDeletarEditar", BotoesDeletarEditar);
        }
    };
});
