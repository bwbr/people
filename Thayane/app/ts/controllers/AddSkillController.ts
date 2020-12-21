import { AddSkillsView } from '../views/index';
import { AddSkills, AddSkill } from '../models/index';
import { ModalController } from './ModalController';

export class AddSkillController{
    private _inputSkillTitulo: JQuery;
    private _inputSkillPorcentagem: JQuery;
    private _modal = new ModalController();
    private _skills = new AddSkills();
    private _addSkillsView = new AddSkillsView('#novaSkill');
    
    constructor(){
        this._inputSkillTitulo = $('#novaSkillTitulo');
        this._inputSkillPorcentagem = $('#novaSkillPorcentagem');
        this._addSkillsView.update(this._skills);
    }

    adiciona(event: Event){
        event.preventDefault();

        const addSkill = new AddSkill(
            this._inputSkillTitulo.val(),
            this._inputSkillPorcentagem.val()
        );

        if(this._inputSkillPorcentagem.val() < 0 || this._inputSkillPorcentagem.val() > 100){
            this._modal.mostrarModal();
            this._inputSkillPorcentagem = $('#novaSkillPorcentagem').val("");
        }
        else{
            this._skills.adiciona(addSkill);
            this._addSkillsView.update(this._skills);
            this._limparFormulario();
        }
    }

    _limparFormulario(){
        this._inputSkillTitulo = $('#novaSkillTitulo').val("");
        this._inputSkillPorcentagem = $('#novaSkillPorcentagem').val("");
    }
}