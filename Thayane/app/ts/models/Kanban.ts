import { AddFormacao } from './AddFormacao';
import { AddFormacoes } from './AddFormacoes';

export class Kanban {
    aFazer: AddFormacoes = new AddFormacoes();
    fazendo: AddFormacoes = new AddFormacoes();
    feitas: AddFormacoes = new AddFormacoes();
    
    adiciona(formacao: AddFormacao){
        this.aFazer.adiciona(formacao);
    }

    removeAFazer(formacao: AddFormacao){
        this.aFazer.remover(formacao);
    }

    removeFazendo(formacao: AddFormacao){
        this.fazendo.remover(formacao);
    }

    removeFeitas(formacao: AddFormacao){
        this.feitas.remover(formacao);
    }

    pop(title: string): AddFormacao {
        let card = this.aFazer.pop(title);
        if (card != undefined)  return card;

        card = this.fazendo.pop(title);
        if (card != undefined)  return card;

        card = this.feitas.pop(title);
        if (card != undefined)  return card;
        
        return undefined
    }
}