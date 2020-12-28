System.register(["../models/index", "./HttpService"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, HttpService_1, FormacaoService;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (HttpService_1_1) {
                HttpService_1 = HttpService_1_1;
            }
        ],
        execute: function () {
            FormacaoService = class FormacaoService {
                constructor() {
                    this._http = new HttpService_1.HttpService();
                }
                obterFormacoesAFazer() {
                    return new Promise((resolve, reject) => {
                        this._http
                            .get('formacoes/aFazer')
                            .then((formacoes) => {
                            console.log(formacoes);
                            resolve(formacoes.map((objeto) => new index_1.AddFormacao(objeto.formacaoTitulo, objeto.formacaoDescricao, objeto.numA, objeto.numB, objeto.numC, objeto.numD)));
                        })
                            .catch((erro) => {
                            console.log(erro);
                            reject('Não foi possível obter as formações a fazer');
                        });
                    });
                }
                obterFormacoesFazendo() {
                    return new Promise((resolve, reject) => {
                        this._http
                            .get('formacoes/fazendo')
                            .then((formacoes) => {
                            console.log(formacoes);
                            resolve(formacoes.map((objeto) => new index_1.AddFormacao(objeto.formacaoTitulo, objeto.formacaoDescricao, objeto.numA, objeto.numB, objeto.numC, objeto.numD)));
                        })
                            .catch((erro) => {
                            console.log(erro);
                            reject('Não foi possível obter as formações fazendo');
                        });
                    });
                }
                obterFormacoesFeitas() {
                    return new Promise((resolve, reject) => {
                        this._http
                            .get('formacoes/feitas')
                            .then((formacoes) => {
                            console.log(formacoes);
                            resolve(formacoes.map((objeto) => new index_1.AddFormacao(objeto.formacaoTitulo, objeto.formacaoDescricao, objeto.numA, objeto.numB, objeto.numC, objeto.numD)));
                        })
                            .catch((erro) => {
                            console.log(erro);
                            reject('Não foi possível obter as formações feitas');
                        });
                    });
                }
                obterFormacoes() {
                    return new Promise((resolve, reject) => {
                        Promise.all([
                            this.obterFormacoesAFazer(),
                            this.obterFormacoesFazendo(),
                            this.obterFormacoesFeitas()
                        ]).then((quadros) => {
                            let formacoes = quadros
                                .reduce((dados, quadros) => dados.concat(quadros), [])
                                .map((dado) => new index_1.AddFormacao(dado.formacaoTitulo, dado.formacaoDescricao, dado.numA, dado.numB, dado.numC, dado.numD));
                            resolve(formacoes);
                        }).catch(erro => reject(erro));
                    });
                }
            };
            exports_1("FormacaoService", FormacaoService);
        }
    };
});
