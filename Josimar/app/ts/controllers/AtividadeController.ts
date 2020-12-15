import {LocalStorage} from '../services/localStorage';
import {AtividadesView, MensagemView} from '../views/index';
import {Atividade, Atividades} from '../models/index';

export class AtividadeController {

        private _inputTitulo: HTMLInputElement;
        private _inputDescricao: HTMLInputElement;
        private _atividades = new Atividades();
        private _atividadesView = new AtividadesView('[data-card]');
        private _mensagemView = new MensagemView('#mensagemView');
        private _localStorage = new LocalStorage();

        constructor(){
            this._inputTitulo = <HTMLInputElement>document.querySelector('#titulo');
            this._inputDescricao = <HTMLInputElement>document.querySelector('#descricao');
            this._atividadesView.update(this._atividades);
        }

        //limpa formulário
        limpa(): void{
            this._inputTitulo.value = '',
            this._inputDescricao.value = ''
        }

        //gerencia o autoincrement da id
        autoIncrement(): number{
            let array: any = this._localStorage.listStorage('Atividades'); 
            if (array != undefined) { 
                for (let chave in array){
                    if (array.hasOwnProperty(chave)) {
                        array =  array[chave];  
                        return parseInt(array[array.length - 1].id) + 1;  
                    }
                }
            }else{
                return 1;
            }
        }

        //adiciona as atividades
        adiciona(event: Event): void{
            event.preventDefault();

            const atividade = new Atividade(
                this.autoIncrement(),//define o autoincremente vindo da função
                this._inputTitulo.value,
                this._inputDescricao.value,
                ('cardToDo')//define o card inicial da atividade
            ); 
            
            this._atividades.adiciona(atividade);
            this._localStorage.addStorage('Atividades', this._atividades); 
            this._mensagemView.update('Atividade adicionada com sucesso!');  
            this.atualiza();          
            this.limpa();//limpar campos formulário do cadastro Atividade
        }

        //edita as atividades
        edita(id: string, id_card: string): void{
           
           //busca objeto
            let array: any = this.buscaId(id);
             
            console.log(array);
            for (let chave in array){
                if (array.hasOwnProperty(chave)) { 
                    array =  array[chave]; 
                    for(let i=0; i < array.length; i++){   
                        console.log('entrou em editar ', array[i].id);
                        this._localStorage.editStorage(array[i].idCard, id_card);    
                    }                      
                } 
            }

        }
        
        //lista as atividades
        lista(): void{

            let array: any = this._localStorage.listStorage('Atividades');     
                 
            for (let chave in array){
                if (array.hasOwnProperty(chave)) {  
                    array =  array[chave];       
                    for(let i=0; i < array.length; i++){                        
                        switch(array[i].idCard){
                            case 'cardToDo':console.log(array[i].idCard);
                                this._atividadesView = new AtividadesView('.to-do');
                                this._atividades.adiciona(array[i]);             
                                this._atividadesView.update(this._atividades); 
                                break;
                            case 'cardInProgress':
                                this._atividadesView = new AtividadesView('.card-in-progress');
                                this._atividades.adiciona(array[i]);             
                                this._atividadesView.update(this._atividades);
                                break;
                            case 'cardDone':
                                this._atividadesView = new AtividadesView('.card-done');
                                this._atividades.adiciona(array[i]);             
                                this._atividadesView.update(this._atividades);
                                break;
                        }                         
                    }
                } 
            }            
        }

        //busca atividade
        buscaId(id: string): any{
            let array: any = this._localStorage.listStorage('Atividades'); 
            for (let chave in array){
                if (array.hasOwnProperty(chave)) {
                    array =  array[chave]; 
                    if(id != null){     
                        for(let i=0; i <= array.length; i++){
                            if(array[i].id == id){
                                id = '';
                                return array[i];
                            } 
                        }
                    }                                               
                } 
            }            
        }

