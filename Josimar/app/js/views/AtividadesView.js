System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, AtividadesView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            AtividadesView = class AtividadesView extends View_1.View {
                template(model) {
                    return `
        
            ${model.paraArray().map(atividade => ` 
                <!--Begin Activity--> 

                <div id="${atividade.id}" class="card activity mb-1 show" draggable="true" data-activity>
                    <div class="card-header" id="heading-${atividade.id}">
                        <div id="titulo-activity" class="mb-0 d-flex justify-content-between collapsed">
                          ${atividade.titulo}
                          <div class="d-flex justify-content-end">
                              <div id="collapse-${atividade.id}" class="collapse mr-3 fade">
                                <a href="" id="edit_btn" class="btn pt-0 pb-0 pl-2 pr-1 text-dark border-0" data-toggle="collapse" data-target="#cards" aria-expanded="false" aria-controls="cards">
                                    <i class="fas fa-edit"></i>
                                </a>                                
                                <a href="" id="trash_btn" class="btn pt-0 pb-0 pl-2 pr-1 text-dark border-0">
                                    <i class="fas fa-trash"></i>
                                </a>
                              </div>
                              <div id="collapse-${atividade.id}" class="collapse fade"  data-toggle="collapse" data-target="#collapse-${atividade.id}" aria-expanded="false" aria-controls="collapse-${atividade.id}"> 
                              <i class="fas fa-compress-alt"></i>
                              </div>
                              <div id="collapse-${atividade.id}" class="collapse fede show"  data-toggle="collapse" data-target="#collapse-${atividade.id}" aria-expanded="false" aria-controls="collapse-${atividade.id}">
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

                    <!--End Activity-->  

                </div>`).join('')}`;
                }
            };
            exports_1("AtividadesView", AtividadesView);
        }
    };
});
