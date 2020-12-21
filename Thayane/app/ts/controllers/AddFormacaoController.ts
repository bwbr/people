import { KanbanView } from '../views/index';
import { AddFormacoes, AddFormacao, Kanban } from '../models/index';

export class AddFormacaoController{
    private _inputFormacaoTitulo: JQuery;
    private _inputFormacaoDescricao: JQuery;
    private _numA: number;
    private _numB: number;
    private _addKanbanView = new KanbanView('#nav-link-kanban_afazer');
    
    constructor(
        readonly _kanban: Kanban
    ){
        this._inputFormacaoTitulo = $('#novaFormacaoTitulo');
        this._inputFormacaoDescricao = $('#novaFormacaoDescricao');
        this._numA = 0;
        this._numB = 0;
        this._addKanbanView.update(this._kanban);
    }

    adiciona(event: Event){
        console.log('teste');
        event.preventDefault();

        const addFormacao = new AddFormacao(
            this._inputFormacaoTitulo.val(),
            this._inputFormacaoDescricao.val(),
            this._numA,
            this._numB
        );

        this._kanban.adiciona(addFormacao);
        this._addKanbanView.update(this._kanban);
        console.log(this._kanban);
        this._limparFormulario();
    }

    _limparFormulario(){
        this._inputFormacaoTitulo = $('#novaFormacaoTitulo').val("");
        this._inputFormacaoDescricao = $('#novaFormacaoDescricao').val("");
    }
}