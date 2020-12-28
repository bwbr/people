import { AddFormacao } from "../models/index";

export class FormacaoDao{
    private _connection: any;
    private _store: any;

    constructor(connection: any){
        this._connection = connection;
        this._store = 'formacoesAFazer';
    }

    adiciona(formacao: any){
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(formacao);

            request.onsuccess = (e:any) => {
                resolve(e);
            };

            request.onerror = (e: any) => {
                console.log(e.target.error);
                reject('Não foi possível adicionar a formação!');
            };
        });
    }
}