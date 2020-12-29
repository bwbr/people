System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Dao;
    return {
        setters: [],
        execute: function () {
            Dao = class Dao {
                constructor(connection) {
                    this._connection = connection;
                    this._store = '';
                }
                adiciona(formacao) {
                    return new Promise((resolve, reject) => {
                        let request = this._connection
                            .transaction([this._store], 'readwrite')
                            .objectStore(this._store)
                            .add(formacao);
                        request.onsuccess = (e) => resolve(e.target.result);
                        request.onerror = (e) => {
                            console.log(e.target.error);
                            reject('Não foi possível adicionar a formação!');
                        };
                    });
                }
            };
            exports_1("Dao", Dao);
        }
    };
});
