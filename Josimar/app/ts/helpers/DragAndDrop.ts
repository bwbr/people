import {AtividadeController} from '../controllers/AtividadeController';
import {Atividades} from '../models/index';

export class DragAndDrop{

    private activity: JQuery;
    private card_body: JQuery;     
        
    
        //DRAG AND DROP
        drag_and_drop(){

        this.activity = $('.activity');
        this.card_body = $('.activities');        
        let draggedActivity: HTMLElement; 

        const controller = new AtividadeController();          

        //Percorre / busca todas as divs com classes de ".activity"
        for(let i = 0; i < this.activity.length; i++){
            let a = this.activity[i];	

            a.addEventListener('dragstart', function (){

                    draggedActivity = this;	
                    this.classList.remove("show");			
                    this.classList.add("hide");	
            });

            a.addEventListener('dragend', function (){

                    draggedActivity.classList.remove("hide");						
                    draggedActivity.classList.add("show");			
                    draggedActivity = null;

            });

            for(let j = 0; j < this.card_body.length; j++){
                const cb = this.card_body[j];
                
                cb.addEventListener('dragstart', function (){
                });

                cb.addEventListener('dragover', function(e){
                    e.preventDefault();			
                });

                cb.addEventListener('dragenter', function(e){
                    e.preventDefault();
                });

                cb.addEventListener('drop', function(e){
                    
                    this.appendChild(draggedActivity); 

                    const _atividades = new Atividades();
                    _atividades.move(draggedActivity.id, this.id);

                    controller.lista();

                });
            }  
        }	    
    }
}
