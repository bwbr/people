class AtividadeController {
    constructor() {
        this._atividades = new Atividades();
        this._atividadesView = new AtividadesView('[data-card="ActivitiesView"]');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputId = document.querySelector('#id');
        this._inputTitulo = document.querySelector('#titulo');
        this._inputDescricao = document.querySelector('#descricao');
        ;
        this._inputIdCard = document.querySelector('#idCard');
        this._atividadesView.update(this._atividades);
    }
    adiciona(event) {
        event.preventDefault();
        const atividade = new Atividade(parseInt(this._inputId.value), this._inputTitulo.value, this._inputDescricao.value, this._inputIdCard.value);
        this._atividades.adiciona(atividade);
        this._atividadesView.update(this._atividades);
        this._mensagemView.update('Atividade adicionada com sucesso!');
    }
}