        dragDrop(){

            let activity = document.querySelectorAll('.activity');
            let card_body = document.querySelectorAll('.activities');

            let draggedActivity: any = null;           
    
            //Percorre / busca todas as divs com classes de ".activity"
            for(let i = 0; i < activity.length; i++){
                let a = activity[i];	
    
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


                for(let j = 0; j < card_body.length; j++){
                    const cb = card_body[j];
                    
                    cb.addEventListener('dragstart', function (){
                    });
    
                    cb.addEventListener('dragover', function(e){
                        e.preventDefault();			
                    });
    
                    cb.addEventListener('dragenter', function(e){
                        e.preventDefault();
                    });
    
                    cb.addEventListener('drop', function(e){
                        
                        this.append(draggedActivity); 
                        const controller = new AtividadeController();
                        controller.edita(draggedActivity.id, this.id);
                        controller.lista();
                        controller.badge(); 

                    });
                }  
            }	    
        }

        badge(): any{      

            let total_toDo: number = $('.to-do .activity').length;//recebe a quantidade das atividades no to-do
            let total_inProgress: number = $('.in-progress .activity').length;//recebe a quantidade das atividades no in-progress
            let total_done: number = $('.done .activity').length;//recebe a quantidade das atividades no done
            let total_activities: number = total_toDo + total_inProgress + total_done; 

            $('.badge-to-do').text(this.limitBadge(total_toDo));
            $('.badge-in-progress').text(this.limitBadge(total_inProgress));
            $('.badge-done').text(`${this.limitBadge(total_done)} / ${total_activities}`);        
            
            //calcula percentagem
            let percent_toDo = this.percent(total_toDo, total_activities);
            let percent_inProgress = this.percent(total_inProgress, total_activities);
            let percent_done = this.percent(total_done, total_activities);
            
            //atualiza skills progress-bar
            $("#progress-to-do").css("width", `${(percent_toDo)}%`); //width de progresso to-do
            $("#progress-in-progress").css("width", `${(percent_inProgress)}%`); //width de progresso in-progress
            $("#progress-done").css("width", `${(percent_done)}%`); //width de progresso done

            //atualiza skills porcentagens
            $(".percent-to-do").text(`${(percent_toDo).toFixed()}%`); //porcentagem progresso to-do
            $(".percent-in-progress").text(`${(percent_inProgress).toFixed()}%`); //porcentagem progresso in-progress
            $(".percent-done").text(`${(percent_done).toFixed()}%`); //porcentagem progresso done

            this.colorBgProgress(percent_toDo, document.querySelector("#progress-to-do"));//background de progresso to-do
            this.colorBgProgress(percent_inProgress, document.querySelector("#progress-in-progress"));//background  de progresso to-do
            this.colorBgProgress(percent_done, document.querySelector("#progress-done"));//background de progresso done
                 
        }
        
        
        //Retorna a quantidade limite para o badge
        limitBadge (qtd: number){
            let limitQtd: string = "99+";
            if(qtd > 99){ 
                return limitQtd; //limita 2 digitos para quantidade maior que 100 atividades
            }else{
                return qtd; //retorna o valor até 99 atividades;
            }
        }

        //Retorna a percentagem
        percent(n: number, total: number){
            let p = (n / total) * 100;
            return p;
        }

        //função alterna cor do progress-bar
        colorBgProgress(percent_name:any, progress_name: Element){
            if(parseFloat(percent_name) == 100){
                progress_name.classList.remove('progress-bar-blue'); //background progress
                progress_name.classList.add('progress-bar-success'); //background success
            }else{
                progress_name.classList.remove('progress-bar-success'); //background success
                progress_name.classList.add('progress-bar-blue'); //background progress
            }
        }

        //função atualiza as ações da página
        atualiza(){

            setTimeout(function () { 

                const controller = new AtividadeController();
                controller.lista();
                controller.dragDrop();
                controller.badge(); 
                
            }, 1);

        }
        
}
