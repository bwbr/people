import {Atividade, Atividades} from '../models/index';

export class DBStorage{

    deleteTable(){
        const db: Database =  window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024); 
        db.transaction(function (tx) { 
           tx.executeSql('DROP TABLE Atividades')
        })
    }



    insert(table: string, columns: string, values: any){
        const db: Database =  window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024); 
        db.transaction(function (tx) {             
            tx.executeSql('CREATE TABLE IF NOT EXISTS Atividades (id INTEGER PRIMARY KEY, titulo, descricao, idCard)'); 
            tx.executeSql(`INSERT INTO ${table} (${columns}) VALUES (${values})`); 
         })
    }

    list(table: string): any{
    const db: Database = window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024);
    let items: Atividade [] = [];
    
        db.transaction(function (tx) { 
            tx.executeSql(`SELECT * FROM ${table}`, 
            [], 
            function (tx, results) { 
                var len = results.rows.length, i; 
                for (i = 0; i < len; i++) { 
                    items.push(results.rows.item(i));
                } 
            }, null); 
        }); 
        console.log(items);
        
        return items;
    }

    search(table: string, condition:string): any{
        const db: Database =  window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024);        
        let items: Atividade [] = [];
        
        db.transaction(function (tx) 
        { 
            tx.executeSql(`SELECT * FROM ${table} WHERE ${condition}`, 
            [], 
            function (tx, results) 
            { 
                var len = results.rows.length, i; 
                for (i = 0; i < len; i++) 
                { 
                    items.push(results.rows.item(i));
                } 
            }, null); 
        }); 
        return items;
    }

    update(table: string, values:any, condition:string): any{
        const db: Database =  window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024);        
        let items: Atividade [] = [];
        
        db.transaction(function (tx) { 
            tx.executeSql(`SELECT * FROM ${table} WHERE ${condition}`, 
            [], 
            function (tx, results) { 
                var len = results.rows.length, i; 
                for (i = 0; i < len; i++) { 
                    tx.executeSql(`UPDATE INTO ${table} SET ${values} VALUES (${condition})`);
                } 
            }, null); 
        }); 
    }
    

    
    
}
