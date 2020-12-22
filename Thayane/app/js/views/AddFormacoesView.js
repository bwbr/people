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
                        <a class="card-link d-flex justify-content-between">
                            <div class="quebrarTexto">
                                ${formacao.formacaoTitulo}
                            </div>

                            <div class="botoes">
                                <button class="btnVazio btnDeletar deleto">
                                    <i class="icones iconeDeletar"></i>
                                </button>

                                <button id="expandir${formacao.numA}" class="btnVazio btnExpandir collapsed" data-toggle="collapse" href="#collapse${formacao.numA}">
                                    <i class="icones iconeExpandir"></i>
                                </button>
                            </div>
                        </a>
                    </div>
            
                    <div id="collapse${formacao.numB}" class="collapse" data-parent="#accordion_fazer">
                        <div class="card-body">
                            ${formacao.formacaoDescricao}
                        </div>
                            
                        <div class="card-footer d-flex justify-content-between">
                            <button class="btnVazio btnMoverEsquerda" data-title="${formacao.formacaoTitulo}" >
                                <i class="icones iconeMoverEsquerda"></i>
                            </button>
                            <button class="btnVazio btnMoverDireita">
                                <i class="icones iconeMoverDireita"></i>
                            </button>
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
