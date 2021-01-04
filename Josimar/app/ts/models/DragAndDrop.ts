
import {Atividade, Atividades, Badges, Progressbar} from '../models/index';

export class DragAndDrop{

    private _activity: JQuery;
    private _card_body: JQuery;  
    private _draggedActivity: HTMLElement;

    constructor(readonly activitySel: HTMLElement){
        this._activity = <JQuery> $('.activity');
        this._card_body = <JQuery> $('.activities');
        this._draggedActivity = activitySel;
    }

    //DRAG AND DROP
    drag_and_drop(): void{       

        var draggedActivity: HTMLElement = null;   

        //Percorre / busca todas as divs com classes de ".activity"
        for(let i = 0; i < this._activity.length; i++){
            let a = this._activity[i];	

            a.addEventListener('click', function (){

                    draggedActivity = this;	
                    this.classList.remove("show");			
                    this.classList.add("hide");	
            });

            a.addEventListener('dragend', function (){

                    draggedActivity.classList.remove("hide");						
                    draggedActivity.classList.add("show");			
                    draggedActivity = null;

            });


            for(let j = 0; j < this._card_body.length; j++){
                var cb = this._card_body[j];
                
                cb.addEventListener('dragstart', function (){
                });

                cb.addEventListener('dragover', function(e){
                    e.preventDefault();			
                });

                cb.addEventListener('dragenter', function(e){
                    e.preventDefault();
                });

                cb.addEventListener('drop', function(){

                    this.appendChild(draggedActivity);                         
                    const _atividades = new Atividades();                                             
                    const _progressbar = new Progressbar();
                    const _badge = new Badges();
                    
                    _atividades.move(draggedActivity.id, this.id);

                    _badge.badge();
                    _progressbar.progressbar();

                });
            }  
        } 
    }
}