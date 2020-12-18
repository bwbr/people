const db: Database =  window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024);

export class DBStorage{    
    
    //EXECUTA ALGUMAS FUNÇÕES SQL
    SQLexe(args: any){ 
        db.transaction(function (tx) {             
            tx.executeSql(args); 
         })
    }


/*     list(select: string): any{
        db.transaction(function (tx) { 
            tx.executeSql(`${select}`, 
            [], 
            function (tx, results) { 
                var len = results.rows.length, i; 
                for (i = 0; i < len; i++) { 

                    const atividade = new Atividade(
                        results.rows.item(i).id,
                        results.rows.item(i).titulo,
                        results.rows.item(i).descricao,
                        results.rows.item(i).idCard
                    );

                    _atividades.adiciona(atividade);
                    items = _atividades.paraArray();         
                } 
            }, null); 
        }); 
        return items
    } */
/* 
    search(table: string, condition:string): any{
        const db: Database =  window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024);        
        
        db.transaction(function (tx) 
        { 
            tx.executeSql(`SELECT * FROM ${table} WHERE ${condition}`, 
            [], 
            function (tx, results) 
            { 
                var len = results.rows.length, i; 
                for (i = 0; i < len; i++) 
                { 
                    const atividade = new Atividade(
                        results.rows.item(i).id,
                        results.rows.item(i).titulo,
                        results.rows.item(i).descricao,
                        results.rows.item(i).idCard
                    );

                    _atividades.adiciona(atividade);
                    _atividades.paraArray();
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
    } */
    

    
    
}
