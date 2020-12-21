window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
if(!window.indexedDB)
    console.log("Seu navegador não suporta o recurso IndexedDB");
var db;

request.onerror = function(event){
    console.log("Erro ao abrir o banco de dados", event);
}

request.onupgradeneeded   = function(event){
    console.log("Atualizando...");
    db = event.target.result;
    var objectStore = db.createObjectStore("Formacoes", { keyPath : "Codigo" });
};

request.onsuccess  = function(event){
    console.log("O banco de dados foi aberto com sucesso.");
    db = event.target.result;
}


var transaction = db.transaction(["Formacoes"],"readwrite");
   transaction.oncomplete = function(event) 
   {
        console.log("Sucesso");
   };

   transaction.onerror = function(event) 
   {
        console.log("Error");
   };  
   
   var objectStore = transaction.objectStore("Formacoes");
   objectStore.add({Codigo: codigo, nome : nome});