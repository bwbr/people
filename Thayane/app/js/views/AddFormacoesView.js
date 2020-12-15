System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, AddFormacoesView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            AddFormacoesView = class AddFormacoesView extends View_1.View {
                template(model) {
                    return `
            ${model.paraArray().map(formacao => `
                <div class="card formacoes arrastar_js" draggable="true">
                    <div class="card-header">
                        <a class="card-link d-flex justify-content-between" data-toggle="collapse" href="#collapse${formacao.numA}">
                            ${formacao.formacaoTitulo}
                            <div>
                                <div>
                                    <i class="iconeDeletar"></i>
                                    <i class="iconeExpandir"></i>
                                </div>
                                <div>
                                    <i class="iconeEditar"></i>
                                    <i class="iconeCumprimir"></i>
                                </div>
                            </div>
                        </a>
                    </div>
            
                    <div id="collapse${formacao.numB}" class="collapse" data-parent="#accordion_fazer">
                        <div class="card-body">
                            ${formacao.formacaoDescricao}
                        </div>
                            
                        <div class="card-footer d-flex justify-content-between">
                            <i class="iconeMoverEsquerda"></i>
                            <i class="iconeMoverDireita"></i>
                        </div>
                    </div>
                </div>
            `).join('')}
        `;
                }
            };
            exports_1("AddFormacoesView", AddFormacoesView);
        }
    };
});
