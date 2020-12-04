import { AddFormacao } from './AddFormacao';

export class AddFormacoes{
    private _formacoes: AddFormacao[] = [];

    adiciona(formacao: AddFormacao){
        this._formacoes.push(formacao);
    }

    paraArray(): AddFormacao[]{
        return [].concat(this._formacoes);
    }
}