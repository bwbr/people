System.register(["../models/index", "./Dao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, Dao_1, FormacaoDaoAFazer;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (Dao_1_1) {
                Dao_1 = Dao_1_1;
            }
        ],
        execute: function () {
            FormacaoDaoAFazer = class FormacaoDaoAFazer extends Dao_1.Dao {
                constructor(connection) {
                    super(connection);
                    this._connection = connection;
                    this._store = 'formacoesAFazer';
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
                                formacoes.push(new index_1.AddFormacao(dado.formacaoTitulo, dado.formacaoDescricao, dado.a, dado.b));
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
            exports_1("FormacaoDaoAFazer", FormacaoDaoAFazer);
        }
    };
});
