export class Progressbar{

    private total_toDo: number;
    private total_inProgress: number;
    private total_done:number;
    private total_activities:number;
    private progress_toDo: JQuery;
    private progress_inProgress: JQuery;
    private progress_done: JQuery; 
    

        //PROGRESSBAR
        progressbar(){
            this.total_toDo = $('#cardToDo .card').length;//recebe a quantidade das atividades no to-do
            this.total_inProgress = $('#cardInProgress .activity').length;//recebe a quantidade das atividades no in-progress
            this.total_done = $('#cardDone .activity').length;//recebe a quantidade das atividades no done
            this.total_activities = this.total_toDo + this.total_inProgress + this.total_done; 

            this.progress_toDo = $("#progress-to-do");
            this.progress_inProgress = $("#progress-in-progress");
            this.progress_done = $("#progress-done");
    
            //calcula percentagem
            let percent_toDo = this.percent(this.total_toDo, this.total_activities);
            let percent_inProgress = this.percent(this.total_inProgress, this.total_activities);
            let percent_done = this.percent(this.total_done, this.total_activities);
            
            //atualiza skills progress-bar
            this.progress_toDo.css("width", `${(percent_toDo)}%`); //width de progresso to-do
            this.progress_inProgress.css("width", `${(percent_inProgress)}%`); //width de progresso in-progress
            this.progress_done.css("width", `${(percent_done)}%`); //width de progresso done
    
            //alterna as cores das barras de progresso
            this.colorBgProgress(percent_toDo, this.progress_toDo);//background de progresso to-do
            this.colorBgProgress(percent_inProgress, this.progress_inProgress);//background  de progresso to-do
            this.colorBgProgress(percent_done, this.progress_done);//background de progresso done
        }
    
        //PROGRESSBAR: Retorna a percentagem
        percent(n: number, total: number){
            let p: any;
    
            if(p < 1){
                p = 0;
            }else{
                p = (n / total) * 100;
            }
    
            return p;           
        }
    
        //PROGRESSBAR: função alterna cor do progress-bar
        colorBgProgress(percent_name:any, progress_name: JQuery){
            if(parseFloat(percent_name) == 100){
                progress_name.removeClass('progress-bar-blue'); //background progress
                progress_name.addClass('progress-bar-success'); //background success
            }else{
                progress_name.removeClass('progress-bar-success'); //background success
                progress_name.addClass('progress-bar-blue'); //background progress
            }
        }
}
