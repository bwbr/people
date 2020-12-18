import { View } from './View';
import { AddAtividades } from '../models/index';

export class AddAtividadesView extends View<AddAtividades>{
    template(model: AddAtividades): string{
        return `
            ${model.paraArray().map(atividade =>
            `
                <li class="list-group-item d-flex justify-content-between align-items-center text-primary">
                    ${atividade.atividadeNome}
                    <span class="text-muted">${atividade.atividadeData}</span>
                </li>
            `
            ).join('')}
        `
    }
}