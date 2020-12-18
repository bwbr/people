import { AddFormacao } from './AddFormacao';

export class AddFormacoes{
    private _formacoes: AddFormacao[] = [];

    adiciona(formacao: AddFormacao){
        this._formacoes.push(formacao);
    }

    paraArray(): AddFormacao[]{
        return ([] as AddFormacao[]).concat(this._formacoes);
    }

    /*paraTexto(): void {
        console.log('-- Impressão --');
        console.log(JSON.stringify(this._formacoes));
    }*/
}