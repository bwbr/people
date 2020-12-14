import { AddFormacoesView } from '../views/AddFormacoesView';
import { AddFormacoes } from '../models/AddFormacoes';
import { AddFormacao } from '../models/AddFormacao';

export class AddFormacaoController{
    private _inputFormacao: JQuery;
    private _formacoes = new AddFormacoes();
    private _numA: number;
    private _numB: number;
    private _addFormacoesView = new AddFormacoesView('#addAqui')
    
    constructor(){
        this._inputFormacao = $('#novaFormacao');
        this._numA = 0;
        this._numB = 0;
        this._addFormacoesView.update(this._formacoes);
    }

    adiciona(event: Event){
        event.preventDefault();

        const addFormacao = new AddFormacao(
            this._inputFormacao.val(),
            this._numA,
            this._numB
        );

        this._formacoes.adiciona(addFormacao);
        this._addFormacoesView.update(this._formacoes);
        this._limparFormulario();
    }

    _limparFormulario(){
        this._inputFormacao = $('#novaFormacao').val("");
    }
}