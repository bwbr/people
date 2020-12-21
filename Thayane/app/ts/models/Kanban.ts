import { AddFormacao } from './AddFormacao';
import { AddFormacoes } from './AddFormacoes';
export class Kanban {

    afazer: AddFormacoes = new AddFormacoes();
    feito: AddFormacoes = new AddFormacoes();
    fazendo: AddFormacoes = new AddFormacoes();
    
    adiciona(formacao: AddFormacao){
        this.afazer.adiciona(formacao);
    }

    pop(title: string): AddFormacao {
        let card = this.afazer.pop(title);
        if (card != undefined) {
            return card;
        }
        card = this.fazendo.pop(title);
        if (card != undefined) {
            return card;
        }
        card = this.feito.pop(title);
        if (card != undefined) {
            return card;
        }
        return undefined
    }
}