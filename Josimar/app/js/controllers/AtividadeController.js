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
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._todoColumnView = new index_1.AtividadesView('[data-ToDo]');
                    this._doingColumnView = new index_1.AtividadesView('[data-InProgress]');
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
                        .then(atvidade => {
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
                    var atividades = this._atividades;
                    let conn = new Promise((resolve, reject) => {
                        this._db.conn().transaction((tx) => { console.log(tx); resolve(tx); }, (err) => {
                            console.log(err);
                            reject('failed to get transaction');
                        });
                    });
                    conn.then(tx => {
                        return new Promise((resolve, reject) => {
                            tx.executeSql(`SELECT ${columns} FROM ${table} ${condition}`, [], (tx, results) => {
                                console.log(results);
                                resolve(results);
                            }, (tx, err) => {
                                console.log(err);
                                reject(err);
                                return false;
                            });
                        });
                    }).then(results => {
                        let atividades = [];
                        console.log(`results.rows ${results.rows.length}`);
                        for (let i = 0; i < results.rows.length; i++) {
                            console.log(`i = ${i} l=${results.rows.length} ${results.rows.item(i)}`);
                            let v = results.rows.item(i);
                            console.log(v);
                            atividades.push(new index_2.Atividade(v.id, v.titulo, v.descricao, v.idCard));
                        }
                        return atividades;
                    })
                        .then(atividades => {
                        console.log(atividades);
                        let todo = atividades.filter(a => a.idCard === 'cardToDo').reduce((a, i) => {
                            a.adiciona(i);
                            return a;
                        }, new index_2.Atividades());
                        let cardInProgres = atividades.filter(a => a.idCard === 'cardInProgres').reduce((a, i) => {
                            a.adiciona(i);
                            return a;
                        }, new index_2.Atividades());
                        let cardDone = atividades.filter(a => a.idCard === 'cardDone').reduce((a, i) => {
                            a.adiciona(i);
                            return a;
                        }, new index_2.Atividades());
                        this._todoColumnView.update(todo, '');
                        this._doingColumnView.update(cardInProgres, '');
                        this._doneColumnView.update(cardDone, '');
                    });
                }
                badge(total_toDo, total_inProgress, total_done) {
                    let total_activities = total_toDo + total_inProgress + total_done;
                    $('.badge-to-do').text(this.limitBadge(total_toDo));
                    $('.badge-in-progress').text(this.limitBadge(total_inProgress));
                    $('.badge-done').text(`${this.limitBadge(total_done)} / ${total_activities}`);
                    this.progressbar(total_toDo, total_inProgress, total_done);
                }
                limitBadge(qtd) {
                    let limitQtd = "99+";
                    if (qtd > 99) {
                        return limitQtd;
                    }
                    else {
                        return qtd;
                    }
                }
                progressbar(total_toDo, total_inProgress, total_done) {
                    let total_activities = total_toDo + total_inProgress + total_done;
                    let percent_toDo = this.percent(total_toDo, total_activities);
                    let percent_inProgress = this.percent(total_inProgress, total_activities);
                    let percent_done = this.percent(total_done, total_activities);
                    $("#progress-to-do").css("width", `${(percent_toDo)}%`);
                    $("#progress-in-progress").css("width", `${(percent_inProgress)}%`);
                    $("#progress-done").css("width", `${(percent_done)}%`);
                    $(".percent-to-do").text(`${(percent_toDo).toFixed()}%`);
                    $(".percent-in-progress").text(`${(percent_inProgress).toFixed()}%`);
                    $(".percent-done").text(`${(percent_done).toFixed()}%`);
                    this.colorBgProgress(percent_toDo, document.querySelector("#progress-to-do"));
                    this.colorBgProgress(percent_inProgress, document.querySelector("#progress-in-progress"));
                    this.colorBgProgress(percent_done, document.querySelector("#progress-done"));
                }
                percent(n, total) {
                    let p;
                    if (p < 1) {
                        p = 0;
                    }
                    else {
                        p = (n / total) * 100;
                    }
                    return p;
                }
                colorBgProgress(percent_name, progress_name) {
                    if (parseFloat(percent_name) == 100) {
                        progress_name.classList.remove('progress-bar-blue');
                        progress_name.classList.add('progress-bar-success');
                    }
                    else {
                        progress_name.classList.remove('progress-bar-success');
                        progress_name.classList.add('progress-bar-blue');
                    }
                }
                drag_and_drop() {
                    var activity = $('.activity');
                    var card_body = $('.activities');
                    var draggedActivity = null;
                    for (let i = 0; i < activity.length; i++) {
                        let a = activity[i];
                        a.addEventListener('dragstart', function () {
                            draggedActivity = this;
                            this.classList.remove("show");
                            this.classList.add("hide");
                        });
                        a.addEventListener('dragend', function () {
                            draggedActivity.classList.remove("hide");
                            draggedActivity.classList.add("show");
                            draggedActivity = null;
                        });
                        for (let j = 0; j < card_body.length; j++) {
                            const cb = card_body[j];
                            cb.addEventListener('dragstart', function () {
                            });
                            cb.addEventListener('dragover', function (e) {
                                e.preventDefault();
                            });
                            cb.addEventListener('dragenter', function (e) {
                                e.preventDefault();
                            });
                            cb.addEventListener('drop', function (e) {
                                this.appendChild(draggedActivity);
                                const _atividades = new index_2.Atividades();
                                _atividades.mover(draggedActivity.id, this.id);
                            });
                        }
                    }
                }
                deleta(id) {
                    this._atividades.deleta(id);
                }
                atualiza() {
                }
                clear_all() {
                    let table = 'Atividades';
                    this._db.dropTable(table);
                }
            };
            exports_1("AtividadeController", AtividadeController);
        }
    };
});
