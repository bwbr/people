import {AtividadeController} from './controllers/AtividadeController';

const controller = new AtividadeController();

controller.atualiza();

$('#form_activity_add').submit(controller.adiciona.bind(controller));
$('#form_activity_edit').submit(controller.edita.bind(controller));
$('#clear_btn').click(controller.limpa.bind(controller));
