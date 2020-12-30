import { FormacaoDaoAFazer, FormacaoDaoFazendo, FormacaoDaoFeitas } from '../dao/index';
import { AddFormacao } from '../models/index';
import { Kanban } from '../models/Kanban';
import { KanbanView } from '../views/KanbanView';

export class Editar{
    public eu: JQuery;
    private pai: JQuery;
    private sobrinho: JQuery;
    private tio: JQuery;
    private primo2: JQuery;  
    private _addKanbanView = new KanbanView('');
    public dao: any;

    private algoID: string;
    private algoTitulo: string;
    private formacaoDescricao: string;
    private formacaoA: string;
    private formacaoB: string;
    private sucesso: string;
    private title: string;
    private card: any;

    constructor(readonly kanban: Kanban){   
    }

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

    pegarInformacoesSkills(){
        this.algoID = $(this.eu).data('key');
        this.algoTitulo = $(this.eu).data('titulo');
        this.sucesso = $(this.eu).data('sucesso');
    }

    addFormacao(){
        return new AddFormacao(
            "this.algoTitulo",
            "this.formacaoDescricao",
            parseInt(this.formacaoA),
            this.formacaoB
        )
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
    editarSkill(){
        console.log("Editando...");
        this.pai = this.eu.parent();
        this.pai.text('TS');
        this.sobrinho = this.eu.siblings('.progress').children('.bg-success');
        this.sobrinho.css('width:50%');
    }
}