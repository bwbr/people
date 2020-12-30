import { KanbanView } from '../views/index';
import { AddFormacao, Kanban } from '../models/index';
import { FormacaoDaoAFazer } from '../dao/index';

var formacaoID = 1;

export class AddFormacaoController{
    private _inputFormacaoTitulo: JQuery = $('#novaFormacaoTitulo');
    private _inputFormacaoDescricao: JQuery = $('#novaFormacaoDescricao');
    private _numA: number = 0;
    private _numB: string;
    private _addKanbanView = new KanbanView('#nav-link-kanban_afazer');
    
    constructor(readonly _kanban: Kanban, readonly _add: AddFormacao){
        this._numB = 'expandir' + this._numA;
        this.listarTodos();        
    }

    listarTodos(): Promise<any> {
        return ConnectionFactory
        .getConnection()
        .then((connection:any) => {
            return new FormacaoDaoAFazer(connection)
        })
        .then(dao => dao.listaTodos())
        .then((formacoes: any) => {
            formacoes.forEach((formacao:any) => {
                this._kanban.aFazer.adiciona(formacao)
                this._numA++;
                this._numB = 'expandir' + this._numA;
            })
            this._addKanbanView.update(this._kanban);
        })
        .catch(erro => console.log(erro));
    }
    
    adiciona(event: Event){
        event.preventDefault();
        
        ConnectionFactory
        .getConnection()
        .then(connection => {
            let formacao = this._addFormacao();
            new FormacaoDaoAFazer(connection)
            .adiciona(formacao)
            .then(formacaoID => {
                formacao.id = formacaoID;
                return formacao;
            })
            .then(() => {
                this._kanban.adiciona(formacao);
                this._numA++;
                this._numB = 'expandir' + this._numA;                
            })
            .then(()=> this._addKanbanView.update(this._kanban))
            .then(()=> this._limparFormulario())
        }).catch(erro => console.log(erro));
    }
    
    _addFormacao(){
        return new AddFormacao(
            this._inputFormacaoTitulo.val(),
            this._inputFormacaoDescricao.val(),
            this._numA,
            this._numB
        );
    }

    _limparFormulario(){
        this._inputFormacaoTitulo = $('#novaFormacaoTitulo').val("");
        this._inputFormacaoDescricao = $('#novaFormacaoDescricao').val("");
    }
}