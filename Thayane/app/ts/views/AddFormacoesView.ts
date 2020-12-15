import { View } from './View';
import { AddFormacoes } from '../models/index';

export class AddFormacoesView extends View<AddFormacoes>{
    template(model: AddFormacoes): string{
        return `
            ${model.paraArray().map(formacao =>
            `
                <div class="card formacoes arrastar_js" draggable="true">
                    <div class="card-header">
                        <a class="card-link" data-toggle="collapse" href="#collapse${formacao.numA}">
                            ${formacao.formacaoTitulo}
                        </a>
                    </div>
            
                    <div id="collapse${formacao.numB}" class="collapse" data-parent="#accordion_fazer">
                        <div class="card-body">
                            ${formacao.formacaoDescricao}
                        </div>
                    </div>
                </div>
            `
            ).join('')}
        `
    }
}