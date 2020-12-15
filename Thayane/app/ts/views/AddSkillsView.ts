import { View } from './View';
import { AddSkills } from '../models/index';

export class AddSkillsView extends View<AddSkills>{
    template(model: AddSkills): string{
        return `
            ${model.paraArray().map(skill =>
            `
                <li class="list-group-item d-flex justify-content-between align-items-center">${skill.skillTitulo}
                    <i class="iconeEditar"></i>    
                    <i class="iconeDeletar"></i>
                    
                    <div class="progress">
                        <div class="progress-bar bg-success" style="width: ${skill.skillPorcentagem}%"></div>
                        <div class="progress-bar bg-danger" style="width:${skill.skillFalta}%"></div>
                    </div>
                </li>
            `
            ).join('')}
        `
    }
}