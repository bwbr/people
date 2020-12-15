export class LocalStorage{

    addStorage(key: string, value: any): void{

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
