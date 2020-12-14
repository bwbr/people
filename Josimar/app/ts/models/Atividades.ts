import {Atividade} from '../models/Atividade';

export class Atividades{

    private _atividades: Atividade[] = [];

    adiciona(atividade: Atividade): void {
        
        this._atividades.push(atividade);
        
    }

    paraArray(){

        return [].concat(this._atividades);

    }
}
