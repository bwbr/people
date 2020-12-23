import {AtividadeController} from './controllers/AtividadeController';
//import {PDO} from './services/PDO';

//const db = new PDO();
const controller = new AtividadeController();
//db.dropTable('Atividades');
//db.dropTable('sqlite_sequence');

// submete o form que adiciona atividades
$('#cards').submit(controller.adiciona.bind(controller));

// limpa o form que adiciona atividades
$('#clear_btn').click(controller.limpa.bind(controller));

// limpa o form que adiciona atividades
$('#cancel_btn').click(controller.limpa.bind(controller));