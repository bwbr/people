import { FormacaoDaoAFazer, FormacaoDaoFazendo, FormacaoDaoFeitas } from '../dao/index';
import { AddFormacao } from '../models/index';
import { Kanban } from '../models/Kanban';
import { KanbanView } from '../views/KanbanView';

export class MoverKanban{
    public eu: JQuery; 
    private _addKanbanView = new KanbanView('');
    public dao: any;

    private formacaoID: string;
    private formacaoTitulo: string;
    private formacaoDescricao: string;
    private formacaoA: string;
    private formacaoB: string;
    private title: string;
    private card: any;

    constructor(readonly kanban: Kanban){
    }
    
    pegarInformacoes(){
        this.formacaoID = $(this.eu).data('key');
        this.formacaoTitulo = $(this.eu).data('titulo');
        this.formacaoDescricao = $(this.eu).data('descricao');
        this.formacaoA = $(this.eu).data('a');
        this.formacaoB = $(this.eu).data('title');

        this.title = this.eu.data('title'); 
        this.card = this.kanban.pop(this.title);
        if (this.card == undefined)  return;
    }

    addFormacao(){
        return new AddFormacao(
            this.formacaoTitulo,
            this.formacaoDescricao,
            parseInt(this.formacaoA),
            this.formacaoB
        )
    }

    deletar(tabela:string){
        this.dao = ConnectionFactory.getConnection()
            .then((connection: any) => {
                connection.transaction([tabela], 'readwrite')
                    .objectStore(tabela)
                    .delete(this.formacaoID);              
            })
    }

    //Adicionar em:
    aFazer(){
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
            })
    }
    fazendo(){
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
            })
    }
    feitas(){
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
            })
    }

    //Mover de x para y:
        //A fazer
    moverAFazerFazendo(tabela:string){
        this.pegarInformacoes();        
        this.deletar(tabela);
        this.fazendo();  
        this.kanban.removeAFazer(this.card);
    }
    moverAFazerFeitas(tabela:string){
        this.pegarInformacoes();        
        this.deletar(tabela);
        this.feitas();
        this.kanban.removeAFazer(this.card);
    }        
        //Fazendo
    moverFazendoFeitas(tabela:string){
        this.pegarInformacoes();        
        this.deletar(tabela);
        this.feitas();
        this.kanban.removeFazendo(this.card);
    }
    moverFazendoAFazer(tabela:string){
        this.pegarInformacoes();        
        this.deletar(tabela);
        this.aFazer();
        this.kanban.removeFazendo(this.card);
    }
        //Feitas
    moverFeitasFazendo(tabela:string){
        this.pegarInformacoes();        
        this.deletar(tabela);
        this.fazendo();
        this.kanban.removeFeitas(this.card);
    }
    moverFeitasAFazer(tabela:string){
        this.pegarInformacoes();        
        this.deletar(tabela);
        this.aFazer();
        this.kanban.removeFeitas(this.card);
    }
}