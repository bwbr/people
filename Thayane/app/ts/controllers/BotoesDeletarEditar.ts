export class BotoesDeletarEditar{
    private eu: JQuery;
    private pai: JQuery;    
    
    deletar(){
        console.log("Deletando...");
        this.eu = $(this);
        console.log(this.eu);
        this.pai = this.eu.parents('.formacoes');
        this.pai.remove();
        console.log(this.pai);
    }

    editar(){
        console.log("Editando...");
        this.eu = $(this);
        console.log(this.eu);
        this.pai = this.eu.parents('.formacoes');
        this.pai.remove();
        console.log(this.pai);
    }
}