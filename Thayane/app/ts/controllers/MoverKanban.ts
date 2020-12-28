import { Kanban } from '../models/Kanban';
import { KanbanView } from '../views/KanbanView';

export class MoverKanban{
    public eu: JQuery; 
    private _addKanbanView = new KanbanView('');
    
    constructor(readonly kanban: Kanban){
    }
    
    //A fazer
    moverAFazerFazendo(){
        console.log("Movendo...");
        
        let title = this.eu.data('title'); 
        let card = this.kanban.pop(title);
        if (card == undefined)  return;
        
        this.kanban.fazendo.adiciona(card);
        this.kanban.aFazer.remover(card);
        this._addKanbanView.update(this.kanban);
    }
    moverAFazerFeitas(){
        console.log("Movendo...");
        
        let title = this.eu.data('title'); 
        let card = this.kanban.pop(title);
        if (card == undefined)  return;
        
        this.kanban.feitas.adiciona(card);
        this.kanban.aFazer.remover(card);
        this._addKanbanView.update(this.kanban);
    }
    
    //Fazendo
    moverFazendoFeitas(){
        console.log("Movendo...");
        
        let title = this.eu.data('title'); 
        let card = this.kanban.pop(title);
        if (card == undefined)  return;
        
        this.kanban.feitas.adiciona(card);
        this.kanban.fazendo.remover(card);
        this._addKanbanView.update(this.kanban);
    }
    moverFazendoAFazer(){
        console.log("Movendo...");
        
        let title = this.eu.data('title'); 
        let card = this.kanban.pop(title);
        if (card == undefined)  return;
        
        this.kanban.aFazer.adiciona(card);
        this.kanban.fazendo.remover(card);
        this._addKanbanView.update(this.kanban);
    }

    //Feitas
    moverFeitasFazendo(){
        console.log("Movendo...");
        
        let title = this.eu.data('title'); 
        let card = this.kanban.pop(title);
        if (card == undefined)  return;
        
        this.kanban.fazendo.adiciona(card);
        this.kanban.feitas.remover(card);
        this._addKanbanView.update(this.kanban);
    }
    moverFeitasAFazer(){
        console.log("Movendo...");
        
        let title = this.eu.data('title'); 
        let card = this.kanban.pop(title);
        if (card == undefined)  return;
        
        this.kanban.aFazer.adiciona(card);
        this.kanban.feitas.remover(card);
        this._addKanbanView.update(this.kanban);
    }
}