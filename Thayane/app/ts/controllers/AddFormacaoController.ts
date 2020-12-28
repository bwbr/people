import { KanbanView } from '../views/index';
import { AddFormacoes, AddFormacao, Kanban } from '../models/index';
import { FormacaoDaoAFazer } from '../dao/index';

export class AddFormacaoController{
    private _inputFormacaoTitulo: JQuery = $('#novaFormacaoTitulo');
    private _inputFormacaoDescricao: JQuery = $('#novaFormacaoDescricao');
    private _numA: number = this._add.numA;
    private _numB: number = this._add.numA;
    private _numC: string = 'expandir' + 0;
    private _numD: string = 'expandir' + 0;
    private _addKanbanView = new KanbanView('#nav-link-kanban_afazer');
    
    constructor(readonly _kanban: Kanban, readonly _add: AddFormacao){
        ConnectionFactory
            .getConnection()
            .then((connection:any) => {
                return new FormacaoDaoAFazer(connection)
            })
            .then(dao => dao.listaTodos())
            .then((formacoes: any) => {
                formacoes.forEach((formacao:any) =>
                    this._kanban.aFazer.adiciona(formacao))
                    this._addKanbanView.update(this._kanban);
            });
    }
    
    adiciona(event: Event){
        event.preventDefault();
        
        ConnectionFactory
        .getConnection()
        .then(connection => {
            let formacao = this._addFormacao();
            new FormacaoDaoAFazer(connection)
            .adiciona(formacao)
            .then(() => {
                this._kanban.adiciona(this._addFormacao());
                this._addKanbanView.update(this._kanban);
                this._limparFormulario();
            })
        }).catch(erro => console.log(erro));
    }
    
    _addFormacao(){
        return new AddFormacao(
            this._inputFormacaoTitulo.val(),
            this._inputFormacaoDescricao.val(),
            this._numA,
            this._numB,
            this._numC,
            this._numD
        );
    }

    _limparFormulario(){
        this._inputFormacaoTitulo = $('#novaFormacaoTitulo').val("");
        this._inputFormacaoDescricao = $('#novaFormacaoDescricao').val("");
    }
}