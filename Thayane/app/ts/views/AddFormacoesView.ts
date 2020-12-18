import { View } from './View';
import { AddFormacoes } from '../models/index';
import { BotoesDeletarEditar } from '../controllers/index';

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

                            <div>
                                <button class="btnVazio btnDeletar deleto">
                                    <i class="icones iconeDeletar"></i>
                                </button>

                                <button id="expandir${formacao.numC}" class="btnVazio btnExpandir collapsed" data-toggle="collapse" href="#collapse${formacao.numA}" onclick="expandir()">
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
                            <button class="btnVazio btnMoverEsquerda">
                                <i class="icones iconeMoverEsquerda"></i>
                            </button>
                            <button class="btnVazio btnMoverDireita">
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