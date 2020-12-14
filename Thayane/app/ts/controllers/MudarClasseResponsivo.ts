export class MudarClasseResponsivo{
    private contato1: JQuery;
    private contato2: JQuery
    private kanbam: JQuery;
    private navKanban: JQuery;
    private navKanbanLink: JQuery;
    private aFazer: JQuery;
    private fazendo: JQuery;
    private feitas: JQuery;

    constructor(){
        this.contato1 = $('#contato1');
        this.contato2 = $('#contato2');
        this.kanbam = $('#kanbanTab');
        this.navKanban = $('#navKanban');
        this.navKanbanLink = $('#navKanban .nav-link');
        this.aFazer = $('#accordion_fazer');
        this.fazendo = $('#accordion_fazendo');
        this.feitas = $('#accordion_feita');
    }

    tamanho(){      
        if($(window).width() >= 576){
            //Verifica se o elemento contém as classes
            if(this.contato1.hasClass('form-group')){
                this.contato1.removeClass('form-group').addClass('input-group');
                this.contato2.removeClass('form-group').addClass('input-group');
            }else{
                this.contato1.addClass('input-group');
                this.contato2.addClass('input-group');
            }
        }else{
            if(this.contato1.hasClass('input-group')){
                this.contato1.removeClass('input-group').addClass('form-group');
                this.contato2.removeClass('input-group').addClass('form-group');
            }else{
                this.contato1.addClass('form-group');
                this.contato2.addClass('form-group');
            }
        }    
        
        if($(window).width() >= 768){
            if(this.kanbam.hasClass('tab-content')){
                this.kanbam.removeClass('tab-content').addClass('row card-deck');
                this.navKanban.removeClass('nav nav-tabs justify-content-end').addClass('nav nav-tabs invisible');
                this.navKanbanLink.addClass('oi');
                this.aFazer.removeClass('container tab-pane active').addClass('kanbam');
                this.fazendo.removeClass('container tab-pane fade').addClass('kanbam');
                this.feitas.removeClass('container tab-pane fade').addClass('kanbam');
            }else{
                this.kanbam.addClass('row card-deck');
                this.navKanban.addClass('nav nav-tabs invisible');
                this.navKanbanLink.addClass('oi')
                this.aFazer.addClass('kanbam');
                this.fazendo.addClass('kanbam');
                this.feitas.addClass('kanbam');
            }
        }else{
            if(this.kanbam.hasClass('row')){
                this.kanbam.removeClass('row card-deck').addClass('tab-content');
                this.navKanban.removeClass('nav nav-tabs invisible').addClass('nav nav-tabs justify-content-end');
                this.navKanbanLink.addClass('oi');
                this.aFazer.removeClass('kanbam').addClass('container tab-pane active');
                this.fazendo.removeClass('kanbam').addClass('container tab-pane fade');
                this.feitas.removeClass('kanbam').addClass('container tab-pane fade');
            }else{
                this.kanbam.addClass('tab-content');
                this.navKanban.addClass('nav nav-tabs justify-content-end');
                this.navKanbanLink.addClass('oi');
                this.aFazer.addClass('container tab-pane active');
                this.fazendo.addClass('container tab-pane fade');
                this.feitas.addClass('container tab-pane fade');
            }
        }
    }
}