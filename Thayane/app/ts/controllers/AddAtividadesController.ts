import { AddAtividadesView } from '../views/index';
import { AddAtividades, AddAtividade } from '../models/index';
import { AtividadeDao } from '../dao/AtividadesDao';

export class AddAtividadesController{
    public atividadeNome: JQuery;
    private _tipo:string;
    private _atividadeData: Date;
    private _atividades = new AddAtividades();
    private _addAtividadesView = new AddAtividadesView('#addAtividades');
    
    constructor(){      
        this.listarTodos();
    }
    listarTodos(): Promise<any> {
        return ConnectionFactory
            .getConnection()
            .then((connection:any) => {
                return new AtividadeDao(connection)
            })
            .then(dao => dao.listaTodos())
            .then((skills: any) => {
                let skilllist = new AddAtividades();
                skills.forEach((skill:any) => skilllist.adiciona(skill));
                this._addAtividadesView.update(skilllist);
            })
            .catch(erro => console.log(erro));
    }
    adiciona(){
        ConnectionFactory
            .getConnection()
            .then(connection => {
                let skill = this.adicionou();
                    new AtividadeDao(connection)
                    .adiciona(skill)
                    .then(() => this.listarTodos())
            }).catch(erro => console.log(erro));
    }
    adicionaMudanca(){
        ConnectionFactory
            .getConnection()
            .then(connection => {
                let skill = this.mudou();
                    new AtividadeDao(connection)
                    .adiciona(skill)
                    .then(() => this.listarTodos())
            }).catch(erro => console.log(erro));
    }


    adicionouSkill(){
        this.atividadeNome = $('#novaSkillTitulo');
        this._tipo = "Skill adicionada: ";
        this.adiciona();
    }
    adicionouFormacao(){
        this.atividadeNome = $('#novaFormacaoTitulo');
        this._tipo = "Formação adicionada: ";
        this.adiciona();
    }
    adicionou(){
        return new AddAtividade(
            this._tipo + this.atividadeNome.val(),
            new Date()
        );
    }

    removeuSkill(){
        this._tipo = "Skill removida";
        this.adicionaMudanca();
    }
    removeuFormacao(){
        this._tipo = "Formação removida";
        this.adicionaMudanca();
    }
    editouFormacao(){
        this._tipo = "Formação editada";
        this.adicionaMudanca();
    }
    editouSkill(){
        this._tipo = "Skill editada";
        this.adicionaMudanca();
    }
    mudou(){
        return new AddAtividade(
            this._tipo,
            this._atividadeData = new Date()
        );
    }
}