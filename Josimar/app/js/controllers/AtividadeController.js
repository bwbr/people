System.register(["../views/index", "../models/index", "../services/DB"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, DB_1, AtividadeController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (DB_1_1) {
                DB_1 = DB_1_1;
            }
        ],
        execute: function () {
            AtividadeController = class AtividadeController {
                constructor() {
                    this._atividades = new index_2.Atividades();
                    this._badge = new index_2.Badges();
                    this._progressbar = new index_2.Progressbar();
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._todoColumnView = new index_1.AtividadesView('[data-ToDo]');
                    this._inProgressColumnView = new index_1.AtividadesView('[data-InProgress]');
                    this._doneColumnView = new index_1.AtividadesView('[data-Done]');
                    this._db = new DB_1.DB();
                    this._inputId = $('#id');
                    this._inputTitulo = $('#titulo');
                    this._inputDescricao = $('#descricao');
                    this._inputIdCard = $('#idCard');
                }
                limpa() {
                    this._inputId.val(''),
                        this._inputTitulo.val(''),
                        this._inputDescricao.val(''),
                        this._inputIdCard.val('');
                }
                adiciona(event) {
                    event.preventDefault();
                    const atividade = new index_2.Atividade(this._inputId.val(), this._inputTitulo.val(), this._inputDescricao.val(), this._inputIdCard.val());
                    this._atividades.salva(atividade)
                        .then(atividade => {
                        this.lista();
                    })
                        .then(() => {
                        this._mensagemView.update('Atividade adicionada com sucesso!', 'alert-success');
                    });
                }
                lista() {
                    let table = 'Atividades';
                    let columns = '*';
                    let condition = `ORDER BY id DESC`;
                    let conn = new Promise((resolve, reject) => {
                        this._db.conn().transaction((tx) => { console.log(tx); resolve(tx); }, (err) => {
                            console.log(err);
                            reject('failed to get transaction');
                        });
                    });
                    conn.then(tx => {
                        return new Promise((resolve, reject) => {
                            tx.executeSql(`SELECT ${columns} FROM ${table} ${condition}`, [], (tx, results) => {
                                resolve(results);
                            }, (tx, err) => {
                                console.log(err);
                                reject(err);
                                return false;
                            });
                        });
                    })
                        .then(results => {
                        let atividades = [];
                        for (let i = 0; i < results.rows.length; i++) {
                            let v = results.rows.item(i);
                            atividades.push(new index_2.Atividade(v.id, v.titulo, v.descricao, v.idCard));
                        }
                        return atividades;
                    })
                        .then(atividades => {
                        console.log(atividades);
                        let cardTodo = atividades.filter(a => a.idCard === 'cardToDo').reduce((a, i) => {
                            a.adiciona(i);
                            return a;
                        }, new index_2.Atividades());
                        let cardInProgress = atividades.filter(a => a.idCard === 'cardInProgress').reduce((a, i) => {
                            a.adiciona(i);
                            return a;
                        }, new index_2.Atividades());
                        let cardDone = atividades.filter(a => a.idCard === 'cardDone').reduce((a, i) => {
                            a.adiciona(i);
                            return a;
                        }, new index_2.Atividades());
                        this._todoColumnView.update(cardTodo, '');
                        this._inProgressColumnView.update(cardInProgress, '');
                        this._doneColumnView.update(cardDone, '');
                        this._badge.badge();
                        this._progressbar.progressbar();
                    });
                }
                deleta(id) {
                    setTimeout(() => {
                        this._atividades.deleta(id);
                        this.lista();
                    }, 1);
                }
                clear_all() {
                    setTimeout(() => {
                        let table = 'Atividades';
                        this._db.dropTable(table);
                    }, 1);
                }
            };
            exports_1("AtividadeController", AtividadeController);
        }
    };
});
