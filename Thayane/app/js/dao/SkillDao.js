System.register(["../models/index", "./Dao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, Dao_1, SkillDao;
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
            SkillDao = class SkillDao extends Dao_1.Dao {
                constructor(connection) {
                    super(connection);
                    this._connection = connection;
                    this._store = 'skills';
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
                                formacoes.push(new index_1.AddSkill(dado.skillTitulo, dado.skillPorcentagem));
                                atual.continue();
                            }
                            else
                                resolve(formacoes);
                        };
                        cursor.onerror = (e) => {
                            console.log(e.target.error);
                            reject('Não foi possível listar as skills!');
                        };
                    });
                }
                apagarRegistro(tabela, key) {
                    console.log(this._connection);
                    console.log(this._store);
                    this._connection
                        .then((conection) => {
                        let transaction = conection.transaction([tabela], 'readwrite');
                        let store = transaction.objectStore(tabela);
                        let request = store.delete(key);
                        request.onsuccess = (e) => console.log(`Registro ${key} excluído com sucesso de ${tabela}`);
                        request.onerror = (e) => console.log(`Não foi excluir o registro de ${tabela}`);
                    }).catch((erro) => erro);
                }
            };
            exports_1("SkillDao", SkillDao);
        }
    };
});
