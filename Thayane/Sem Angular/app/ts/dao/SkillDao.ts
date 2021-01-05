import { AddSkill } from "../models/index";
import { Dao } from "./Dao";

export class SkillDao extends Dao{
    constructor(connection: any){
        super(connection);
        this._connection = connection;
        this._store = 'skills';
    }

    listaTodos(){
        return new Promise((resolve, reject) => {
            let cursor = this._connection
                .transaction([this._store], "readwrite")
                .objectStore(this._store)
                .openCursor();

            let formacoes: any[] = [];

            cursor.onsuccess = (e:any) => {
                let atual = e.target.result;

                if(atual){
                    let dado:AddSkill = atual.value;
                    let skill = new AddSkill(dado.skillTitulo, dado.skillPorcentagem);
                    skill.id = dado.id;
                    formacoes.push(skill);
                    atual.continue();
                }else
                    resolve(formacoes);
            };

            cursor.onerror = (e: any) => {
                console.log(e.target.error);
                reject('Não foi possível listar as skills!');
            }
        })
    }  
}