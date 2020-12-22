import { AddFormacao } from './AddFormacao';

export class AddFormacoes{
    private _formacoes: AddFormacao[] = [];

    adiciona(formacao: AddFormacao){
        this._formacoes.push(formacao);
    }

    paraArray(): AddFormacao[]{
        return ([] as AddFormacao[]).concat(this._formacoes);
    }

    pop(title: string): AddFormacao {
        let card = this._formacoes.find(card => card.formacaoTitulo === title);
        // TODO remover da lista
        return card;
    }
    /*paraTexto(): void {
        console.log('-- Impressão --');
        console.log(JSON.stringify(this._formacoes));
    }*/
}