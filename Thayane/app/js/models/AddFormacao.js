System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddFormacao;
    return {
        setters: [],
        execute: function () {
            AddFormacao = class AddFormacao {
                constructor(formacaoTitulo, formacaoDescricao, a, b) {
                    this.formacaoTitulo = formacaoTitulo;
                    this.formacaoDescricao = formacaoDescricao;
                    this.a = a;
                    this.b = b;
                }
                get numA() {
                    return this.a;
                }
                get numB() {
                    this.a++;
                    return this.b++;
                }
            };
            exports_1("AddFormacao", AddFormacao);
        }
    };
});
