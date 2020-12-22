import { Kanban } from '../models/Kanban';
import { KanbanView } from '../views/KanbanView';

export class BotoesDeletarEditar{
    public eu: JQuery;
    private pai: JQuery;
    private irmao: JQuery;
    private sobrinho: JQuery;
    private tio: JQuery;
    private biso: JQuery;
    private tioBiso: JQuery;
    private primo2: JQuery;  
    private _addKanbanView = new KanbanView('');
    
    constructor(readonly kanban: Kanban){
    }
    
    //Deletar Kanban
    deletarAFazer(){
        console.log("Removendo...");
        
        let title = this.eu.data('title'); 
        let card = this.kanban.pop(title);
        if (card == undefined)  return console.log("Não encontrado");
        
        this.kanban.aFazer.removeAFazer(card);
        this._addKanbanView.update(this.kanban);
    }
    deletarFazendo(){
        console.log("Removendo...");
        
        let title = this.eu.data('title'); 
        let card = this.kanban.pop(title);
        if (card == undefined)  return console.log("Não encontrado");
        
        this.kanban.fazendo.removeFazendo(card);
        this._addKanbanView.update(this.kanban);
    }
    deletarFeitas(){
        console.log("Removendo...");
        
        let title = this.eu.data('title'); 
        let card = this.kanban.pop(title);
        if (card == undefined)  return console.log("Não encontrado");
        
        this.kanban.feitas.removeFeitas(card);
        this._addKanbanView.update(this.kanban);
    }

    //Editar Kanban
    editar(){
        console.log("Editando...");
        this.pai = this.eu.parent();
        this.tio = this.pai.siblings('.quebrarTexto');
        this.tio.text('Oi');
        this.biso = this.pai.parents('.card-header');
        this.tioBiso = this.biso.siblings();
        this.primo2 = this.tioBiso.children('.card-body');
        this.primo2.text('Olá');
    }

    //Skills
    deletarSkill(){
        console.log("Deletando...");
        this.pai = this.eu.parent();
        this.pai.remove();
    }

    editarSkill(){
        console.log("Editando...");
        this.pai = this.eu.parent();
        this.pai.text('TS');
        this.irmao = this.eu.siblings('.progress');
        this.sobrinho = this.irmao.children('.bg-success');
        this.sobrinho.css('width:50%');
    }
}