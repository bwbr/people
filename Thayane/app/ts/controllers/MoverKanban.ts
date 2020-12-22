export class MoverKanban{
    public eu: JQuery;
    private biso: JQuery;
    private novoBiso: JQuery;

    moverAFazer(){
        console.log("Movendo...");
        this.biso = this.eu.parents('.formacoes');
        this.novoBiso = $('#nav-link-kanban_aFazer');
        this.novoBiso.append(this.biso);
        this.biso = this.novoBiso;              
    }

    moverFazendo(){
        console.log("Movendo...");
        this.biso = this.eu.parents('.formacoes');
        this.novoBiso = $('#nav-link-kanban_fazendo');
        this.novoBiso.append(this.biso);
        this.biso = this.novoBiso;        
    }

    moverFeitas(){
        console.log("Movendo...");
        this.biso = this.eu.parents('.formacoes');
        this.novoBiso = $('#nav-link-kanban_feitas');
        this.novoBiso.append(this.biso);
        this.biso = this.novoBiso;        
    }
}