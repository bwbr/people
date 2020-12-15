System.register(["../services/localStorage", "../views/index", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var localStorage_1, index_1, index_2, AtividadeController;
    return {
        setters: [
            function (localStorage_1_1) {
                localStorage_1 = localStorage_1_1;
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
                    this._atividadesView = new index_1.AtividadesView('[data-card]');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._localStorage = new localStorage_1.LocalStorage();
                    this._inputTitulo = document.querySelector('#titulo');
                    this._inputDescricao = document.querySelector('#descricao');
                    this._atividadesView.update(this._atividades);
                }
                limpa() {
                    this._inputTitulo.value = '',
                        this._inputDescricao.value = '';
                }
                autoIncrement() {
                    let array = this._localStorage.listStorage('Atividades');
                    if (array != undefined) {
                        for (let chave in array) {
                            if (array.hasOwnProperty(chave)) {
                                array = array[chave];
                                return parseInt(array[array.length - 1].id) + 1;
                            }
                        }
                    }
                    else {
                        return 1;
                    }
                }
                adiciona(event) {
                    event.preventDefault();
                    const atividade = new index_2.Atividade(this.autoIncrement(), this._inputTitulo.value, this._inputDescricao.value, ('cardToDo'));
                    this._atividades.adiciona(atividade);
                    this._localStorage.addStorage('Atividades', this._atividades);
                    this._mensagemView.update('Atividade adicionada com sucesso!');
                    this.atualiza();
                    this.limpa();
                }
                edita(id, id_card) {
                    let array = this.buscaId(id);
                    console.log(array);
                    for (let chave in array) {
                        if (array.hasOwnProperty(chave)) {
                            array = array[chave];
                            for (let i = 0; i < array.length; i++) {
                                console.log('entrou em editar ', array[i].id);
                                this._localStorage.editStorage(array[i].idCard, id_card);
                            }
                        }
                    }
                }
                lista() {
                    let array = this._localStorage.listStorage('Atividades');
                    for (let chave in array) {
                        if (array.hasOwnProperty(chave)) {
                            array = array[chave];
                            for (let i = 0; i < array.length; i++) {
                                switch (array[i].idCard) {
                                    case 'cardToDo':
                                        console.log(array[i].idCard);
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
                buscaId(id) {
                    let array = this._localStorage.listStorage('Atividades');
                    for (let chave in array) {
                        if (array.hasOwnProperty(chave)) {
                            array = array[chave];
                            if (id != null) {
                                for (let i = 0; i <= array.length; i++) {
                                    if (array[i].id == id) {
                                        id = '';
                                        return array[i];
                                    }
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
                                controller.edita(draggedActivity.id, this.id);
                                controller.lista();
                                controller.badge();
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
                    let p = (n / total) * 100;
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
