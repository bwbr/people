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
                apagarRegistro(tabela, key) {
                    this._connection
                        .then((conection) => {
                        let request = conection
                            .transaction([tabela], 'readwrite')
                            .objectStore(tabela)
                            .delete(key);
                        request.onsuccess = (e) => console.log(`Registro ${key} excluído com sucesso de ${tabela}`);
                        request.onerror = (e) => console.log(`Não foi excluir o registro de ${tabela}`);
                    }).catch((erro) => erro);
                }
            };
            exports_1("Dao", Dao);
        }
    };
});
