import {View} from './View';
import {Atividades} from '../models/Atividades';

export class AtividadesView extends View<Atividades> {

    template (model: Atividades): string {

        return `
        
            ${model.paraArray().map(atividade =>
<<<<<<< Updated upstream
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
                ` 
                <!--Begin Activity--> 

                <div id="${atividade.id}" class="card activity mb-1 show" draggable="true" data-activity>
<<<<<<< Updated upstream
                    <div class="card-header" id="heading-${atividade.id}">
                        <div id="titulo-activity" class="mb-0 d-flex justify-content-between collapsed" data-toggle="collapse" data-target="#collapse-${atividade.id}" aria-expanded="false" aria-controls="collapse-${atividade.id}">
                          ${atividade.titulo}
                          <div class="d-flex justify-content-end">
                              <div id="collapse-${atividade.id}" class="collapse mr-3 fade">
                                <a href="" id="edit_btn" class="btn pt-0 pb-0 pl-2 pr-1 text-dark border-0" data-toggle="collapse" data-target="#editActivity${atividade.id}" aria-expanded="true" aria-controls="editActivity${atividade.id}">
                                    <i class="fas fa-edit"></i>
                                </a>
                              </div>
                              <div id="collapse-${atividade.id}" class="collapse fade"> 
                              <i class="fas fa-compress-alt"></i>
                              </div>
                              <div id="collapse-${atividade.id}" class="collapse fede show">
                              <i class="fas fa-expand-alt"></i>
                              </div>
                          </div>                                
=======
                `<div id="${atividade.id}" class="card activity mb-1 show" draggable="true">
                    <div class="card-header" id="heading-${atividade.id}">
                        <div class="btn btn-link mb-0 d-flex justify-content-between collapsed" data-toggle="collapse" data-target="#collapse-${atividade.id}" aria-expanded="false" aria-controls="collapse-${atividade.id}">
                            ${atividade.titulo}
                        <div class="d-flex justify-content-end">
                            <div id="collapse-${atividade.id}" class="collapse mr-3">
                            <a href="" id="edit_btn" class="btn pt-0 pb-0 pl-2 pr-1 bg-light text-dark" data-toggle="collapse" data-target="#editActivity${atividade.id}" aria-expanded="true" aria-controls="editActivity${atividade.id}">
                                <i class="fas fa-edit"></i>
                            </a>
                            </div>
                            <div id="collapse-${atividade.id}" class="collapse"> 
                            <i class="fas fa-compress-alt"></i>
                            </div>
                            <div id="collapse-${atividade.id}" class="collapse show">
                            <i class="fas fa-expand-alt"></i>
                            </div>
                        </div>                                
>>>>>>> Josimar
=======
                    <div class="card-header" id="heading-${atividade.id}">
                        <div id="titulo-activity" class="mb-0 d-flex justify-content-between collapsed" data-toggle="collapse" data-target="#collapse-${atividade.id}" aria-expanded="false" aria-controls="collapse-${atividade.id}">
                          ${atividade.titulo}
                          <div class="d-flex justify-content-end">
                              <div id="collapse-${atividade.id}" class="collapse mr-3 fade">
                                <a href="" id="edit_btn" class="btn pt-0 pb-0 pl-2 pr-1 text-dark border-0" data-toggle="collapse" data-target="#editActivity${atividade.id}" aria-expanded="true" aria-controls="editActivity${atividade.id}">
                                    <i class="fas fa-edit"></i>
                                </a>
                              </div>
                              <div id="collapse-${atividade.id}" class="collapse fade"> 
                              <i class="fas fa-compress-alt"></i>
                              </div>
                              <div id="collapse-${atividade.id}" class="collapse fede show">
                              <i class="fas fa-expand-alt"></i>
                              </div>
                          </div>                                
>>>>>>> Stashed changes
                        </div>
                    </div>
                    
                    <div id="collapse-${atividade.id}" class="collapse" aria-labelledby="heading-${atividade.id} data-card">
                        <div class="card-body text-justify">
                        ${atividade.descricao}
                        </div>
                        <div class="card-footer bg-wight d-flex justify-content-between">

                        <!--Icones de navegação entre os cards-->

                        <a href="#" onclick="alert('Back card?')" class="btn btn-sm bg-light text-dark"><i class="fas fa-chevron-left"></i></a>
                        <div class="d-none justify-content-around w-100">
                          <a href="#" onclick="alert('Card To Do?')" class="btn btn-sm bg-to-do text-dark"><i class="fas fa-list"></i></a>
                          <a href="#" onclick="alert('Card In Progress?')" class="btn btn-sm bg-in-progress text-dark"><i class="fas fa-tasks"></i></a>
                          <a href="#" onclick="alert('Card Done?')" class="btn btn-sm bg-done text-dark"><i class="fas fa-calendar-check"></i></a>
                        </div>
                        <a href="#" onclick="alert('Next card?')" class="btn btn-sm bg-light text-dark"><i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>

                    <!--End Activity-->  

                </div>`
            ).join('')}`;        
    }
}