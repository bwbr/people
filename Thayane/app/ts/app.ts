import { AddFormacaoController } from './controllers/AddFormacaoController';
import { MudarClasseResponsivo } from './controllers/MudarClasseResponsivo';

const muda = new MudarClasseResponsivo();
$.when(window).then(() => muda.tamanho());
$(window).resize(() => muda.tamanho());
    
const controller = new AddFormacaoController();
$('[data-form]').submit(controller.adiciona.bind(controller))
