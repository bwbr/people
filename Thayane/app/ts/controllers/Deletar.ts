import { Kanban } from '../models/Kanban';
import { KanbanView } from '../views/KanbanView';

export class Deletar{
    public eu: JQuery;
    private pai: JQuery; 
    private _addKanbanView = new KanbanView('');
    public dao: any;
    private title: string;
    private card: any;

    constructor(readonly kanban: Kanban){   
    }

    //Deletar Kanban
    deletarKanban(tabela:string){
        let formacaoID: string = $(this.eu).data('key')
        this.dao = ConnectionFactory
            .getConnection()
            .then((conection: any) => {
                conection.transaction([tabela], 'readwrite')
                    .objectStore(tabela)
                    .delete(formacaoID);                
            })
            .catch(erro => erro); 

        this.title = this.eu.data('title'); 
        this.card = this.kanban.pop(this.title);
        if (this.card == undefined)  return console.log("Não encontrado");
    }    
    deletarAFazer(tabela:string){
        this.deletarKanban(tabela);        
        this.kanban.aFazer.remover(this.card);
        this._addKanbanView.update(this.kanban);
    }
    deletarFazendo(tabela:string){
        this.deletarKanban(tabela);        
        this.kanban.fazendo.remover(this.card);
        this._addKanbanView.update(this.kanban);
    }
    deletarFeitas(tabela:string){
        this.deletarKanban(tabela);        
        this.kanban.feitas.remover(this.card);
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