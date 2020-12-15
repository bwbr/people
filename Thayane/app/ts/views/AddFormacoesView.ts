import { View } from './View';
import { AddFormacoes } from '../models/index';

export class AddFormacoesView extends View<AddFormacoes>{
    template(model: AddFormacoes): string{
        return `
            ${model.paraArray().map(formacao =>
            `
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
            `
            ).join('')}
        `
    }
}