System.register(["../services/DB"], function (exports_1, context_1) {
    "use strict";
    var DB_1, Atividades;
    var __moduleName = context_1 && context_1.id;
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
                    return this._db.createTable(table, createColumns)
                        .then(() => this._db.insert(table, columns, values))
                        .then(() => atividade);
                }
                move(id, idCard) {
                    let table = 'Atividades';
                    let condition = `id =${id}`;
                    let values = `idCard = '${idCard}'`;
                    this._db.update(table, values, condition);
                }
                deleta(id) {
                    let table = 'Atividades';
                    let condition = `id =${id}`;
                    this._db.delete(table, condition);
                }
                paraArray() {
                    return [].concat(this._atividades);
                }
            };
            exports_1("Atividades", Atividades);
        }
    };
});
