export abstract class Dao{
    protected _connection: any;
    protected _store: any;

    constructor(connection: any){
        this._connection = connection;
        this._store = '';
    }

    adiciona(formacao: any): Promise<number> {
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(formacao);

            request.onsuccess = (e:any) => resolve(e.target.result);

            request.onerror = (e: any) => {
                console.log(e.target.error);
                reject('Não foi possível adicionar a formação!');
            };
        });
    }

    apagarRegistro(tabela:any, key:any){
        this._connection
            .then((conection:any) => {    
                let request = conection
                    .transaction([tabela], 'readwrite')
                    .objectStore(tabela)
                    .delete(key);
    
                request.onsuccess = (e:any) => console.log(`Registro ${key} excluído com sucesso de ${tabela}`);
    
                request.onerror = (e:any) => console.log(`Não foi excluir o registro de ${tabela}`); 

            }).catch((erro:any) => erro);    
    }  
}