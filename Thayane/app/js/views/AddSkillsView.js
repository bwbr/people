System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, AddSkillsView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            AddSkillsView = class AddSkillsView extends View_1.View {
                template(model) {
                    return `
            ${model.paraArray().map(skill => `
                <li class="list-group-item d-flex justify-content-between align-items-center">${skill.skillTitulo}
                    <button class="btnVazio btnEditar">
                        <i class="icones iconeEditar"></i> 
                    </button>
                    <button class="btnVazio btnDeletar">   
                        <i class="icones iconeDeletar"></i>
                    </button>

                    <div class="progress">
                        <div class="progress-bar bg-success" style="width: ${skill.skillPorcentagem}%"></div>
                        <div class="progress-bar bg-danger" style="width:${skill.skillFalta}%"></div>
                    </div>
                </li>
            `).join('')}
        `;
                }
            };
            exports_1("AddSkillsView", AddSkillsView);
        }
    };
});
