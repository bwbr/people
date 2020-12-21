import { View } from './View';
import { AddFormacoesView } from './AddFormacoesView'
import { AddFormacoes, Kanban } from '../models/index';
import { BotoesDeletarEditar } from '../controllers/index';

export class KanbanView extends View<Kanban>{
    _formacaoAFazerView =  new AddFormacoesView('#nav-link-kanban_afazer');
    _formacaoFazendoView =  new AddFormacoesView('#nav-link-kanban_fazendo');
    _formacaoFeitoView =  new AddFormacoesView('#nav-link-kanban_feitas');

    update(model: Kanban){
        this._formacaoAFazerView.update(model.afazer);
        this._formacaoFazendoView.update(model.fazendo);
        this._formacaoFeitoView.update(model.feito);
    }

    template(model: Kanban): string {
        return '';
    }
}