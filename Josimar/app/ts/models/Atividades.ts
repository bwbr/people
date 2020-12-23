import {Atividade} from '../models/Atividade';
import {PDO} from '../services/PDO';

export class Atividades{

    private _atividades: Atividade[] = [];
    private _db = new PDO();

    adiciona(atividade: Atividade): void {        
        let table = 'Atividades';
        let columns = 'titulo, descricao, idCard';
        let createColumns = `id INTEGER PRIMARY KEY, ${columns}`;
        let values = `'${atividade.titulo}', '${atividade.descricao}', 'cardToDo'`;

        this._db.createTable(table, createColumns);//criar tabela caso não exista     
        this._db.insert(table, columns, values);//salva
        this._atividades.push(atividade);   
    }

    edita(atividade: Atividade): void{
        let table = 'Atividades';
        let condition = `id =${atividade.id}`;
        let values = `titulo = '${atividade.titulo}', descricao = '${atividade.descricao}', idCard = '${atividade.descricao}'`;
        this._db.update(table, values, condition);//atualiza
    }

    lista(){        
        let table = 'Atividades';
        let columns = '*';
        let condition = ``;
        
        let array = this._db.list(columns, table, condition);
        console.log(array);
    }

    paraArray(){

        return [].concat(this._atividades);

    }
}
