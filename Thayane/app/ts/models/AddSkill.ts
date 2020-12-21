export class AddSkill{
    constructor(readonly skillTitulo: string, readonly skillPorcentagem: number){
    }

    get skillFalta(){
        return 100 - this.skillPorcentagem;
    }
}