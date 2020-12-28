import { Dao } from "./Dao";

export class FormacaoDaoFeitas extends Dao{
    constructor(connection: any){
        super(connection);
        this._connection = connection;
        this._store = 'formacoesFeitas';
    }
}