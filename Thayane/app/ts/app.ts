import { AddFormacaoController, MudarClasseResponsivo, AddSkillController, BotoesDeletarEditar, ContarFormacoes, MoverKanban, Expandir} from './controllers/index';
import { ModalController } from './controllers/index';
import { FormacaoDao } from './dao/index';
import { AddSkillsView } from './views/index';
import { Kanban } from './models/index'
const muda = new MudarClasseResponsivo();
$.when(window).then(() => muda.tamanho());
$(window).resize(() => muda.tamanho());

const kabanboard = new Kanban();
const controllerFormacoes = new AddFormacaoController(kabanboard);
$('[data-form-formacao]').submit(controllerFormacoes.adiciona.bind(controllerFormacoes));

const controllerSkills = new AddSkillController();
$('[data-form-skill]').submit(controllerSkills.adiciona.bind(controllerSkills));

const modal = new ModalController();
$('#btn-modal').click(() => modal.esconderModal());

const contarFormacoes = new ContarFormacoes();
const editarDeletarKanban = new BotoesDeletarEditar();
const expandir = new Expandir();
const mover = new MoverKanban(kabanboard);

$("#nav-link-kanban_afazer").on('click', '.btnMoverDireita', function() {
    mover.eu = $(this);
    console.log('teste somente botao btnMoverDireita');
    mover.moverAFazer();
});
