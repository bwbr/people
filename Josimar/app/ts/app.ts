import {AtividadeController} from './controllers/AtividadeController';
import {Media} from './helpers/Media'

const controller = new AtividadeController();
const media = new Media();

$.when(window).then(() => media.layout());
$(window).resize(() => media.layout());

controller.lista();      
controller.drag_and_drop();      

// submete o form que adiciona atividades
$('#cards').submit(controller.adiciona.bind(controller));

// limpa o form que adiciona atividades
$('#clear_btn').click(controller.limpa.bind(controller));

// limpa o form que adiciona atividades
$('#cancel_btn').click(controller.limpa.bind(controller));

// DELETA ATIVIDADES

// deleta todas as atividades (Drop table)
$('#clear_all_btn').click(controller.clear_all.bind(controller));

// deleta do card To Do
$("#cardToDo").on('click', '#trash_btn', function() {     
    controller.deleta($(this).attr('data-activity'));
});

// deleta do card In Progress
$("#cardInProgress").on('click', '#trash_btn', function() {    
    controller.deleta($(this).attr('data-activity'));
});

// deleta do card Done
$("#cardDone").on('click', '#trash_btn', function() {    
    controller.deleta($(this).attr('data-activity'));
});

// MOVE ATIVIDADES

// move do card To Do para o próximo
$("#cardToDo").on('click', '#next', function() {  
    var id = $(this).attr('data-activity');  
    controller.move(id, 'cardInProgress');
    $("#nav-to-do").removeClass('active');
    $("#nav-in-progress").addClass('active');
});

// move do card In Progress para o próximo
$("#cardInProgress").on('click', '#next', function() {   
    var id = $(this).attr('data-activity'); 
    controller.move(id, 'cardDone');
    $("#nav-in-progress").removeClass('active');
    $("#nav-done").addClass('active');
});

// move do card Done para o próximo
$("#cardDone").on('click', '#next', function() {   
    var id = $(this).attr('data-activity');   
    controller.move(id, 'cardToDo');
    $("#nav-done").removeClass('active');
    $("#nav-to-do").addClass('active');
});

// move do card To Do para o anterior
$("#cardToDo").on('click', '#back', function() {  
    var id = $(this).attr('data-activity');  
    controller.move(id, 'cardDone');
    $("#nav-to-do").removeClass('active');
    $("#nav-done").addClass('active');
});

// move do card In Progress para o anterior
$("#cardInProgress").on('click', '#back', function() {   
    var id = $(this).attr('data-activity'); 
    controller.move(id, 'cardToDo');
    $("#nav-in-progress").removeClass('active');
    $("#nav-to-do").addClass('active');
});

// move do card Done para o anterior
$("#cardDone").on('click', '#back', function() {   
    var id = $(this).attr('data-activity');   
    controller.move(id, 'cardInProgress');
    $("#nav-done").removeClass('active');
    $("#nav-in-progress").addClass('active');
});


