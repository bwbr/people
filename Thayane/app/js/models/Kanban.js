System.register(["./AddFormacoes"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddFormacoes_1, Kanban;
    return {
        setters: [
            function (AddFormacoes_1_1) {
                AddFormacoes_1 = AddFormacoes_1_1;
            }
        ],
        execute: function () {
            Kanban = class Kanban {
                constructor() {
                    this.aFazer = new AddFormacoes_1.AddFormacoes();
                    this.fazendo = new AddFormacoes_1.AddFormacoes();
                    this.feitas = new AddFormacoes_1.AddFormacoes();
                }
                adiciona(formacao) {
                    this.aFazer.adiciona(formacao);
                }
                adicionaFazendo(formacao) {
                    this.fazendo.adiciona(formacao);
                }
                adicionaFeitas(formacao) {
                    this.feitas.adiciona(formacao);
                }
                removeAFazer(formacao) {
                    this.aFazer.remover(formacao);
                }
                removeFazendo(formacao) {
                    this.fazendo.remover(formacao);
                }
                removeFeitas(formacao) {
                    this.feitas.remover(formacao);
                }
                pop(title) {
                    let card = this.aFazer.pop(title);
                    if (card != undefined)
                        return card;
                    card = this.fazendo.pop(title);
                    if (card != undefined)
                        return card;
                    card = this.feitas.pop(title);
                    if (card != undefined)
                        return card;
                    return undefined;
                }
            };
            exports_1("Kanban", Kanban);
        }
    };
});
