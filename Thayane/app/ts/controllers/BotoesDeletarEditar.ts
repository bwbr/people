import { Dao } from '../dao/Dao';
import { SkillDao } from '../dao/index';
import { AddSkills } from '../models/index';
import { Kanban } from '../models/Kanban';
import { AddSkillsView } from '../views/index';
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

    editarSkill(){
        console.log("Editando...");
        this.pai = this.eu.parent();
        this.pai.text('TS');
        this.irmao = this.eu.siblings('.progress');
        this.sobrinho = this.irmao.children('.bg-success');
        this.sobrinho.css('width:50%');
    }
}