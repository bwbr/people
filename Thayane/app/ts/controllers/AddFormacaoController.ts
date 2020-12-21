import { AddFormacoesView } from '../views/index';
import { AddFormacoes, AddFormacao } from '../models/index';

export class AddFormacaoController{
    private _inputFormacaoTitulo: JQuery;
    private _inputFormacaoDescricao: JQuery;
    private _formacoes = new AddFormacoes();
    private _numA: number;
    private _numB: number;
    private _numC: number;
    private _addFormacoesView = new AddFormacoesView('#addAqui');
    
    constructor(){
        this._inputFormacaoTitulo = $('#novaFormacaoTitulo');
        this._inputFormacaoDescricao = $('#novaFormacaoDescricao');
        this._numA = 0;
        this._numB = 0;
        this._numC = 0;
        this._addFormacoesView.update(this._formacoes);
    }

    adiciona(event: Event){
        event.preventDefault();

        const addFormacao = new AddFormacao(
            this._inputFormacaoTitulo.val(),
            this._inputFormacaoDescricao.val(),
            this._numA,
            this._numB,
            this._numC
        );

        this._formacoes.adiciona(addFormacao);
        this._addFormacoesView.update(this._formacoes);
        this._limparFormulario();
    }

    _limparFormulario(){
        this._inputFormacaoTitulo = $('#novaFormacaoTitulo').val("");
        this._inputFormacaoDescricao = $('#novaFormacaoDescricao').val("");
    }
}