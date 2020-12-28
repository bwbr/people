import { Dao } from './Dao';

export class FormacaoDaoFazendo extends Dao{
    constructor(connection: any){
        super(connection);
        this._connection= connection;
        this._store = 'formacoesFazendo';
    }
}