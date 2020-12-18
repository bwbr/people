export class AddFormacao{
    constructor(readonly formacaoTitulo: string, readonly formacaoDescricao: string, readonly a: number, readonly b: number, readonly c: number){
    }

    paraTexto(): void{
        console.log($(this.c))
    }
}