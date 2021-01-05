export class Badge{

    private total_toDo: number;
    private total_inProgress: number;
    private total_done:number;
    private total_activities:number;
    private badge_toDo: JQuery;
    private badge_inProgress: JQuery;
    private badge_done: JQuery;        
        
    
    //BADGE
    badge(){ 
        this.total_toDo = $('#cardToDo .card').length;//recebe a quantidade das atividades no to-do
        this.total_inProgress = $('#cardInProgress .activity').length;//recebe a quantidade das atividades no in-progress
        this.total_done = $('#cardDone .activity').length;//recebe a quantidade das atividades no done
        this.total_activities = this.total_toDo + this.total_inProgress + this.total_done; 
        this.badge_toDo = $('.badge-to-do');
        this.badge_inProgress = $('.badge-in-progress');
        this.badge_done = $('.badge-done');

        //exibe a quantidade de atividades nos badgies
        this.badge_toDo.text(this.limitBadge(this.total_toDo));
        this.badge_inProgress.text(this.limitBadge(this.total_inProgress));
        this.badge_done.text(`${this.limitBadge(this.total_done)} / ${this.total_activities}`);        

    }

    //BADGE: Retorna a quantidade limite para o badge
    limitBadge (qtd: number){
        let limitQtd: string = "99+";
        if(qtd > 99){ 
            return limitQtd; //limita 2 digitos para quantidade maior que 100 atividades
        }else{
            return qtd; //retorna o valor até 99 atividades;
        }
    }
}
