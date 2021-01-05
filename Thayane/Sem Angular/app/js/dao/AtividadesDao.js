System.register(["../models/index", "./Dao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, Dao_1, AtividadeDao;
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
            AtividadeDao = class AtividadeDao extends Dao_1.Dao {
                constructor(connection) {
                    super(connection);
                    this._connection = connection;
                    this._store = 'atividades';
                }
                listaTodos() {
                    return new Promise((resolve, reject) => {
                        let cursor = this._connection
                            .transaction([this._store], "readwrite")
                            .objectStore(this._store)
                            .openCursor();
                        let atividades = [];
                        cursor.onsuccess = (e) => {
                            let atual = e.target.result;
                            if (atual) {
                                let dado = atual.value;
                                let atividade = new index_1.AddAtividade(dado.atividadeNome, dado.atividadeData);
                                atividades.push(atividade);
                                atual.continue();
                            }
                            else
                                resolve(atividades);
                        };
                        cursor.onerror = (e) => {
                            console.log(e.target.error);
                            reject('Não foi possível listar as Atividades!');
                        };
                    });
                }
            };
            exports_1("AtividadeDao", AtividadeDao);
        }
    };
});
