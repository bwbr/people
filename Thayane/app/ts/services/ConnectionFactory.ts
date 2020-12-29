var ConnectionFactory = (function(){
    const stores = ['formacoesAFazer', 'formacoesFazendo', 'formacoesFeitas', 'skills'];
    const version = 1;
    const dbName = 'Thayane';

    var connection:any = null;
    var close: any = null;

    return class ConnectionFactory{
        constructor(){
            throw new Error("Não é possível criar instâncias de ConnectionFactory!");        
        }

        static getConnection(){
            return new Promise((resolve, reject) => {
                if (!window.indexedDB)
                    window.alert("Seu navegador não suporta uma versão estável do IndexedDB. Alguns recursos não estarão disponíveis.");

                let openRequest = window.indexedDB.open(dbName, version);

                openRequest.onupgradeneeded = e => {
                    let target: any = e.target;
                    ConnectionFactory._criarStores(target.result);
                };
            
                openRequest.onsuccess = e => {
                    let target: any = e.target;

                    if(!connection){
                        connection = target.result;
                        close = connection.close.bind(connection);
                        connection.close = function (){
                            throw new Error("Você não pode fechar a conexão diretamente!");
                        }
                    }                
                    resolve(connection);
                };
            
                openRequest.onerror = e => {
                    let target: any = e.target;
                    alert("Não usa IndexedDB?!");
                    console.log(target.error);
                    reject(target.error.name);
                };
            })
        }
    
        private static _criarStores(connection: any){        
            stores.forEach(store => {
                if(connection.objectStoreNames.contains(store)){
                    connection.deleteObjectStore(store);
                    console.log("Apagando pois já existe...");
                }
    
                connection.createObjectStore(store, {keyPath: 'id', autoIncrement: true});
            })        
        }

        static closeConnection(){
            if(connection){
                close();
                connection = null;
            }
        }
    }
})();