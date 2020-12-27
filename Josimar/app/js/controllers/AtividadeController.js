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
                    this._atividadesView = new index_1.AtividadesView('[data-toDo]');
                    this._mensagemView = new index_1.MensagemView('#mensagemView');
                    this._db = new DB_1.DB();
                    this._inputId = $('#id');
                    this._inputTitulo = $('#titulo');
                    this._inputDescricao = $('#descricao');
                    this._inputIdCard = $('#idCard');
                    this._atividadesView.update(this._atividades, '');
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
                    this._atividades.salva(atividade);
                    this._atividades.adiciona(atividade);
                    this._atividadesView.update(this._atividades, '');
                    this._mensagemView.update('Atividade adicionada com sucesso!', 'alert-wh');
                    this.limpa();
                }
                edita(event) {
                    event.preventDefault();
                    const atividade = new index_2.Atividade(this._inputId.val(), this._inputTitulo.val(), this._inputDescricao.val(), this._inputIdCard.val());
                    this._atividades.edita(atividade);
                    this._mensagemView.update('Atividade alterada com sucesso!', 'alert-success');
                    this.limpa();
                }
                lista() {
                    let table = 'Atividades';
                    let columns = '*';
                    let condition = `ORDER BY to DESC`;
                    this._db.conn().transaction(function (tx) {
                        tx.executeSql(`SELECT ${columns} FROM ${table} ${condition}`, [], function (tx, results) {
                            var len = results.rows.length, i;
                            const _atividades = new index_2.Atividades();
                            const _atividadesViewToDo = new index_1.AtividadesView('[data-toDo]');
                            const _atividadesViewInProgress = new index_1.AtividadesView('[data-InProgress]');
                            const _atividadesViewDone = new index_1.AtividadesView('[data-Done]');
                            console.log(len);
                            for (i = 0; i < len; i++) {
                                const atividade = new index_2.Atividade(results.rows.item(i).id, results.rows.item(i).titulo, results.rows.item(i).descricao, results.rows.item(i).idCard);
                                _atividades.adiciona(atividade);
                                switch (atividade.idCard) {
                                    case 'cardToDo':
                                        _atividadesViewToDo.update(_atividades, '');
                                        break;
                                    case 'cardInProgress':
                                        _atividadesViewInProgress.update(_atividades, '');
                                        break;
                                    case 'cardDone':
                                        _atividadesViewDone.update(_atividades, '');
                                        break;
                                }
                            }
                        }, null);
                    });
                }
                atualiza() {
                    const controller = new AtividadeController();
                    setTimeout(function () {
                        controller.lista();
                    }, 1);
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
