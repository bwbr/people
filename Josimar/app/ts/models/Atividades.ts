import {Atividade} from '../models/Atividade';
import {DB} from '../services/DB';

export class Atividades{

    private _atividades: Atividade[] = [];
    private _db = new DB();

    adiciona(atividade: Atividade){
        this._atividades.push(atividade);
    }

    salva(atividade: Atividade): Promise<Atividade> {        
        let table = 'Atividades';
        let columns = 'titulo, descricao, idCard';
        let createColumns = `id INTEGER PRIMARY KEY, ${columns}`;
        let values = `'${atividade.titulo}', '${atividade.descricao}', 'cardToDo'`;
        this._db.createTable(table, createColumns);//criar tabela caso não exista     
        return this._db.createTable(table, createColumns)
            .then(() =>  this._db.insert(table, columns, values))
            .then(() => atividade );//salva
    }

    mover(id: any, idCard: string): void{
        let table = 'Atividades';
        let condition = `id =${id}`;
        let values = `idCard = '${idCard}'`;
        this._db.update(table, values, condition);//atualiza
    }

    deleta(id: any): void{
            let table = 'Atividades';
            let condition = `id =${id}`;
            this._db.delete(table, condition);//deleta
    }

    paraArray(){

        return [].concat(this._atividades);

    }
}
