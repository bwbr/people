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
            };
            exports_1("AddFormacoesView", AddFormacoesView);
        }
    };
});
