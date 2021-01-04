import {AtividadeController} from './controllers/AtividadeController';
import {Atividade, Atividades, Badges, Progressbar, DragAndDrop} from './models/index';

const controller = new AtividadeController();

controller.lista();        

// submete o form que adiciona atividades
$('#cards').submit(controller.adiciona.bind(controller));

// limpa o form que adiciona atividades
$('#clear_btn').click(controller.limpa.bind(controller));

// limpa o form que adiciona atividades
$('#cancel_btn').click(controller.limpa.bind(controller));

// apaga todas as atividades (Apaga a tabela)
$('#clear_all_btn').click(controller.clear_all.bind(controller));

// deleta do card To Do
$("#cardToDo").on('click', '#trash_btn', function() {  
    var id = $(this).attr('data-activity');  
    controller.deleta(id);
});

// deleta do card In Progress
$("#cardInProgress").on('click', '#trash_btn', function() {    
    controller.deleta($(this).attr('data-activity'));
});

// deleta do card Done
$("#cardDone").on('click', '#trash_btn', function() {    
    controller.deleta($(this).attr('data-activity'));
});