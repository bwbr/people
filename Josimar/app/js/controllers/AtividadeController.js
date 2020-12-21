System.register(["../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, db, AtividadeController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            db = window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024);
            AtividadeController = class AtividadeController {
                constructor() {
                    this._atividades = new index_2.Atividades();
                    this._atividadesView = new index_1.AtividadesView('[data-toDo]');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._inputTitulo = document.querySelector('#titulo');
                    this._inputDescricao = document.querySelector('#descricao');
                    this._atividadesView.update(this._atividades);
                }
                limpa() {
                    this._inputTitulo.value = '',
                        this._inputDescricao.value = '';
                }
                adiciona(event) {
                    event.preventDefault();
                    let table = 'Atividades';
                    let columns = `titulo, descricao, idCard`;
                    db.transaction(function (tx) {
                        tx.executeSql(`CREATE TABLE IF NOT EXISTS ${table} (id INTEGER PRIMARY KEY AUTOINCREMENT, ${columns})`);
                    });
                    let _id;
                    const atividade = new index_2.Atividade(_id, this._inputTitulo.value, this._inputDescricao.value, ('cardToDo'));
                    let values = `'${atividade.titulo}', '${atividade.descricao}', '${atividade.idCard}'`;
                    db.transaction(function (tx) {
                        tx.executeSql(`INSERT INTO ${table}(${columns}) VALUES (${values})`, []);
                    });
                    this._mensagemView.update('Atividade adicionada com sucesso!');
                    this.atualiza();
                    this.limpa();
                }
                edita(id) {
                    alert('chamou edite');
                    let table = 'Atividades';
                    let condition = `id = ${id}`;
                    db.transaction(function (tx) {
                        tx.executeSql(`SELECT * FROM ${table} WHERE ${condition}`, [], function (tx, results) {
                            var len = results.rows.length, i;
                            this._inputTitulo = document.querySelector('#titulo');
                            this._inputDescricao = document.querySelector('#descricao');
                            for (i = 0; i < len; i++) {
                                const atividade = new index_2.Atividade(results.rows.item(i).id, this._inputTitulo.value, this._inputDescricao.value, results.rows.item(i).idCard);
                                console.log(this._inputTitulo.value);
                                let values = `titulo = '${atividade.titulo}', descricao = '${atividade.descricao}', idCard = '${atividade.idCard}'`;
                                tx.executeSql(`UPDATE INTO ${table} SET ${values} WHERE (${condition})`);
                            }
                        }, null);
                    });
                    this._mensagemView.update('Atividade alterada com sucesso!');
                    this.atualiza();
                }
                lista() {
                    let table = 'Atividades';
                    db.transaction(function (tx) {
                        tx.executeSql(`SELECT * FROM ${table} ORDER BY id DESC`, [], function (tx, results) {
                            var len = results.rows.length, i;
                            const _atividades = new index_2.Atividades();
                            console.log(len);
                            for (i = 0; i < len; i++) {
                                const atividade = new index_2.Atividade(results.rows.item(i).id, results.rows.item(i).titulo, results.rows.item(i).descricao, results.rows.item(i).idCard);
                                if (results.rows.item(i).idCard == 'cardToDo') {
                                    const _atividadesView = new index_1.AtividadesView('.to-do');
                                    _atividades.adiciona(atividade);
                                    _atividadesView.update(_atividades);
                                }
                                if (results.rows.item(i).idCard == 'cardInprogress') {
                                    const _atividadesView = new index_1.AtividadesView('.card-in-progress');
                                    _atividades.adiciona(atividade);
                                    _atividadesView.update(_atividades);
                                }
                                if (results.rows.item(i).idCard == 'cardDone') {
                                    const _atividadesView = new index_1.AtividadesView('.card-done');
                                    _atividades.adiciona(atividade);
                                    _atividadesView.update(_atividades);
                                }
                            }
                        }, null);
                    });
                }
                dragDrop() {
                    let activity = document.querySelectorAll('.activity');
                    let card_body = document.querySelectorAll('.activities');
                    const controller = new AtividadeController();
                    let draggedActivity = null;
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
                                this.append(draggedActivity);
                                controller.atualiza();
                            });
                        }
                    }
                }
                badge() {
                    let total_toDo = $('.to-do .activity').length;
                    let total_inProgress = $('.in-progress .activity').length;
                    let total_done = $('.done .activity').length;
                    let total_activities = total_toDo + total_inProgress + total_done;
                    $('.badge-to-do').text(this.limitBadge(total_toDo));
                    $('.badge-in-progress').text(this.limitBadge(total_inProgress));
                    $('.badge-done').text(`${this.limitBadge(total_done)} / ${total_activities}`);
                }
                progressbar() {
                    let total_toDo = $('.to-do .activity').length;
                    let total_inProgress = $('.in-progress .activity').length;
                    let total_done = $('.done .activity').length;
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
                limitBadge(qtd) {
                    let limitQtd = "99+";
                    if (qtd > 99) {
                        return limitQtd;
                    }
                    else {
                        return qtd;
                    }
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
                atualiza() {
                    setTimeout(function () {
                        const controller = new AtividadeController();
                        controller.lista();
                        controller.dragDrop();
                        controller.progressbar();
                        controller.badge();
                    }, 1);
                }
            };
            exports_1("AtividadeController", AtividadeController);
        }
    };
});
