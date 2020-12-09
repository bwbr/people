class AtividadesView extends View {
    template(model) {
        return `
            ${model.paraArray().map(atividade => `<div id="${atividade.id}" class="card activity m-1 show" draggable="true">
                    <div class="card-header" id="heading-${atividade.id}">
                        <div class="btn btn-link mb-0 d-flex justify-content-between collapsed" data-toggle="collapse" data-target="#collapse-${atividade.id}" aria-expanded="false" aria-controls="collapse-${atividade.id}">
                            ${atividade.titulo}
                        <div class="d-flex justify-content-end">
                            <div id="collapse-${atividade.id}" class="collapse mr-3">
                            <a href="#" onclick="alert('vai editar?')"><i class="fas fa-edit"></i></a>
                            </div>
                            <div id="collapse-${atividade.id}" class="collapse"> 
                            <i class="fas fa-compress-alt"></i>
                            </div>
                            <div id="collapse-${atividade.id}" class="collapse show">
                            <i class="fas fa-expand-alt"></i>
                            </div>
                        </div>                                
                        </div>
                    </div>
                    <div id="collapse-${atividade.id}" class="collapse" aria-labelledby="heading-${atividade.id}" data-parent="#cardInProgress">
                        <div class="card-body text-justify">
                        ${atividade.descricao}
                        </div>
                        <div class="card-footer bg-wight d-flex justify-content-between">

                        <!--Icones de navegaÃ§Ã£o entre os cards-->

                        <a href="#" onclick="alert('Back card?')"><i class="fas fa-chevron-left"></i></a>
                        <a href="#" onclick="alert('Next card?')"><i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>`).join('')}`;
    }
}
