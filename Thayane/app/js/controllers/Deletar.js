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
                deletar(tabela) {
                    let algoID = $(this.eu).data('key');
                    this.dao = ConnectionFactory
                        .getConnection()
                        .then((conection) => {
                        conection.transaction([tabela], 'readwrite')
                            .objectStore(tabela)
                            .delete(algoID);
                    })
                        .catch(erro => erro);
                }
                deletarKanban(tabela) {
                    this.deletar(tabela);
                    this.title = this.eu.data('title');
                    this.card = this.kanban.pop(this.title);
                    if (this.card == undefined)
                        return console.log("Não encontrado");
                }
                deletarAFazer(tabela) {
                    this.deletarKanban(tabela);
                    this.kanban.aFazer.remover(this.card);
                    this._addKanbanView.update(this.kanban);
                }
                deletarFazendo(tabela) {
                    this.deletarKanban(tabela);
                    this.kanban.fazendo.remover(this.card);
                    this._addKanbanView.update(this.kanban);
                }
                deletarFeitas(tabela) {
                    this.deletarKanban(tabela);
                    this.kanban.feitas.remover(this.card);
                    this._addKanbanView.update(this.kanban);
                }
                deletarSkill(tabela) {
                    this.deletar(tabela);
                    this.pai = this.eu.parent();
                    this.pai.remove();
                }
            };
            exports_1("Deletar", Deletar);
        }
    };
});
