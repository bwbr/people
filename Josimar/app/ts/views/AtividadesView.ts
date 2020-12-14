import {View} from './View';
import {Atividades} from '../models/Atividades';

export class AtividadesView extends View<Atividades> {

    template (model: Atividades): string {

        return `
        
            ${model.paraArray().map(atividade =>
                `<div id="${atividade.id}" class="card activity show" draggable="true">
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

                    <!--Edit Activities Form-->

                    <div id="editActivity${atividade.id}" class="activities collapse fade" aria-expanded="true" data-form>                            
                      <form id="form_activity_edit" class="card form pb-3 pl-3 pr-3 pt-0">                             
                        <div class="form-group row">
                          <label for="titulo" class="col-sm-12 col-form-label">Título</label>
                          <div class="col-sm-9">
                            <input type="text" class="form-control" id="titulo" skip="1" value="${atividade.titulo}" required>
                          </div>
                        </div>
                        <div class="form-group row">
                          <label for="descricao" class="col-sm-12 col-form-label">Descrição</label>
                          <div class="col-sm-12">
                            <textarea  type="text" class="form-control" id="descricao" placeholder="" aria-valuemax="200" skip="1" required>${atividade.descricao}</textarea>
                          </div>
                        </div>
                        <div class="form-group row">
                          <div class="col-12 d-flax d-flex justify-content-between">
                            <button type="button" class="btn btn-sm btn-secondary mr-3" id="clear_btn">Limpar</button>
                            <button type="submit" class="btn btn-sm btn-warning">Alterar</button>
                          </div>
                        </div>
                      </form>
                    </div>
                     <!--End Edit Activities Form-->

                    <!--Begin Activities-->                  
                </div>`
            ).join('')}`;        
    }
}