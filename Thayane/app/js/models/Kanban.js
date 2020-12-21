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
                    this.afazer = new AddFormacoes_1.AddFormacoes();
                    this.feito = new AddFormacoes_1.AddFormacoes();
                    this.fazendo = new AddFormacoes_1.AddFormacoes();
                }
                adiciona(formacao) {
                    this.afazer.adiciona(formacao);
                }
                pop(title) {
                    let card = this.afazer.pop(title);
                    if (card != undefined) {
                        return card;
                    }
                    card = this.fazendo.pop(title);
                    if (card != undefined) {
                        return card;
                    }
                    card = this.feito.pop(title);
                    if (card != undefined) {
                        return card;
                    }
                    return undefined;
                }
            };
            exports_1("Kanban", Kanban);
        }
    };
});
