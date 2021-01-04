import {AtividadesView, MensagemView} from '../views/index';
import {Atividade, Atividades} from '../models/index';
import {DB} from '../services/DB';

export class AtividadeController {
      
        private _inputId: JQuery;
        private _inputTitulo: JQuery;
        private _inputDescricao: JQuery;        
        private _inputIdCard: JQuery;
        private _atividades = new Atividades();     
        private _mensagemView = new MensagemView('#mensagemView');
        private _todoColumnView = new AtividadesView('[data-ToDo]');
        private _inProgressColumnView = new AtividadesView('[data-InProgress]');
        private _doneColumnView = new AtividadesView('[data-Done]');
        private _db = new DB();

        constructor(){
            
            this._inputId = <JQuery>$('#id');
            this._inputTitulo = <JQuery>$('#titulo');
            this._inputDescricao = <JQuery>$('#descricao');
            this._inputIdCard = <JQuery>$('#idCard');

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
            this._atividades.salva(atividade)
                .then(atividade => {
                   this.limpa();
                   this.lista();
                })
                .then(() => {
                    this._mensagemView.update('Atividade adicionada com sucesso!', 'alert-success'); //mensagem de cadastro 
                });
        } 

        //LISTAR DADO(S)
        lista(){
            let table = 'Atividades';
            let columns = '*';
            let condition = `ORDER BY id DESC`;
            
            let total_toDo: number = 0;
            let total_inProgress: number = 0;
            let total_done: number = 0;

            let conn: Promise<SQLTransaction> = new Promise((resolve, reject) => {
                
                this._db.conn().transaction((tx) => { console.log(tx); resolve(tx); }, (err) => {
                    console.log(err);
                    reject('failed to get transaction');
                });
            })

            conn.then( tx => {
                return new Promise<SQLResultSet>((resolve, reject) => {
                    tx.executeSql(`SELECT ${columns} FROM ${table} ${condition}`, [], (tx, results) => {
                        //console.log(results);
                        resolve(results);
                    }, (tx, err) => {
                        console.log(err);
                        reject(err);
                        return false;
                    })
                })
            })
            .then( results => {
                let atividades: Array<Atividade> = []
                //console.log(`results.rows ${results.rows.length}`)
                for(let i = 0; i < results.rows.length; i++ ) {
                    //console.log(`i = ${i} l=${results.rows.length} ${results.rows.item(i)}`)
                    let v = results.rows.item(i);
                    //console.log(v);
                    atividades.push(new Atividade(
                        v.id, v.titulo, v.descricao, v.idCard
                    ));
                }
                return atividades;
            })
            .then( atividades => {
                let cardTodo = atividades.filter( a => a.idCard === 'cardToDo').reduce((a, i) => {
                    a.adiciona(i);
                    total_toDo = total_toDo + 1;
                    return a;
                }, new Atividades());
                let cardInProgress = atividades.filter( a => a.idCard === 'cardInProgress').reduce((a, i) => {
                    a.adiciona(i);
                    total_inProgress = total_inProgress + 1;
                    return a;
                }, new Atividades());
                let cardDone = atividades.filter( a => a.idCard === 'cardDone').reduce((a, i) => {
                    a.adiciona(i);
                    total_done = total_done + 1;
                    return a;
                }, new Atividades()); 
                this._todoColumnView.update(cardTodo, '');
                this._inProgressColumnView.update(cardInProgress, '');
                this._doneColumnView.update( cardDone, '');
                this.badge(total_toDo, total_inProgress, total_done);
                this.drag_and_drop();
            });
        }
        
        //DELETA ATIVIDADE
        move(id: string, idCard: string){
            this._atividades.move(id, idCard);
            this.lista();
        }

        //DELETA ATIVIDADE
        deleta(id: string){
            this._atividades.deleta(id);
            this.lista();
        }

        //APAGA A TABELA DE ATIVIDADES
        clear_all(): void{         
            let table = 'Atividades';
            this._db.dropTable(table);
            this.lista();
        }

       //DRAG AND DROP
       drag_and_drop(){

        let activity = document.querySelectorAll('.activity');
        let card_body = document.querySelectorAll('.activities');

        const controller = new AtividadeController();
        
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

                    const _atividades = new Atividades();
                    _atividades.move(draggedActivity.id, this.id);

                    controller.lista();

                });
            }  
        }	    
    }

    //BADGE
    badge(total_toDo: number, total_inProgress: number, total_done: number){      

        let total_activities: number = total_toDo + total_inProgress + total_done; 

        //exibe a quantidade de atividades nos badgies
        $('.badge-to-do').text(this.limitBadge(total_toDo));
        $('.badge-in-progress').text(this.limitBadge(total_inProgress));
        $('.badge-done').text(`${this.limitBadge(total_done)} / ${total_activities}`);  

        this.progressbar(total_toDo, total_inProgress, total_done);      

    }

    //PROGRESSBAR
    progressbar(total_toDo: number, total_inProgress: number, total_done: number){

        let total_activities: number = total_toDo + total_inProgress + total_done; 
        
        if(total_activities == null){
            total_toDo = 0.0; total_inProgress= 0.0; total_done = 0.0;
        }

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

        //alterna as cores das barras de progresso
        this.colorBgProgress(percent_toDo, document.querySelector("#progress-to-do"));//background de progresso to-do
        this.colorBgProgress(percent_inProgress, document.querySelector("#progress-in-progress"));//background  de progresso to-do
        this.colorBgProgress(percent_done, document.querySelector("#progress-done"));//background de progresso done
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
    colorBgProgress(percent_name:any, progress_name: Element){
        if(parseFloat(percent_name) == 100){
            progress_name.classList.remove('progress-bar-blue'); //background progress
            progress_name.classList.add('progress-bar-success'); //background success
        }else{
            progress_name.classList.remove('progress-bar-success'); //background success
            progress_name.classList.add('progress-bar-blue'); //background progress
        }
    }
}
