export class BotoesDeletarEditar{
    public eu: JQuery;
    private pai: JQuery;
    private irmao: JQuery;
    private sobrinho: JQuery;
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

    deletarSkill(){
        console.log("Deletando...");
        this.pai = this.eu.parent();
        this.pai.remove();
    }

    editarSkill(){
        console.log("Editando...");
        this.pai = this.eu.parent();
        this.pai.text('TS');
        this.irmao = this.eu.siblings('.progress');
        this.sobrinho = this.irmao.children('.bg-success');
        this.sobrinho.css('width:50%');
    }
}