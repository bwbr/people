class AddFormacoesView {
    constructor(seletor) {
        this._elemento = document.querySelector(seletor);
    }
    update(model) {
        this._elemento.innerHTML = this.template(model);
    }
    template(model) {
        return `
            ${model.paraArray().map(formacao => `
                <div class="card formacoes arrastar_js" draggable="true">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#collapse${formacao.numA}">
                            ${formacao.formacao}
                        </a>
                    </div>
            
                    <div id="collapse${formacao.numB}" class="collapse" data-parent="#accordion_fazer">
                        <div class="card-body">
                            'Lorem ipsum...'
                        </div>
                    </div>
                </div>
            `).join('')}
        `;
    }
}
