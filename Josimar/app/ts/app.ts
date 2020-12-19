import {AtividadeController} from './controllers/AtividadeController';

const controller = new AtividadeController();

controller.atualiza();

// submete o form que adiciona atividades
$('#form_activity_add').submit(controller.adiciona.bind(controller));

 // submete o form que edita atividades
$('#form_activity_edit').click(controller.edita.bind(controller));
 
// limpa o form que adiciona atividades
$('#clear_btn').click(controller.limpa.bind(controller));
