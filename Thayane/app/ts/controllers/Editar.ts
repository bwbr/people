import { FormacaoDaoAFazer, FormacaoDaoFazendo, FormacaoDaoFeitas, SkillDao } from '../dao/index';
import { AddFormacao, AddSkill, AddSkills, Kanban } from '../models/index';
import { AddSkillsView, KanbanView } from '../views/index';
import { AddSkillController }  from './AddSkillController';

export class Editar{
    public eu: JQuery;  
    private _addKanbanView = new KanbanView('');
    private _addSkillView = new AddSkillsView('');
    private _skillController = new AddSkillController();
    public dao: any;

    private algoID: string;
    private algoTitulo: string;
    private formacaoDescricao: string;
    private formacaoA: string;
    private formacaoB: string;
    private sucesso: string;
    private title: string;
    private card: any;

    constructor(readonly kanban: Kanban, readonly skill: AddSkills){   
    }

    deletar(tabela:string){
        this.dao = ConnectionFactory.getConnection()
            .then((connection: any) => {
                connection.transaction([tabela], 'readwrite')
                    .objectStore(tabela)
                    .delete(this.algoID);              
            })
    }
    
    //Kanban
    pegarInformacoesKanban(){
        this.algoID = $(this.eu).data('key');
        this.algoTitulo = $(this.eu).data('titulo');
        this.formacaoDescricao = $(this.eu).data('descricao');
        this.formacaoA = $(this.eu).data('a');
        this.formacaoB = $(this.eu).data('title');

        this.title = this.eu.data('title'); 
        this.card = this.kanban.pop(this.title);
        if (this.card == undefined)  return;
    }
    addFormacao(){
        return new AddFormacao(
            "this.algoTitulo",
            "this.formacaoDescricao",
            parseInt(this.formacaoA),
            this.formacaoB
        )
    }

    editarAFazer(tabela:string){
        this.pegarInformacoesKanban();        
        this.deletar(tabela);
        this.dao = ConnectionFactory.getConnection()
            .then((connection: any) => {
                let formacao = this.addFormacao();
                new FormacaoDaoAFazer(connection)
                .adiciona(formacao)
                .then(formacaoID => {
                    formacao.id = formacaoID;
                    return formacao;
                })
                .then(() => {
                    this.kanban.adiciona(formacao)
                    this._addKanbanView.update(this.kanban)})
                    this.kanban.removeAFazer(this.card);
            })
    }
    editarFazendo(tabela:string){
        this.pegarInformacoesKanban();        
        this.deletar(tabela);
        this.dao = ConnectionFactory.getConnection()
            .then((connection: any) => {
                let formacao = this.addFormacao();
                new FormacaoDaoFazendo(connection)
                .adiciona(formacao)
                .then(formacaoID => {
                    formacao.id = formacaoID;
                    return formacao;
                })
                .then(() => {
                    this.kanban.adicionaFazendo(formacao)
                    this._addKanbanView.update(this.kanban)})
                    this.kanban.removeFazendo(this.card);
            })
    }
    editarFeitas(tabela:string){
        this.pegarInformacoesKanban();        
        this.deletar(tabela);
        this.dao = ConnectionFactory.getConnection()
            .then((connection: any) => {
                let formacao = this.addFormacao();
                new FormacaoDaoFeitas(connection)
                .adiciona(formacao)
                .then(formacaoID => {
                    formacao.id = formacaoID;
                    return formacao;
                })
                .then(() => {
                    this.kanban.adicionaFeitas(formacao)
                    this._addKanbanView.update(this.kanban)})
                    this.kanban.removeFeitas(this.card);
            })
    }

    //Skills
    pegarInformacoesSkills(){
        this.algoID = $(this.eu).data('key');
        this.algoTitulo = $(this.eu).data('titulo');
        this.sucesso = $(this.eu).data('sucesso');
    }
    addSkill(){
        return new AddSkill(
            "this.algoTitulo",
            50
        )
    }
    editarSkill(tabela: string){
        this.pegarInformacoesSkills();
        this.deletar(tabela);
        this.eu.parent().remove();

        this.dao = ConnectionFactory.getConnection()
        .then((connection: any) => {
            let skill = this.addSkill();
            new SkillDao(connection)
            .adiciona(skill)
            .then(skillID => {
                skill.id = skillID;
                return skill;
            })
            .then(() => this.skill.adiciona(skill))
            .then(()=> this._skillController.listarTodos())
        })
    }
}