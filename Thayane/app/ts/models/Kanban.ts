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
        this.aFazer.removeAFazer(formacao);
    }

    removeFazendo(formacao: AddFormacao){
        this.fazendo.removeFazendo(formacao);
    }

    removeFeitas(formacao: AddFormacao){
        this.feitas.removeFeitas(formacao);
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