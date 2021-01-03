export class Badges{

    private _total_toDo: number;
    private _total_inProgress: number;
    private _total_done: number;

    constructor(){
        this._total_toDo = $('[data-toDo] .activity').length;
        this._total_inProgress = $('[data-InProgress] .activity').length;
        this._total_done = $('[data-Done] .activity').length;
    }

    //BADGE
    badge(){
        let total_activities: number = 
            this._total_toDo + 
            this._total_inProgress + 
            this._total_done; 
        console.log(total_activities);
        
        $('.badge-to-do').text(this.limitBadge(this._total_toDo));
        $('.badge-in-progress').text(this.limitBadge(this._total_inProgress));
        $('.badge-done').text(`${this.limitBadge(this._total_done)} / ${total_activities}`); 
    }

    //BADGE: Retorna a quantidade limite para o badge
    limitBadge (qtd: number): any{
        let limitQtd: string = "99+";
        if(qtd > 99){ 
            return limitQtd; //limita 2 digitos para quantidade maior que 100 atividades
        }else{
            return qtd; //retorna o valor até 99 atividades;
        }
    }
    

}