import { AddAtividade } from './AddAtividade';

export class AddAtividades{
    private _atividades: AddAtividade[] = [];

    adiciona(atividade: AddAtividade){
        this._atividades.push(atividade);
    }

    paraArray(): AddAtividade[]{
        return [].concat(this._atividades);
    }
}