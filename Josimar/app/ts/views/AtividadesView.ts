import {View} from './View';
import {Atividades} from '../models/Atividades';

export class AtividadesView extends View<Atividades> {

    template (model: Atividades): string {

        return `
        
            ${model.paraArray().map(atividade =>
                ` 
                <!--Begin Activity--> 

                <div id="${atividade.id}" class="card activity mb-1 show" draggable="true" data-toggle="collapse" data-target="#collapse-${atividade.id}" aria-expanded="false" aria-controls="collapse-${atividade.id}">
                    <div class="card-header" id="heading-${atividade.id}">
                        <div id="titulo-activity" class="mb-0 d-flex justify-content-between collapsed">
                          ${atividade.titulo}
                          <div class="d-flex justify-content-end">
                              <div id="collapse-${atividade.id}" class="collapse mr-3 fade">
                                <div href="" id="edit_btn" class="btn pt-0 pb-0 pl-2 pr-1 text-dark border-0" data-toggle="collapse" data-target="#cards" aria-expanded="false" aria-controls="cards">
                                    <i class="fas fa-edit"></i>
                                </div>                                
                                <div id="trash_btn" class="btn pt-0 pb-0 pl-2 pr-1 text-dark border-0" data-activity="${atividade.id}">
                                    <i class="fas fa-trash"></i>
                                </div>
                              </div>
                              <div id="collapse-${atividade.id}" class="collapse fade"> 
                              <i class="fas fa-compress-alt"></i>
                              </div>
                              <div id="collapse-${atividade.id}" class="collapse fede show">
                              <i class="fas fa-expand-alt"></i>
                              </div>
                          </div>                                
                        </div>
                    </div>
                    
                    <div id="collapse-${atividade.id}" class="collapse" aria-labelledby="heading-${atividade.id}">
                        <div class="card-body text-justify">
                        ${atividade.descricao}
                        </div>
                        <div class="card-footer bg-wight d-flex justify-content-between">

                        <!--Icones de navegação entre os cards-->

                        <div id="back" data-activity="${atividade.id}" class="btn btn-sm bg-light text-dark"><i class="fas fa-chevron-left"></i></div>
                        <div id="next" data-activity="${atividade.id}" class="btn btn-sm bg-light text-dark"><i class="fas fa-chevron-right"></i></div>
                        </div>
                    </div>

                    <!--End Activity-->  

                </div>`
            ).join('')}`;        
    }
}