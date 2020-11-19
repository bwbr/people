const activity = document.querySelectorAll('.activity');
const card_body = document.querySelectorAll('.card_body');

let firstCard = null;
let selectedCard = null; let 
draggedActivity = null;

//Percorre / busca todas as divs com classes de ".activity"
for(let i = 0; i < activity.length; i++){

	const a = activity[i];	

	a.addEventListener('dragstart', function (){

		draggedActivity = this;			
		setTimeout(function(){
			this.style.display = 'none';
		}, 0);	
			
	});

	a.addEventListener('dragend', function (){

		setTimeout(function(){						
			draggedActivity.style = 'block';
			draggedActivity = null;
		}, 0);		

	});

	//Percorre / busca todas as divs com classes de ".card_body"
	for(let j = 0; j < card_body.length; j++){
		const cb = card_body[j];

		cb.addEventListener('dragstart', function (){
			firstCard = this;
		});

		cb.addEventListener('dragover', function(e){
			e.preventDefault();			
		});

		cb.addEventListener('dragenter', function(e){
			e.preventDefault();
		});

		cb.addEventListener('drop', function(e){
			this.appendChild(draggedActivity);
			selectedCard = this;
			/* Envia informações do "card" para a função referentes 
			ao estilo antigo, ao estilo atual e qual "atividade" irá alterar */
			colorActivity(selectedCard, firstCard, draggedActivity);
		});
	}

}
// Remove e adiciona novo estilo de cor conforme o "card" selecionado
function colorActivity(s, f, a){
	switch (s.id) {//Card selecionado (to_do, in_progress, done)
		case "to_do": //Caso to_do
			a.classList.remove("activity_" + f.id + "");//Remove classe antiga
			a.classList.add("activity_to_do");//Adiciona nova classe
			break;
		case "in_progress"://Caso in_progress
			a.classList.remove("activity_" + f.id + "");//Remove classe antiga
			a.classList.add("activity_in_progress"); //Adiciona nova classe
			break;
		case "done"://Caso done
			a.classList.remove("activity_to_" + f.id + "");//Remove classe antiga
			a.classList.add("activity_done");//Adiciona nova classe
			break;
		default:
			break;
	}
}