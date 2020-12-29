import { AddSkillsView } from '../views/index';
import { AddSkills, AddSkill } from '../models/index';
import { ModalController } from './ModalController';
import { SkillDao } from '../dao/index';

export class AddSkillController{
    private _inputSkillTitulo: JQuery = $('#novaSkillTitulo');
    private _inputSkillPorcentagem: JQuery = $('#novaSkillPorcentagem');
    private _modal = new ModalController();
    private _skills = new AddSkills();
    private _addSkillsView = new AddSkillsView('#novaSkill');
    
    constructor(){      
        ConnectionFactory
            .getConnection()
            .then((connection:any) => {
                return new SkillDao(connection)
            })
            .then(dao => dao.listaTodos())
            .then((skills: any) => {
                skills.forEach((skill:any) => this._skills.adiciona(skill));
                this._addSkillsView.update(this._skills);
            })
            .catch(erro => console.log(erro));
    }

    adiciona(event: Event){
        event.preventDefault();

        ConnectionFactory
        .getConnection()
        .then(connection => {
            let skill = this._addSkill();
            new SkillDao(connection)
            .adiciona(skill)
            .then(() => {
                if(this._inputSkillPorcentagem.val() < 0 || this._inputSkillPorcentagem.val() > 100){
                    this._modal.mostrarModal();
                    this._inputSkillPorcentagem = $('#novaSkillPorcentagem').val("");
                }
                else{
                    this._skills.adiciona(this._addSkill());
                    this._addSkillsView.update(this._skills);
                    this._limparFormulario();
                };
                this._limparFormulario();
            })
        }).catch(erro => console.log(erro));
    }

    _addSkill(){
        return new AddSkill(
            this._inputSkillTitulo.val(),
            this._inputSkillPorcentagem.val()
        );
    }

    _limparFormulario(){
        this._inputSkillTitulo = $('#novaSkillTitulo').val("");
        this._inputSkillPorcentagem = $('#novaSkillPorcentagem').val("");
    }
}