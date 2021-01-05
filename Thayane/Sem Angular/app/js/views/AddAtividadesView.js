System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, AddAtividadesView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            AddAtividadesView = class AddAtividadesView extends View_1.View {
                template(model) {
                    return `
            ${model.paraArray().map(atividade => `
                <li class="list-group-item d-flex justify-content-between align-items-center text-primary">
                    ${atividade.atividadeNome}
                    <span class="text-muted">${atividade.atividadeData}</span>
                </li>
            `).join('')}
        `;
                }
            };
            exports_1("AddAtividadesView", AddAtividadesView);
        }
    };
});
