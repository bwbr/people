import {Atividade} from '../models/Atividade';
import {DB} from '../services/DB';

export class Atividades{

    private _atividades: Atividade[] = [];
    private _db = new DB();

    adiciona(atividade: Atividade){
        this._atividades.push(atividade);
    }

    salva(atividade: Atividade): void {        
        let table = 'Atividades';
        let columns = 'titulo, descricao, idCard';
        let createColumns = `id INTEGER PRIMARY KEY, ${columns}`;
        let values = `'${atividade.titulo}', '${atividade.descricao}', 'cardToDo'`;
        this._db.createTable(table, createColumns);//criar tabela caso não exista     
        this._db.insert(table, columns, values);//salva
    }

    edita(atividade: Atividade): void{
        let table = 'Atividades';
        let condition = `id =${atividade.id}`;
        let values = `titulo = '${atividade.titulo}', descricao = '${atividade.descricao}', idCard = '${atividade.descricao}'`;
        this._db.update(table, values, condition);//atualiza
    }

    paraArray(){

        return [].concat(this._atividades);

    }
}
