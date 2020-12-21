export class BotoesDeletarEditar{
    public eu: JQuery;
    private pai: JQuery;
    private tio: JQuery;
    private biso: JQuery;
    private tioBiso: JQuery;
    private primo2: JQuery;    
    
    deletar(){
        console.log("Deletando...");
        this.pai = this.eu.parents('.formacoes');
        this.pai.remove();
    }

    editar(){
        console.log("Editando...");
        this.pai = this.eu.parent();
        this.tio = this.pai.siblings('.quebrarTexto');
        this.tio.text('Oi');
        this.biso = this.pai.parents('.card-header');
        this.tioBiso = this.biso.siblings();
        this.primo2 = this.tioBiso.children('.card-body');
        this.primo2.text('Olá');
    }
}