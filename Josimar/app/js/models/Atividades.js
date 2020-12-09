class Atividades {
    constructor() {
        this._atividades = [];
    }
    adiciona(atividade) {
        this._atividades.push(atividade);
    }
    paraArray() {
        return [].concat(this._atividades);
    }
}
