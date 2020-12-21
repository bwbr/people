import { Kanban } from '../models/Kanban';
import { KanbanView } from '../views/KanbanView';

export class MoverKanban{
    public eu: JQuery;
    private biso: JQuery;
    private novoBiso: JQuery;
    
    private _addKanbanView = new KanbanView('');


    constructor(
        readonly kanban: Kanban
    )  {

    }

    moverAFazer(){
        let title = this.eu.data('title'); 
        let card = this.kanban.pop(title);
        if (card == undefined) {
            return;
        }
        this.kanban.afazer.adiciona(card);

        this._addKanbanView.update(this.kanban);
       
    }

    moverFazendo(){
        console.log("Movendo...");
        this.biso = this.eu.parents('.formacoes');
        this.novoBiso = $('#nav-link-kanban_fazendo');
        this.novoBiso.append(this.biso);
        this.biso = this.novoBiso;
    }

    moverFeitas(){
        console.log("Movendo...");
        this.biso = this.eu.parents('.formacoes');
        this.novoBiso = $('#nav-link-kanban_feitas');
        this.novoBiso.append(this.biso);
        this.biso = this.novoBiso;
    }
}