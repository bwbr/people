export abstract class Dao{
    protected _connection: any;
    protected _store: any;

    constructor(connection: any){
        this._connection = connection;
        this._store = '';
    }

    adiciona(algo: any): Promise<number> {
        return new Promise((resolve, reject) => {
            let request = this._connection
                .transaction([this._store], 'readwrite')
                .objectStore(this._store)
                .add(algo);

            request.onsuccess = (e:any) => resolve(e.target.result);

            request.onerror = (e: any) => {
                console.log(e.target.error);
                reject('Não foi possível adicionar!');
            };
        });
    } 
}