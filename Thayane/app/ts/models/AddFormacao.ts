export class AddFormacao{
    constructor(private _formacao: string, private a: number, private b: number){
    }

    get formacao(){
        return this._formacao;
    }
    
    get numA (){
        return this.a++;
    }

    get numB(){
        return this.b++;
    }
}