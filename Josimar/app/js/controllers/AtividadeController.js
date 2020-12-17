System.register(["../services/DBStorage", "../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DBStorage_1, index_1, index_2, AtividadeController;
    return {
        setters: [
            function (DBStorage_1_1) {
                DBStorage_1 = DBStorage_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            AtividadeController = class AtividadeController {
                constructor() {
                    this._atividades = new index_2.Atividades();
                    this._atividadesView = new index_1.AtividadesView('[data-toDo]');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._dbStorage = new DBStorage_1.DBStorage();
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
                    let _id;
                    const atividade = new index_2.Atividade(_id, this._inputTitulo.value, this._inputDescricao.value, ('cardToDo'));
                    let table = 'Atividades';
                    let columns = `titulo, descricao, idCard`;
                    let values = `'${atividade.titulo}', '${atividade.descricao}', '${atividade.idCard}'`;
                    this._dbStorage.insert(table, columns, values);
                    this._atividades.adiciona(atividade);
                    this._atividadesView.update(this._atividades);
                    this._mensagemView.update('Atividade adicionada com sucesso!');
                    this.atualiza();
                    this.limpa();
                }
                edita(id, arrayAfter) {
                    let table = 'Atividades';
                    let condition = `id = ${id}`;
                    let arrayBefore = this._dbStorage.search(table, condition);
                    const atividade = new index_2.Atividade(arrayBefore.id = arrayAfter.id, arrayBefore.titulo = arrayAfter.titulo, arrayBefore.descricao = arrayAfter.descricao, arrayBefore.idCard = arrayAfter.idCard);
                    let values = `titulo = '${atividade.titulo}', 
                     descricao = '${atividade.descricao}', 
                     idCard = '${atividade.idCard}'`;
                    this._dbStorage.update(table, values, condition);
                    this._atividades.adiciona(atividade);
                    this._atividadesView.update(this._atividades);
                    this._mensagemView.update('Atividade alterada com sucesso!');
                    this.atualiza();
                    this.limpa();
                }
                lista() {
                    let table = 'Atividades';
                    let array = this._dbStorage.list(table);
                    for (let chave in array) {
                        if (array.hasOwnProperty(chave)) {
                            console.log(array.length);
                            for (let i = 0; i < array.length; i++) {
                                switch (array[i].idCard) {
                                    case 'cardToDo':
                                        this._atividadesView = new index_1.AtividadesView('.to-do');
                                        this._atividades.adiciona(array[i]);
                                        this._atividadesView.update(this._atividades);
                                        break;
                                    case 'cardInProgress':
                                        this._atividadesView = new index_1.AtividadesView('.card-in-progress');
                                        this._atividades.adiciona(array[i]);
                                        this._atividadesView.update(this._atividades);
                                        break;
                                    case 'cardDone':
                                        this._atividadesView = new index_1.AtividadesView('.card-done');
                                        this._atividades.adiciona(array[i]);
                                        this._atividadesView.update(this._atividades);
                                        break;
                                }
                            }
                        }
                    }
                }
                dragDrop() {
                    let activity = document.querySelectorAll('.activity');
                    let card_body = document.querySelectorAll('.activities');
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
                                const controller = new AtividadeController();
                                let table = 'Atividades';
                                let condition = `id = ${draggedActivity.id}`;
                                let arrayBefore = this._dbStorage.search(table, condition);
                                const atividade = new index_2.Atividade(arrayBefore.id, arrayBefore.titulo, arrayBefore.descricao, arrayBefore.idCard = this.id);
                                controller.edita(draggedActivity.id, atividade);
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
                        controller.badge();
                    }, 1);
                }
            };
            exports_1("AtividadeController", AtividadeController);
        }
    };
});
