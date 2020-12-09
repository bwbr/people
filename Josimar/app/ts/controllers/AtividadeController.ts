class AtividadeController {

        private _inputId: HTMLInputElement;
        private _inputTitulo: HTMLInputElement;
        private _inputDescricao: HTMLInputElement; 
        private _inputIdCard: HTMLInputElement;
        private _atividades = new Atividades();
        private _atividadesView = new AtividadesView('[data-card]');
        private _mensagemView = new MensagemView('#mensagemView');

        constructor(){
            this._inputId = <HTMLInputElement>document.querySelector('#id');
            this._inputTitulo = <HTMLInputElement>document.querySelector('#titulo');
            this._inputDescricao = <HTMLInputElement>document.querySelector('#descricao');;
            this._inputIdCard = <HTMLInputElement>document.querySelector('#idCard');
            this._atividadesView.update(this._atividades);
        }

        adiciona(event: Event){
            event.preventDefault();

            const atividade = new Atividade(
                parseInt(this._inputId.value),
                this._inputTitulo.value,
                this._inputDescricao.value, 
                this._inputIdCard.value
            );         
            
            this._atividades.adiciona(atividade);

            this._atividadesView.update(this._atividades);
            this._mensagemView.update('Atividade adicionada com sucesso!');

        }

}