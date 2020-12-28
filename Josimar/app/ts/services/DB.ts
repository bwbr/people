export class DB{

    private _db: Database;
    private _name: string;
    private _version: string;
    private _description: string;
    private _size: number;

    constructor(){  
         this._name = 'people';  
         this._version = '1.0';
         this._description = 'bwbr';
         this._size = 2 * 1024 * 1024;
         this._db =  window.openDatabase(this._name, this._version, this._description, this._size);
    }

    //REQUISITA CONEXÃO
    conn(){
        this._db =  window.openDatabase(this._name, this._version, this._description, this._size);
        return this._db;
    }

    //CRIAR A TABELA CASO NÃO EXISTA
    createTable(table: string, columns: string): Promise<any> {
       
         return new Promise((resolve, reject) => {
            this._db.transaction(function (tx) {  
                tx.executeSql(`CREATE TABLE IF NOT EXISTS ${table} (${columns})`, [], (tx, results) => { resolve({}); }, (tx, err) => { reject(err); return false; });
             });
         })
    }

    //DELETAR A TABELA
    dropTable(table: string): void{
        this._db.transaction(function (tx) {  
            tx.executeSql(`DROP TABLE ${table}`);
         });
    }

    //SALVAR DADO(S)
    insert(table: string, columns: string, values: string): Promise<any> {
       return new Promise((resolve, reject) => {
        this._db.transaction(function (tx) {  
            tx.executeSql(`INSERT INTO ${table} (${columns}) VALUES (${values})`, 
            [], 
            (tx, result) => { resolve({}); }, 
            (tx, err) => { reject(err); return false; });
          });
       })
    }

    //ATUALIZAR DADO(S)
    update(table: string, values: string, condition: string): void{
        this._db.transaction(function (tx) {  
            tx.executeSql(`UPDATE ${table} SET ${values} WHERE ${condition}`);
            });
    }
    
    //DELETAR DADO(S)
    delete(table: string, condition: string): void{
        this._db.transaction(function (tx) {  
            tx.executeSql(`DELETE FROM ${table} WHERE ${condition}`);
            });
    }
    
}