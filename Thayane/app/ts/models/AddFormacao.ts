export class AddFormacao{
    constructor(readonly formacaoTitulo: string, readonly formacaoDescricao: string, private a: number, private b: number, private c: number){
    }

    get numA(){
        return this.a++;
    }

    get numB(){
        return this.b++;
    }

    get numC(){
        return this.c++;
    }
}