System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddFormacao;
    return {
        setters: [],
        execute: function () {
            AddFormacao = class AddFormacao {
                constructor(_formacaoTitulo, _formacaoDescricao, a, b) {
                    this._formacaoTitulo = _formacaoTitulo;
                    this._formacaoDescricao = _formacaoDescricao;
                    this.a = a;
                    this.b = b;
                }
                get formacaoTitulo() {
                    return this._formacaoTitulo;
                }
                get formacaoDescricao() {
                    return this._formacaoDescricao;
                }
                get numA() {
                    return this.a++;
                }
                get numB() {
                    return this.b++;
                }
            };
            exports_1("AddFormacao", AddFormacao);
        }
    };
});
