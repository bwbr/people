System.register(["../services/DB"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DB_1, Atividades;
    return {
        setters: [
            function (DB_1_1) {
                DB_1 = DB_1_1;
            }
        ],
        execute: function () {
            Atividades = class Atividades {
                constructor() {
                    this._atividades = [];
                    this._db = new DB_1.DB();
                }
                adiciona(atividade) {
                    this._atividades.push(atividade);
                }
                salva(atividade) {
                    let table = 'Atividades';
                    let columns = 'titulo, descricao, idCard';
                    let createColumns = `id INTEGER PRIMARY KEY, ${columns}`;
                    let values = `'${atividade.titulo}', '${atividade.descricao}', 'cardToDo'`;
                    this._db.createTable(table, createColumns);
                    this._db.insert(table, columns, values);
                }
                edita(atividade) {
                    let table = 'Atividades';
                    let condition = `id =${atividade.id}`;
                    let values = `titulo = '${atividade.titulo}', descricao = '${atividade.descricao}', idCard = '${atividade.descricao}'`;
                    this._db.update(table, values, condition);
                }
                paraArray() {
                    return [].concat(this._atividades);
                }
            };
            exports_1("Atividades", Atividades);
        }
    };
});
