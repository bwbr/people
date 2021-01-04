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
                    <button class="btnVazio btnEditarSkill" data-key="${skill.id}" data-titulo="${skill.skillTitulo}" data-sucesso="${skill.skillPorcentagem}" type="button" data-toggle="collapse" data-target="#AdicionarSkill${skill.id}" aria-controls="AdicionarSkill${skill.id}" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="icones iconeEditar"></i> 
                    </button>
                    <button class="btnVazio btnDeletarSkill" data-key="${skill.id}">   
                        <i class="icones iconeDeletar"></i>
                    </button>

                    <div class="progress">
                        <div class="progress-bar bg-success" style="width: ${skill.skillPorcentagem}%"></div>
                        <div class="progress-bar bg-danger" style="width:${skill.skillFalta}%"></div>
                    </div>
                </li>
                <form class="col mb-3 mt-1 collapse navbar-collapse fundoAdd" id="AdicionarSkill${skill.id}">
                    <div class="input-group p-1">
                        <input id="skillTitulo${skill.id}" type="text" class="form-control mt-2" placeholder="${skill.skillTitulo}" maxlength="40">
                    </div>
                    <div class="input-group p-1">
                        <input id="skillPorcent${skill.id}" type="number" class="form-control mt-2" placeholder="${skill.skillPorcentagem}%" aria-valuemax="100" aria-valuemin="0">
                    </div>
                    <div class="input-group p-1 pb-3">
                        <button aria-label="submit form" class="btn btn-primary mt-2 ml-1 salvarSkill" type="submit" data-key="${skill.id}" data-titulo="${skill.skillTitulo}" data-sucesso="${skill.skillPorcentagem}">Salvar</button>
                    </div>
                </form>
            `).join('')}
        `;
                }
            };
            exports_1("AddSkillsView", AddSkillsView);
        }
    };
});
