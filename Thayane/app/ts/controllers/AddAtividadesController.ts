import { AddAtividadesView } from '../views/index';
import { AddAtividades, AddAtividade } from '../models/index';

export class AddAtividadesController{
    private _inputAtividadeNome: JQuery = $('#novaAtividadeNome');
    private _inputAtividadeData: JQuery = $('#novaAtividadeData');
    private _atividades = new AddAtividades();
    private _addAtividadesView = new AddAtividadesView('#novaAtividade');
    
    constructor(){
        this._addAtividadesView.update(this._atividades);
    }

    adiciona(event: Event){
        event.preventDefault();

        const addAtividade = new AddAtividade(
            this._inputAtividadeNome.val(),
            this._inputAtividadeData.val()
        );

        this._atividades.adiciona(addAtividade);
        this._addAtividadesView.update(this._atividades);
    }
}