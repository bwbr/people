class AddFormacaoController{
    private _inputFormacao: HTMLInputElement;
    private _formacoes = new AddFormacoes();
    private _addFormacoesView = new AddFormacoesView('#addAqui')
    
    constructor(){
        this._inputFormacao = <HTMLInputElement>document.querySelector('#novaFormacao');
        this._addFormacoesView.update(this._formacoes);
    }

    adiciona(event: Event){
        event.preventDefault();

        const addFormacao = new AddFormacao(
            this._inputFormacao.value
        );

        this._formacoes.adiciona(addFormacao);
        this._addFormacoesView.update(this._formacoes);
    }
}