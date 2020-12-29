export class AddSkill{
    public id : number;

    constructor(readonly skillTitulo: string, readonly skillPorcentagem: number){
    }

    get skillFalta(){
        return 100 - this.skillPorcentagem;
    }
}