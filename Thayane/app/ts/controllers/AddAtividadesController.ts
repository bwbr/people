import { AddAtividadesView } from '../views/index';
import { AddAtividades, AddAtividade } from '../models/index';

export class AddAtividadesController{
    private _inputAtividadeNome: JQuery;
    private _inputAtividadeData: JQuery;
    private _atividades = new AddAtividades();
    private _addAtividadesView = new AddAtividadesView('#novaAtividade');
    
    constructor(){
        this._inputAtividadeNome = $('#novaAtividadeNome');
        this._inputAtividadeData = $('#novaAtividadeData');
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