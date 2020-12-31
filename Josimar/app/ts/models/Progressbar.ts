export class Progressbar{

    private _total_toDo: number;
    private _total_inProgress: number;
    private _total_done: number;
    private _total_activities: number;

    constructor(){
        this._total_toDo = $('[data-toDo] .activity').length;
        this._total_inProgress = $('[data-InProgress] .activity').length;
        this._total_done = $('[data-Done] .activity').length;
        this._total_activities = this._total_toDo + this._total_inProgress + this._total_done;
    }

     //PROGRESSBAR
     progressbar(): void{  

        //calcula percentagem
        let percent_toDo = this.percent(this._total_toDo, this._total_activities);
        let percent_inProgress = this.percent(this._total_inProgress, this._total_activities);
        let percent_done = this.percent(this._total_done, this._total_activities);
        
        //atualiza skills progress-bar
        $("#progress-to-do").css("width", `${(percent_toDo)}%`); //width de progresso to-do
        $("#progress-in-progress").css("width", `${(percent_inProgress)}%`); //width de progresso in-progress
        $("#progress-done").css("width", `${(percent_done)}%`); //width de progresso done

        //atualiza skills porcentagens
        $(".percent-to-do").text(`${(percent_toDo).toFixed()}%`); //porcentagem progresso to-do
        $(".percent-in-progress").text(`${(percent_inProgress).toFixed()}%`); //porcentagem progresso in-progress
        $(".percent-done").text(`${(percent_done).toFixed()}%`); //porcentagem progresso done
        
        //substitui a cor da progressbar
        this.colorBgProgress(percent_toDo, document.querySelector("#progress-to-do"));//background de progresso to-do
        this.colorBgProgress(percent_inProgress, document.querySelector("#progress-in-progress"));//background  de progresso to-do
        this.colorBgProgress(percent_done, document.querySelector("#progress-done"));//background de progresso done
             
    }

    //PROGRESSBAR: Retorna a percentagem
    percent(n: number, total: number): number{
        let p: any;

        if(p < 1){
            p = 0;
        }else{
            p = (n / total) * 100;
        }

        return p;            
    }

    //PROGRESSBAR: função alterna cor do progress-bar
    colorBgProgress(percent_name:any, progress_name: Element): void{

        if(parseFloat(percent_name) == 100){

            progress_name.classList.remove('progress-bar-blue'); //background progress
            progress_name.classList.add('progress-bar-success'); //background success

        }else{

            progress_name.classList.remove('progress-bar-success'); //background success
            progress_name.classList.add('progress-bar-blue'); //background progress

        }

    }
}