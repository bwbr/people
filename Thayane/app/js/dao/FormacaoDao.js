System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FormacaoDao;
    return {
        setters: [],
        execute: function () {
            FormacaoDao = class FormacaoDao {
                constructor(connection) {
                    this._connection = connection;
                    this._store = 'formacoes';
                }
                adiciona(formacao) {
                    return new Promise((resolve, reject) => {
                        let request = this._connection
                            .transaction([this._store], 'readwrite')
                            .objectStore(this._store)
                            .add(formacao);
                    });
                }
            };
            exports_1("FormacaoDao", FormacaoDao);
        }
    };
});
