System.register(["../views/KanbanView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var KanbanView_1, Editar;
    return {
        setters: [
            function (KanbanView_1_1) {
                KanbanView_1 = KanbanView_1_1;
            }
        ],
        execute: function () {
            Editar = class Editar {
                constructor(kanban) {
                    this.kanban = kanban;
                    this._addKanbanView = new KanbanView_1.KanbanView('');
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
                editarSkill() {
                    console.log("Editando...");
                    this.pai = this.eu.parent();
                    this.pai.text('TS');
                    this.irmao = this.eu.siblings('.progress');
                    this.sobrinho = this.irmao.children('.bg-success');
                    this.sobrinho.css('width:50%');
                }
            };
            exports_1("Editar", Editar);
        }
    };
});
