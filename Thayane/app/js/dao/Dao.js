System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, Dao;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
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
                        request.onsuccess = (e) => {
                            resolve(e);
                        };
                        request.onerror = (e) => {
                            console.log(e.target.error);
                            reject('Não foi possível adicionar a formação!');
                        };
                    });
                }
                listaTodos() {
                    return new Promise((resolve, reject) => {
                        let cursor = this._connection
                            .transaction([this._store], "readwrite")
                            .objectStore(this._store)
                            .openCursor();
                        let formacoes = [];
                        cursor.onsuccess = (e) => {
                            let atual = e.target.result;
                            if (atual) {
                                let dado = atual.value;
                                formacoes.push(new index_1.AddFormacao(dado.formacaoTitulo, dado.formacaoDescricao, dado.numA, dado.numB, dado.numC, dado.numD));
                                atual.continue();
                            }
                            else
                                resolve(formacoes);
                        };
                        cursor.onerror = (e) => {
                            console.log(e.target.error);
                            reject('Não foi possível listar as formações!');
                        };
                    });
                }
            };
            exports_1("Dao", Dao);
        }
    };
});
