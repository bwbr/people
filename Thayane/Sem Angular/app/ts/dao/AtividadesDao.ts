import { AddAtividade } from "../models/index";
import { Dao } from "./Dao";

export class AtividadeDao extends Dao{
    constructor(connection: any){
        super(connection);
        this._connection = connection;
        this._store = 'atividades';
    }

    listaTodos(){
        return new Promise((resolve, reject) => {
            let cursor = this._connection
                .transaction([this._store], "readwrite")
                .objectStore(this._store)
                .openCursor();

            let atividades: any[] = [];

            cursor.onsuccess = (e:any) => {
                let atual = e.target.result;

                if(atual){
                    let dado:AddAtividade = atual.value;
                    let atividade = new AddAtividade(dado.atividadeNome, dado.atividadeData);
                    atividades.push(atividade);
                    atual.continue();
                }else
                    resolve(atividades);
            };

            cursor.onerror = (e: any) => {
                console.log(e.target.error);
                reject('Não foi possível listar as Atividades!');
            }
        })
    }  
}