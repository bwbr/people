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
                                <button class="btnVazio btnDeletar deleto" data-title="${formacao.b}" data-key="${formacao.id}" data-a="${formacao.a}" data-titulo="${formacao.formacaoTitulo}" data-descricao="${formacao.formacaoDescricao}">
                                    <i class="icones iconeDeletar"></i>
                                </button>

                                <button id="expandir${formacao.a}" class="btnVazio btnExpandir collapsed" data-toggle="collapse" href="#collapse${formacao.a}" data-title="${formacao.b}">
                                    <i class="icones iconeExpandir"></i>
                                </button>
                            </div>
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