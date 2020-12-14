System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Atividade;
    return {
        setters: [],
        execute: function () {
            Atividade = class Atividade {
                constructor(id, titulo, descricao, idCard) {
                    this.id = id;
                    this.titulo = titulo;
                    this.descricao = descricao;
                    this.idCard = idCard;
                }
            };
            exports_1("Atividade", Atividade);
        }
    };
});
