System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddFormacao;
    return {
        setters: [],
        execute: function () {
            AddFormacao = class AddFormacao {
                constructor(formacaoTitulo, formacaoDescricao, a, b, c) {
                    this.formacaoTitulo = formacaoTitulo;
                    this.formacaoDescricao = formacaoDescricao;
                    this.a = a;
                    this.b = b;
                    this.c = c;
                }
                paraTexto() {
                    console.log($(this.c));
                }
            };
            exports_1("AddFormacao", AddFormacao);
        }
    };
});
