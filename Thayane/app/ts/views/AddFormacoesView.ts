import { View } from './View';
import { AddFormacoes } from '../models/index';

export class AddFormacoesView extends View<AddFormacoes>{    
    template(model: AddFormacoes): string{
        return `
            ${model.paraArray().map(formacao =>
            `
                <div class="card formacoes arrastar_js" draggable="true">
                    <div class="card-header">
                        <a class="card-link d-flex justify-content-between">
                            <div class="quebrarTexto">
                                ${formacao.formacaoTitulo}
                            </div>

                            <div class="botoes">
                                <button class="btnVazio btnDeletar deleto" type="button" data-title="${formacao.b}" data-key="${formacao.id}" data-a="${formacao.a}" data-titulo="${formacao.formacaoTitulo}" data-descricao="${formacao.formacaoDescricao}" data-toggle="collapse" data-target="#Adicionar${formacao.a}" aria-controls="Adicionar${formacao.a}" aria-expanded="false" aria-label="Toggle navigation">
                                    <i class="icones iconeDeletar"></i>
                                </button>

                                <button id="expandir${formacao.a}" class="btnVazio btnExpandir collapsed" data-toggle="collapse" href="#collapse${formacao.a}" data-title="${formacao.b}">
                                    <i class="icones iconeExpandir"></i>
                                </button>
                            </div>

                            <form data-form-formacao class="col mb-3 mt-1 collapse navbar-collapse fundoAdd" id="Adicionar${formacao.a}">
                                <div class="row p-1">
                                    <input id="formacaoTitulo${formacao.a}" type="text" name="novaFormacaoTitulo" class="form-control mt-2" placeholder="${formacao.formacaoTitulo}" required maxlength="40">
                                </div>
                                <div class="row p-1">
                                    <textarea id="formacaoDescricao${formacao.a}" type="text" rows="2" name="novaFormacaoDescricao" class="form-control mt-2" placeholder="${formacao.formacaoDescricao}" required style="resize: none" maxlength="80"></textarea>
                                </div>
                                <div class="row p-1 direita">
                                    <button aria-label="submit form" id="Editou${formacao.a}" class="btn btn-primary mt-2 salvarEditou" type="submit" data-title="${formacao.b}" data-key="${formacao.id}" data-a="${formacao.a}" data-titulo="${formacao.formacaoTitulo}" data-descricao="${formacao.formacaoDescricao}">Salvar</button>
                                </div>
                            </form>
                        </a>
                    </div>
            
                    <div id="collapse${formacao.a}" class="collapse" data-parent="#accordion_fazer">
                        <div class="card-body">
                            ${formacao.formacaoDescricao}
                        </div>
                            
                        <div class="card-footer d-flex justify-content-between">
                            <button class="btnVazio btnMoverEsquerda" data-title="${formacao.b}" data-key="${formacao.id}" data-a="${formacao.a}" data-titulo="${formacao.formacaoTitulo}" data-descricao="${formacao.formacaoDescricao}">
                                <i class="icones iconeMoverEsquerda"></i>
                            </button>
                            <button class="btnVazio btnMoverDireita" data-title="${formacao.b}" data-key="${formacao.id}" data-a="${formacao.a}" data-titulo="${formacao.formacaoTitulo}" data-descricao="${formacao.formacaoDescricao}">
                                <i class="icones iconeMoverDireita"></i>
                            </button>
                        </div>
                    </div>
                </div>
            `
            ).join('')}
        `
    }
}