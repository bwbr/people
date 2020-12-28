import {AtividadeController} from './controllers/AtividadeController';

const controller = new AtividadeController();

controller.atualiza();

controller.drag_and_drop(); //DRAG AND DROP
// submete o form que adiciona atividades
$('#cards').submit(controller.adiciona.bind(controller));

// limpa o form que adiciona atividades
$('#clear_btn').click(controller.limpa.bind(controller));

// limpa o form que adiciona atividades
$('#cancel_btn').click(controller.limpa.bind(controller));

// apaga todas as atividades (Apaga a tabela)
$('#trash_btn').click(controller.deleta.bind(controller));

// apaga todas as atividades (Apaga a tabela)
$('#trash_all_btn').click(controller.clear_all.bind(controller));

