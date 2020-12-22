import { table } from "console";

export class Connection{

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

    //CRIAR A TABELA CASO NÃO EXISTA
    createTable(table: string, columns: string): void{
        this._db.transaction(function (tx) {  
            tx.executeSql(`'CREATE TABLE IF NOT EXISTS ${table} (${columns})'`);
         });
    }

    //DELETAR A TABELA
    dropTable(table: string): void{
        this._db.transaction(function (tx) {  
            tx.executeSql(`'DROP TABLE ${table}'`);
         });
    }

    //SALVAR DADO(S)
    insert(table: string, columns: string, values: string): void{
        this._db.transaction(function (tx) {  
            tx.executeSql(`'INSERT INTO ${table} (${columns}) VALUES (${values})'`);
          });
    }

    //ATUALIZAR DADO(S)
    update(table: string, values: string, condition: string): void{
        this._db.transaction(function (tx) {  
            tx.executeSql(`
                'UPDATE ${table} SET ${values} WHERE ${condition}'`);
            });
    }
    
    //DELETAR DADO(S)
    delete(table: string, condition: string): void{
        this._db.transaction(function (tx) {  
            tx.executeSql(`
                'DELETE from ${table} WHERE ${condition}'`);
            });
    }

    //LISTAR DADO(S)
    list(columns: string, table: string, condition: string): any{
        
        var allItems:any = [];
        var item = {}
        
        this._db.transaction(function (tx) {

            tx.executeSql(`'SELECT ${columns} FROM ${table} WHERE ${condition}'`, [], 
            function (tx, results) {
                
                var len = results.rows.length, i;

                for (i = 0; i < len; i++){
                  item = results.rows.item(i);
                  allItems.push(item); 
                }
            }, null);            
         });         
         return allItems
    }
    
}