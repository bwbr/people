import { AddSkill } from './AddSkill';

export class AddSkills{
    private _skills: AddSkill[] = [];

    adiciona(skill: AddSkill){
        this._skills.push(skill);
    }

    paraArray(): AddSkill[]{
        return [].concat(this._skills);
    }
}