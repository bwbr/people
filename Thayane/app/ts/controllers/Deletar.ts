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

    deletar(tabela:string){
        let algoID: string = $(this.eu).data('key')
        this.dao = ConnectionFactory
            .getConnection()
            .then((conection: any) => {
                conection.transaction([tabela], 'readwrite')
                    .objectStore(tabela)
                    .delete(algoID);                
            })
            .catch(erro => erro);
    }

    //Deletar Kanban
    deletarKanban(tabela:string){
        this.deletar(tabela);
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
        this.deletar(tabela);
        this.pai = this.eu.parent();
        this.pai.remove();
    }
}