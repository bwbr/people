import { AddFormacao } from './AddFormacao';

export class AddFormacoes{
    private _formacoes: AddFormacao[] = [];

    adiciona(formacao: AddFormacao){
        this._formacoes.push(formacao);
    }

    remover(formacao: AddFormacao){
        const index = this._formacoes.indexOf(formacao, 0);
        if (index > -1)
            this._formacoes.splice(index, 1);
    }

    paraArray(): AddFormacao[]{
        return ([] as AddFormacao[]).concat(this._formacoes);
    }

    pop(title: string): AddFormacao {
        let card = this._formacoes.find(card => card.b === title);
        return card;
    }
}