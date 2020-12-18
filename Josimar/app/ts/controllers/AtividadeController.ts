import {AtividadesView, MensagemView, View} from '../views/index';
import {Atividade, Atividades} from '../models/index';

//Abre requisição com db
const db: Database =  window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024);

export class AtividadeController {

        private _inputTitulo: HTMLInputElement;
        private _inputDescricao: HTMLInputElement;
        private _atividades = new Atividades();
        private _atividadesView = new AtividadesView('[data-toDo]');
        private _mensagemView = new MensagemView('#mensagemView');

        constructor(){
            this._inputTitulo = <HTMLInputElement>document.querySelector('#titulo');
            this._inputDescricao = <HTMLInputElement>document.querySelector('#descricao');
            this._atividadesView.update(this._atividades);
        }

        //LIMPA FORMULÁRIO
        limpa(): void{
            this._inputTitulo.value = '',
            this._inputDescricao.value = ''
        }

        //ADICIONA ATIVIDADES
        adiciona(event: Event): void{
            event.preventDefault();

            //Determina referências de acesso
            let table: string = 'Atividades';
            let columns: string= `titulo, descricao, idCard`;

            //Cria tabela caso não exista
            db.transaction(function (tx) {             
                tx.executeSql(`CREATE TABLE IF NOT EXISTS ${table} (id INTEGER PRIMARY KEY, ${columns})`);
            });
            
            //cria objeto Atividade
            let _id: string;
            const atividade = new Atividade(
                _id,
                this._inputTitulo.value,
                this._inputDescricao.value,
                ('cardToDo')//define o card inicial da atividade
            ); 
            
            //Referencia os valores para envio ao db
            let values: any = `'${atividade.titulo}', '${atividade.descricao}', '${atividade.idCard}'`;

            //Insere dados no db
            db.transaction(function (tx) {             
                tx.executeSql(`INSERT INTO ${table} (${columns}) VALUES (${values})`);
            });

            //Finaliza para exibição
            this._atividades.adiciona(atividade); 
            this._atividadesView.update(this._atividades); //envia objeto para formatação
            this._mensagemView.update('Atividade adicionada com sucesso!'); //exibe mensagem ao usuário
            this.atualiza(); //atualiza card        
            this.limpa();//limpar campos formulário do cadastro Atividade
        }
 
        //EDITA ATIVIDADE
        edita(event: Event): void{
            event.preventDefault();

            let id: string = this.callID();

            console.log(id);

            let table: string = 'Atividades'; //Idica qual tabela será alterada
            let condition: string = `id = ${id}`;//Indica qual a condição de seleção de dados

            //busca objeto
            db.transaction(function (tx) {             
                tx.executeSql(`SELECT * FROM ${table} WHERE ${condition}`, 
                [], 
                function (tx, results: any) 
                { 
                    var len = results.rows.length, i; 
                    
                    for (i = 0; i < len; i++) 
                    { 
                        const atividade = new Atividade(
                            results.rows.item(i).id,
                            this._inputTitulo.value,
                            this._inputDescricao.value,
                            results.rows.item(i).idCard
                        );
                        console.log(this._inputTitulo.value);
                                                    
                        //Referencia os valores para envio ao db
                        let values: any = `id = '${atividade.id}', titulo = '${atividade.titulo}', descricao = '${atividade.descricao}', idCard = '${atividade.idCard}'`;

                        //Insere dados no db
                        db.transaction(function (tx) {             
                            tx.executeSql(`UPDATE INTO ${table} SET ${values} VALUES (${condition})`);
                        });
                    } 
                }, null); 
            }); 
            this.atualiza();
        }

        //LISTA ATIVIDADES
        lista(): void{

            let table: string = 'Atividades'; //Idica qual tabela será alterada

            //busca objeto
            db.transaction(function (tx) {             
                tx.executeSql(`SELECT * FROM ${table}`, 
             [], 
             function (tx, results: any) 
                {        
                    var len = results.rows.length, i; 

                    const _atividades = new Atividades();

                    console.log(len)

                    for (i = 0; i < len; i++) 
                    { 
                        
                        const atividade = new Atividade(
                            results.rows.item(i).id,
                            results.rows.item(i).titulo,
                            results.rows.item(i).descricao,
                            results.rows.item(i).idCard
                        );

                        //Finaliza para exibição
                        if(results.rows.item(i).idCard == 'cardToDo')
                        {
                            const _atividadesView = new AtividadesView('.to-do');
                            _atividades.adiciona(atividade);            
                            _atividadesView.update(_atividades);
                        }
                        if(results.rows.item(i).idCard == '.card-in-progress')
                        {
                            const _atividadesView = new AtividadesView('.card-in-progress');
                            _atividades.adiciona(atividade);            
                            _atividadesView.update(_atividades);
                        }  
                        if(results.rows.item(i).idCard == '.card-in-progress')
                        {
                            const _atividadesView = new AtividadesView('.card-done');
                            _atividades.adiciona(atividade);            
                            _atividadesView.update(_atividades);
                        }  
                    } 
                }, null); 
            });
        }          

        dragDrop(): any{

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
                        controller.atualiza();

                    });
                }  
            }	    
        }

        //BADGE
        badge(): any{      

            let total_toDo: number = $('.to-do .activity').length;//recebe a quantidade das atividades no to-do
            let total_inProgress: number = $('.in-progress .activity').length;//recebe a quantidade das atividades no in-progress
            let total_done: number = $('.done .activity').length;//recebe a quantidade das atividades no done
            let total_activities: number = total_toDo + total_inProgress + total_done; 

            //exibe a quantidade de atividades nos badgies
            $('.badge-to-do').text(this.limitBadge(total_toDo));
            $('.badge-in-progress').text(this.limitBadge(total_inProgress));
            $('.badge-done').text(`${this.limitBadge(total_done)} / ${total_activities}`);        
    
        }

        //PROGRESSBAR
        progressbar(): any{

            let total_toDo: number = $('.to-do .activity').length;//recebe a quantidade das atividades no to-do
            let total_inProgress: number = $('.in-progress .activity').length;//recebe a quantidade das atividades no in-progress
            let total_done: number = $('.done .activity').length;//recebe a quantidade das atividades no done
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

        //ATUALIZA: função atualiza as ações da página
        atualiza(): void{

            setTimeout(function () { 

                const controller = new AtividadeController();
                controller.lista();
                controller.dragDrop();
                controller.progressbar();
                controller.badge(); 
                
            }, 1);

        }       
        
        callID(): string{

            return $('[data-activity]').attr('id');
        }
        
}
