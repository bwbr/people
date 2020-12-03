class AddFormacoes {
    constructor() {
        this._formacoes = [];
    }
    adiciona(formacao) {
        this._formacoes.push(formacao);
    }
    paraArray() {
        return [].concat(this._formacoes);
    }
}
