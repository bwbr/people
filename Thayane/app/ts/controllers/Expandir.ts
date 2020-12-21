export class Expandir{
    public eu: JQuery;
    private irmao: JQuery;
    private sobrinho: JQuery;

    expandir(){
        this.irmao = this.eu.siblings();
        this.sobrinho = this.irmao.children();

        if(this.sobrinho.hasClass('iconeDeletar')){
            this.sobrinho.removeClass('iconeDeletar').addClass('iconeEditar');
            this.irmao.removeClass('btnDeletar').addClass('btnEditar');
            
        }
        else if(this.sobrinho.hasClass('iconeEditar')){
            this.sobrinho.removeClass('iconeEditar').addClass('iconeDeletar');
            this.irmao.removeClass('btnEditar').addClass('btnDeletar');
        }
    }
}