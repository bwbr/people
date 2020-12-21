System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MoverKanban;
    return {
        setters: [],
        execute: function () {
            MoverKanban = class MoverKanban {
                moverAFazer() {
                    console.log("Movendo...");
                    this.biso = this.eu.parents('.formacoes');
                    this.novoBiso = $('#addAqui');
                    this.novoBiso.append(this.eu);
                }
                moverFazendo() {
                    console.log("Movendo...");
                    this.biso = this.eu.parents('.formacoes');
                    this.novoBiso = $('#nav-link-kanban_fazendo');
                    this.novoBiso.append(this.biso);
                }
                moverFeitas() {
                    console.log("Movendo...");
                    this.biso = this.eu.parents('.formacoes');
                    this.novoBiso = $('#nav-link-kanban_feitas');
                    this.novoBiso.append(this.biso);
                }
            };
            exports_1("MoverKanban", MoverKanban);
        }
    };
});
