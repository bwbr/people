export class AddFormacao{
    constructor (readonly formacaoTitulo: string, readonly formacaoDescricao: string, private a: number, private b: number, private c: string, private d: string){
    }

    get numA(){
        return this.a;
    }

    get numB(){
        this.a++;
        return this.b++;
    }

    get numC(){
        return 'expandir' + this.b;
    }

    get numD(){
        return 'expandir' + (this.b-1);
    }
}