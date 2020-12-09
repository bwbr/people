class Atividade{

    constructor(private _id: number, private _titulo: string, private _descricao: string, private _idCard: string){}

    get id(){
        return this._id;
    }

    get titulo(){
        return this._titulo;
    }

    get descricao(){
        return this._descricao;
    }

    get idCard(){
        return this._idCard;
    }

}

