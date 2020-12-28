import { Dao } from './Dao';

export class FormacaoDaoAFazer extends Dao{
    constructor(connection: any){
        super(connection);
        this._connection = connection;
        this._store = 'formacoesAFazer';
    }
}