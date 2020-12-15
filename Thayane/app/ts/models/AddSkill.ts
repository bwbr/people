export class AddSkill{
    constructor(private _skillTitulo: string, private _skillPorcentagem: number){
    }

    get skillTitulo(){
        return this._skillTitulo;
    }

    get skillPorcentagem(){
        return this._skillPorcentagem;
    }

    get skillFalta(){
        return 100 - this.skillPorcentagem;
    }
}