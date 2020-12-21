export class MoverKanban{
    public eu: JQuery;
    private biso: JQuery;
    private novoBiso: JQuery;

    moverAFazer(){
        console.log("Movendo...");
        this.biso = this.eu.parents('.formacoes');
        this.novoBiso = $('#addAqui');
        this.novoBiso.append(this.eu);
    }

    moverFazendo(){
        console.log("Movendo...");
        this.biso = this.eu.parents('.formacoes');
        this.novoBiso = $('#nav-link-kanban_fazendo');
        this.novoBiso.append(this.biso);
    }

    moverFeitas(){
        console.log("Movendo...");
        this.biso = this.eu.parents('.formacoes');
        this.novoBiso = $('#nav-link-kanban_feitas');
        this.novoBiso.append(this.biso);
    }
}