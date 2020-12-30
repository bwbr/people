System.register(["../views/KanbanView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var KanbanView_1, Deletar;
    return {
        setters: [
            function (KanbanView_1_1) {
                KanbanView_1 = KanbanView_1_1;
            }
        ],
        execute: function () {
            Deletar = class Deletar {
                constructor(kanban) {
                    this.kanban = kanban;
                    this._addKanbanView = new KanbanView_1.KanbanView('');
                }
                deletarAFazer(tabela) {
                    let formacaoID = $(this.eu).data('key');
                    this.dao = ConnectionFactory
                        .getConnection()
                        .then((conection) => {
                        conection.transaction([tabela], 'readwrite')
                            .objectStore(tabela)
                            .delete(formacaoID);
                    })
                        .catch(erro => erro);
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
                deletarSkill(tabela) {
                    let skillID = $(this.eu).data('key');
                    this.dao = ConnectionFactory
                        .getConnection()
                        .then((conection) => {
                        conection.transaction([tabela], 'readwrite')
                            .objectStore(tabela)
                            .delete(skillID);
                    }).catch(erro => erro);
                    this.pai = this.eu.parent();
                    this.pai.remove();
                }
            };
            exports_1("Deletar", Deletar);
        }
    };
});
