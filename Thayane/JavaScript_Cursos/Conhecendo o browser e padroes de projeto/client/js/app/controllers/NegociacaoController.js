class NegociacaoController{
    constructor(){
        let $ = document.querySelector;
        this._inputData = $('[data-form-group-data]');
        this._inputQuantidade = $('[data-form-group-quantidade]');
        this._inputValor = $('[data-form-group-valor]');
    }
    
    adiciona(event){
        event.preventDefault();
        
        let data = new Date(
            ...this._inputData.value.split('-').map((item, indice) => item - indice % 2)
        );

        let negociaco = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
    }
}