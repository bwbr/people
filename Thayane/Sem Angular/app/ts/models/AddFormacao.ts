export class AddFormacao{
    public id: number;
    
    constructor (readonly formacaoTitulo: string, readonly formacaoDescricao: string, public a: number, public b: string){
    }
}