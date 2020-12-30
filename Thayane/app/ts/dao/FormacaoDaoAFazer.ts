import { AddFormacao } from '../models/index';
import { Dao } from './Dao';

export class FormacaoDaoAFazer extends Dao{
    constructor(connection: any){
        super(connection);
        this._connection = connection;
        this._store = 'formacoesAFazer';
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
                    let dado:AddFormacao = atual.value;
                    let formacao = new AddFormacao(dado.formacaoTitulo, dado.formacaoDescricao, dado.a, dado.b);
                    formacao.id = dado.id;
                    formacoes.push(formacao);
                    atual.continue();
                }else
                    resolve(formacoes);
            };

            cursor.onerror = (e: any) => {
                console.log(e.target.error);
                reject('Não foi possível listar as formações!');
            }
        })
    }
}