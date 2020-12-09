class Atividade {
    constructor(_id, _titulo, _descricao, _idCard) {
        this._id = _id;
        this._titulo = _titulo;
        this._descricao = _descricao;
        this._idCard = _idCard;
    }
    get id() {
        return this._id;
    }
    get titulo() {
        return this._titulo;
    }
    get descricao() {
        return this._descricao;
    }
    get idCard() {
        return this._idCard;
    }
}
