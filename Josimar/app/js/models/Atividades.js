System.register(["../services/PDO"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PDO_1, Atividades;
    return {
        setters: [
            function (PDO_1_1) {
                PDO_1 = PDO_1_1;
            }
        ],
        execute: function () {
            Atividades = class Atividades {
                constructor() {
                    this._atividades = [];
                    this._db = new PDO_1.PDO();
                }
                adiciona(atividade) {
                    let table = 'Atividades';
                    let columns = 'titulo, descricao, idCard';
                    let createColumns = `id INTEGER PRIMARY KEY, ${columns}`;
                    let values = `'${atividade.titulo}', '${atividade.descricao}', 'cardToDo'`;
                    this._db.createTable(table, createColumns);
                    this._db.insert(table, columns, values);
                    this._atividades.push(atividade);
                }
                edita(atividade) {
                    let table = 'Atividades';
                    let condition = `id =${atividade.id}`;
                    let values = `titulo = '${atividade.titulo}', descricao = '${atividade.descricao}', idCard = '${atividade.descricao}'`;
                    this._db.update(table, values, condition);
                }
                lista() {
                    let table = 'Atividades';
                    let columns = '*';
                    let condition = ``;
                    let array = this._db.list(columns, table, condition);
                    console.log(array);
                }
                paraArray() {
                    return [].concat(this._atividades);
                }
            };
            exports_1("Atividades", Atividades);
        }
    };
});
