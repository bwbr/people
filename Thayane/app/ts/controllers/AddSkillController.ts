import { AddSkillsView } from '../views/index';
import { AddSkills, AddSkill } from '../models/index';
import { ModalController } from './ModalController';
import { SkillDao } from '../dao/index';

var skillIdInc = 1;
var podeAdd = true;

export class AddSkillController{
    private _inputSkillTitulo: JQuery = $('#novaSkillTitulo');
    private _inputSkillPorcentagem: JQuery = $('#novaSkillPorcentagem');
    private _modal = new ModalController();
    private _addSkillsView = new AddSkillsView('#novaSkill');
    
    constructor(){      
        this.listarTodos();
    }

    listarTodos(): Promise<any> {
        return ConnectionFactory
        .getConnection()
        .then((connection:any) => {
            return new SkillDao(connection)
        })
        .then(dao => dao.listaTodos())
        .then((skills: any) => {
            let skilllist = new AddSkills();
            skills.forEach((skill:any) => skilllist.adiciona(skill));
            this._addSkillsView.update(skilllist);
        })
        .catch(erro => console.log(erro));
    }

    adiciona(event: Event){
        event.preventDefault();

        ConnectionFactory
            .getConnection()
            .then(connection => {
                let skill = this._addSkill();
                if(podeAdd){
                    new SkillDao(connection)
                    .adiciona(skill)
                    .then( skillID =>  {
                        skill.id = skillID;
                        return skill;
                    })
                    .then(() => this._limparFormulario())
                    .then(() => this.listarTodos())                
                }
            }).catch(erro => console.log(erro));
    }

    _addSkill(){
        if(this._inputSkillPorcentagem.val() < 0 || this._inputSkillPorcentagem.val() > 100){
            this._modal.mostrarModal();
            this._inputSkillPorcentagem = $('#novaSkillPorcentagem').val("");
            podeAdd = false;
            return;
        }
        else{
            podeAdd = true;
            return new AddSkill(
                this._inputSkillTitulo.val(),
                this._inputSkillPorcentagem.val()
            );
        }
    }

    _limparFormulario(){
        this._inputSkillTitulo = $('#novaSkillTitulo').val("");
        this._inputSkillPorcentagem = $('#novaSkillPorcentagem').val("");
    }
}