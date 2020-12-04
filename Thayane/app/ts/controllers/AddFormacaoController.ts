class AddFormacaoController{
    private _inputFormacao: HTMLInputElement;
    private _formacoes = new AddFormacoes();
    private _numA: number;
    private _numB: number;
    private _addFormacoesView = new AddFormacoesView('#addAqui')
    
    constructor(){
        this._inputFormacao = <HTMLInputElement>document.querySelector('#novaFormacao');
        this._numA = 0;
        this._numB = 0;
        this._addFormacoesView.update(this._formacoes);
    }

    adiciona(event: Event){
        event.preventDefault();

        const addFormacao = new AddFormacao(
            this._inputFormacao.value,
            this._numA,
            this._numB
        );

        this._formacoes.adiciona(addFormacao);
        this._addFormacoesView.update(this._formacoes);
    }
}