export class AddFormacao{
    constructor(private _formacaoTitulo: string, private _formacaoDescricao: string, private a: number, private b: number){
    }

    get formacaoTitulo(){
        return this._formacaoTitulo;
    }

    get formacaoDescricao(){
        return this._formacaoDescricao;
    }
    
    get numA (){
        return this.a++;
    }

    get numB(){
        return this.b++;
    }
}