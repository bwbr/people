System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddFormacao;
    return {
        setters: [],
        execute: function () {
            AddFormacao = class AddFormacao {
                constructor(_formacao, a, b) {
                    this._formacao = _formacao;
                    this.a = a;
                    this.b = b;
                }
                get formacao() {
                    return this._formacao;
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
