export class LocalStorage{

    addStorage(value: any, key: string): void{

            try {
                // Salvar no Local Storage
                localStorage.setItem(key, JSON.stringify(value));
            } catch (error) {
                console.error(error);
            }
        
    }

    listStorage(key: string): any{

            if (JSON.parse(localStorage.getItem(key)) != null) { // Se existir 
                return JSON.parse(localStorage.getItem(key));
            }

        }

    
    
}
