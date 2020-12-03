class AddFormacaoController {
    constructor() {
        this._formacoes = new AddFormacoes();
        this._addFormacoesView = new AddFormacoesView('#addAqui');
        this._inputFormacao = document.querySelector('#novaFormacao');
        this._addFormacoesView.update(this._formacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const addFormacao = new AddFormacao(this._inputFormacao.value);
        this._formacoes.adiciona(addFormacao);
        this._addFormacoesView.update(this._formacoes);
    }
}
