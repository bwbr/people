import {AtividadesView, MensagemView, View} from '../views/index';
import {Atividade, Atividades} from '../models/index';
import {DB} from '../services/DB';

export class AtividadeController {
      
        private _inputId: JQuery;
        private _inputTitulo: JQuery;
        private _inputDescricao: JQuery;        
        private _inputIdCard: JQuery;
        private _atividades = new Atividades();
        private _atividadesView = new AtividadesView('[data-toDo]');
        private _mensagemView = new MensagemView('#mensagemView');
        private _db = new DB();

        constructor(){
            
            this._inputId = <JQuery>$('#id');
            this._inputTitulo = <JQuery>$('#titulo');
            this._inputDescricao = <JQuery>$('#descricao');
            this._inputIdCard = <JQuery>$('#idCard');
            this._atividadesView.update(this._atividades, '');

        }

        //LIMPA FORMULÁRIO
        limpa(): void{
            this._inputId.val(''),
            this._inputTitulo.val(''),
            this._inputDescricao.val(''),
            this._inputIdCard.val('')
        }

        //ADICIONA ATIVIDADES
        adiciona(event: Event): void{
            event.preventDefault();

            const atividade = new Atividade(
                this._inputId.val(),
                this._inputTitulo.val(),
                this._inputDescricao.val(),
                this._inputIdCard.val()
            );         

            //Finaliza para exibição
            this._atividades.salva(atividade);
            this._atividades.adiciona(atividade);
            this._atividadesView.update(this._atividades, '');
            this._mensagemView.update('Atividade adicionada com sucesso!', 'alert-success'); //mensagem de cadastro 
            this.atualiza();//atualiza a lista
            this.limpa();//limpar campos formulário do cadastro Atividade   
        } 

        //LISTAR DADO(S)
        lista(){
            let table = 'Atividades';
            let columns = '*';
            let condition = `ORDER BY id DESC`;

            var atividades = this._atividades;
            var atividadesView = this._atividadesView;

            this._db.conn().transaction(function (tx) {      
                tx.executeSql(`SELECT ${columns} FROM ${table} ${condition}`, [], function (tx, results) {

                    var len = results.rows.length, i,
                        total_toDo = 0, total_inProgress = 0, total_done = 0;    

                    const controller = new AtividadeController();

                    const _atividadesToDo = new Atividades();
                    const _atividadesInProgress = new Atividades();
                    const _atividadesDone = new Atividades();

                    const _atividadesViewToDo = new AtividadesView('[data-toDo]');
                    const _atividadesViewInProgress = new AtividadesView('[data-InProgress]');
                    const _atividadesViewDone = new AtividadesView('[data-Done]');

                    for (i = 0; i < len; i++){   

                        const atividade = new Atividade(
                            results.rows.item(i).id,
                            results.rows.item(i).titulo,
                            results.rows.item(i).descricao,
                            results.rows.item(i).idCard
                        )    
                       

                        switch(atividade.idCard){
                            case 'cardToDo': 
                                _atividadesToDo.adiciona(atividade);
                                _atividadesViewToDo.update(_atividadesToDo, '');
                                total_toDo = total_toDo + 1;
                                console.log('Total toDo: ', total_toDo);
                                break;
                            case 'cardInProgress': 
                                _atividadesInProgress.adiciona(atividade);
                                _atividadesViewInProgress.update(_atividadesInProgress, '');
                                total_inProgress = total_inProgress + 1;
                                console.log('Total inProgress: ', total_inProgress);
                                break;
                            case 'cardDone':
                                _atividadesDone.adiciona(atividade);
                                _atividadesViewDone.update(_atividadesDone, '');
                                total_done = total_done + 1;
                                console.log('Total Done: ', total_done);
                                break;
                        }
                    }

                    controller.drag_and_drop(); //DRAG AND DROP
                    controller.badge(total_toDo, total_inProgress, total_done); //BADGE 
                    
                }, null);        
            });
        }

        //BADGE
        badge(total_toDo: number, total_inProgress: number, total_done: number): void{     
            let total_activities: number = total_toDo + total_inProgress + total_done; 

            $('.badge-to-do').text(this.limitBadge(total_toDo));
            $('.badge-in-progress').text(this.limitBadge(total_inProgress));
            $('.badge-done').text(`${this.limitBadge(total_done)} / ${total_activities}`);   
            
            this.progressbar(total_toDo, total_inProgress, total_done); //PROGRESSBAR     
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

        //PROGRESSBAR
        progressbar(total_toDo: number, total_inProgress: number, total_done: number): void{  
            
            let total_activities: number = total_toDo + total_inProgress + total_done; 

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

        //DRAG AND DROP
        drag_and_drop(): void{

            var activity = <JQuery> $('.activity');
            var card_body = <JQuery> $('.activities');

            var draggedActivity: HTMLElement = null;           
    
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
                        
                        this.appendChild(draggedActivity);                         
                        const _atividades = new Atividades();

                        _atividades.mover(draggedActivity.id, this.id);

                    });
                }  
            } 
        }

        deleta(id: any): void{

            this._atividades.deleta(id);

        }

        atualiza(): void{   

            const controller = new AtividadeController();

            window.setTimeout(function(){ 
                controller.lista(); 
            }, 1);

        }
        
        clear_all(): void{
            let table = 'Atividades';
            this._db.dropTable(table);
        }

}
