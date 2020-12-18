export class AddAtividade{
    constructor(private _atividadeNome: string, private _atividadeData: Date){
    }

    get atividadeNome(){
        return this._atividadeNome;
    }

    get atividadeData(){
        return this._atividadeData;
    }
}