import { Kanban } from '../models/Kanban';
import { KanbanView } from '../views/KanbanView';

export class Deletar{
    public eu: JQuery;
    private pai: JQuery; 
    private _addKanbanView = new KanbanView('');
    public dao: any;

    constructor(readonly kanban: Kanban){   
    }
    
    //Deletar Kanban
    deletarAFazer(tabela:string){
        let formacaoID: string = $(this.eu).data('key')
        this.dao = ConnectionFactory
            .getConnection()
            .then((conection: any) => {
                conection.transaction([tabela], 'readwrite')
                    .objectStore(tabela)
                    .delete(formacaoID);                
            })
            .catch(erro => erro); 
        
        let title = this.eu.data('title'); 
        let card = this.kanban.pop(title);
        if (card == undefined)  return console.log("Não encontrado");
        
        this.kanban.aFazer.remover(card);
        this._addKanbanView.update(this.kanban);
    }
    deletarFazendo(){
        console.log("Removendo...");
        
        let title = this.eu.data('title'); 
        let card = this.kanban.pop(title);
        if (card == undefined)  return console.log("Não encontrado");
        
        this.kanban.fazendo.remover(card);
        this._addKanbanView.update(this.kanban);
    }
    deletarFeitas(){
        console.log("Removendo...");
        
        let title = this.eu.data('title'); 
        let card = this.kanban.pop(title);
        if (card == undefined)  return console.log("Não encontrado");
        
        this.kanban.feitas.remover(card);
        this._addKanbanView.update(this.kanban);
    }

    //Skills
    deletarSkill(tabela:string){  
        let skillID: string = $(this.eu).data('key')
        this.dao = ConnectionFactory
            .getConnection()
            .then((conection: any) => {
                conection.transaction([tabela], 'readwrite')
                    .objectStore(tabela)
                    .delete(skillID);                
            }).catch(erro => erro);                            

        this.pai = this.eu.parent();
        this.pai.remove();
    }
}