class AddFormacaoController {
    constructor() {
        this._formacoes = new AddFormacoes();
        this._addFormacoesView = new AddFormacoesView('#addAqui');
        this._inputFormacao = $('#novaFormacao');
        this._numA = 0;
        this._numB = 0;
        this._addFormacoesView.update(this._formacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const addFormacao = new AddFormacao(this._inputFormacao.val(), this._numA, this._numB);
        this._formacoes.adiciona(addFormacao);
        this._addFormacoesView.update(this._formacoes);
    }
}
