export class AddFormacao{
    constructor(readonly formacaoTitulo: string, readonly formacaoDescricao: string, private a: number, private b: number){
    }

    get numA(){
        return this.a;
    }

    get numB(){
        this.a++;
        return this.b++;
    }
}