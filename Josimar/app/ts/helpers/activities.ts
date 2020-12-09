
let activity: any = document.querySelectorAll('.activity');
let card_body: any = document.querySelectorAll('.activities');

let draggedActivity: any = null;

badge();

//Percorre / busca todas as divs com classes de ".activity"
for(let i: number = 0; i < activity.length; i++){
	let a: HTMLDivElement = activity[i];	

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

	for(let j: number = 0; j < card_body.length; j++){
		const cb: HTMLDivElement = card_body[j];
		
		cb.addEventListener('dragstart', function (){
		});

		cb.addEventListener('dragover', function(e: Event){
			e.preventDefault();			
		});

		cb.addEventListener('dragenter', function(e: Event){
			e.preventDefault();
		});

		cb.addEventListener('drop', function(e: Event){
			e.preventDefault();
			this.appendChild(draggedActivity);

			badge();
		});
	}

}


function badge(){
    setTimeout(function(){

        let total_toDo: number = document.querySelectorAll("#cardToDo .activity").length;//recebe a quantidade das atividades no to-do
        let total_inProgress: number = document.querySelectorAll("#cardInProgress .activity").length;//recebe a quantidade das atividades no in-progress
        let total_done: number = document.querySelectorAll("#cardDone .activity").length;//recebe a quantidade das atividades no done
        let total_activities: number = total_toDo + total_inProgress + total_done;

        $('.badge-to-do').text(limitBadge(total_toDo));
        $('.badge-in-progress').text(limitBadge(total_inProgress));
        $('.badge-done').text(`${limitBadge(total_done)} / ${total_activities}`);        
        
        //calcula percentagem
        let percent_toDo = percent(total_toDo, total_activities);
        let percent_inProgress = percent(total_inProgress, total_activities);
        let percent_done = percent(total_done, total_activities);
        
        //atualiza skills progress-bar
        $("#progress-to-do").css("width", `${(percent_toDo)}%`); //width de progresso to-do
        $("#progress-in-progress").css("width", `${(percent_inProgress)}%`); //width de progresso in-progress
        $("#progress-done").css("width", `${(percent_done)}%`); //width de progresso done

        //atualiza skills porcentagens
        $(".percent-to-do").text(`${(percent_toDo).toFixed()}%`); //porcentagem progresso to-do
        $(".percent-in-progress").text(`${(percent_inProgress).toFixed()}%`); //porcentagem progresso in-progress
        $(".percent-done").text(`${(percent_done).toFixed()}%`); //porcentagem progresso done

        colorBgProgress(percent_toDo, document.querySelector("#progress-to-do"));//background de progresso to-do
        colorBgProgress(percent_inProgress, document.querySelector("#progress-in-progress"));//background  de progresso to-do
        colorBgProgress(percent_done, document.querySelector("#progress-done"));//background de progresso done

        console.log("Total:   ", total_activities);
        console.log("Fazer:   ", total_toDo);
        console.log("Fazendo: ", total_inProgress);
        console.log("Feito:   ", total_done); 

        console.log("Fazer:   ", percent_toDo);
        console.log("Fazendo: ", percent_inProgress);
        console.log("Feito:   ", percent_done);         
        
    }, 1);	

}

//Retorna a quantidade limite para o badge
function limitBadge(qtd: number){
    let limitQtd: string;
    if(qtd > 99){ 
        return limitQtd = "99+"; //limita 2 digitos para quantidade maior que 100 atividades
    }else{
        return qtd; //retorna o valor até 99 atividades;
    }
}

//Retorna a percentagem
function percent(n: number, total: number){
    let p = (n / total) * 100;
    return p;
}

//função alterna cor do progress-bar
function colorBgProgress(percent_name:any, progress_name: Element){
    if(parseFloat(percent_name) == 100){
        progress_name.classList.remove('progress-bar-blue'); //background progress
        progress_name.classList.add('progress-bar-success'); //background success
    }else{
        progress_name.classList.remove('progress-bar-success'); //background success
        progress_name.classList.add('progress-bar-blue'); //background progress
    }
}

