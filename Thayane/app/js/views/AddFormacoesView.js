class AddFormacoesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `
        <div class="card-header">
        ${model.paraArray().map(formacao => `
                <a class="card-link" data-toggle="collapse" href="#collapse">
                    ${formacao.formacao}
                </a>
            `)}
                </div>
                <div id="collapse" class="collapse" data-parent="#accordion_fazer">
                    <div class="card-body">
                        'Lorem ipsum...'
                    </div>
                </div>
            </div>
        `;
    }
}
