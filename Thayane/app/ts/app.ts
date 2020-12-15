import { AddFormacaoController, MudarClasseResponsivo, AddSkillController} from './controllers/index';

const muda = new MudarClasseResponsivo();
$.when(window).then(() => muda.tamanho());
$(window).resize(() => muda.tamanho());
    
const controller = new AddFormacaoController();
$('[data-form]').submit(controller.adiciona.bind(controller))
