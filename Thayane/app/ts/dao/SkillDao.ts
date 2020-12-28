import { Dao } from "./Dao";

export class SkillDao extends Dao{
    constructor(connection: any){
        super(connection);
        this._connection = connection;
        this._store = 'skills';
    }
}