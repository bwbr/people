import { AddFormacaoController, MudarClasseResponsivo, AddSkillController, Deletar, Editar, ContarFormacoes, MoverKanban, Expandir} from './controllers/index';
import { ModalController } from './controllers/index';
import { FormacaoDaoAFazer, FormacaoDaoFazendo, FormacaoDaoFeitas, SkillDao } from './dao/index';
import { AddFormacoesView, AddSkillsView, KanbanView } from './views/index';
import { AddFormacao, Kanban } from './models/index'

const muda = new MudarClasseResponsivo();
$.when(window).then(() => muda.tamanho());
$(window).resize(() => muda.tamanho());

const kabanboard = new Kanban();
const add = new AddFormacao('', '', 0, 'expandir0');
const controllerFormacoes = new AddFormacaoController(kabanboard, add);
$('[data-form-formacao]').submit(controllerFormacoes.adiciona.bind(controllerFormacoes));

const controllerSkills = new AddSkillController();
$('[data-form-skill]').submit(controllerSkills.adiciona.bind(controllerSkills));

const modal = new ModalController();
$('#btn-modal').click(() => modal.esconderModal());

//Deletar os cartões
const deletar = new Deletar(kabanboard);
$("#nav-link-kanban_aFazer").on('click', '.btnDeletar', function() {
    deletar.eu = $(this);
    deletar.deletarAFazer('formacoesAFazer');
});
$("#nav-link-kanban_fazendo").on('click', '.btnDeletar', function() {
    deletar.eu = $(this);
    deletar.deletarFazendo('formacoesFazendo');
});
$("#nav-link-kanban_feitas").on('click', '.btnDeletar', function() {
    deletar.eu = $(this);
    deletar.deletarFeitas('formacoesFeitas');
});

//Editar os cartões
const editar = new Editar(kabanboard);
$("#nav-link-kanban_aFazer").on('click', '.btnEditar', function() {
    editar.eu = $(this);
    editar.editar();
});
$("#nav-link-kanban_fazendo").on('click', '.btnEditar', function() {
    editar.eu = $(this);
    editar.editar();
});
$("#nav-link-kanban_feitas").on('click', '.btnEditar', function() {
    editar.eu = $(this);
    editar.editar();
});

//Expandir os cartões
const expandir = new Expandir();
$("#nav-link-kanban_aFazer").on('click', '.btnExpandir', function() {
    expandir.eu = $(this);
    expandir.expandir();
});
$("#nav-link-kanban_fazendo").on('click', '.btnExpandir', function() {
    expandir.eu = $(this);
    expandir.expandir();
});
$("#nav-link-kanban_feitas").on('click', '.btnExpandir', function() {
    expandir.eu = $(this);
    expandir.expandir();
});

//Mover os cartões entre os quadros
const mover = new MoverKanban(kabanboard);
$("#nav-link-kanban_aFazer").on('click', '.btnMoverDireita', function() {
    mover.eu = $(this);
    mover.moverAFazerFazendo('formacoesAFazer');
});
$("#nav-link-kanban_aFazer").on('click', '.btnMoverEsquerda', function() {
    mover.eu = $(this);
    mover.moverAFazerFeitas('formacoesAFazer');
});
$("#nav-link-kanban_fazendo").on('click', '.btnMoverDireita', function() {
    mover.eu = $(this);
    mover.moverFazendoFeitas('formacoesFazendo');
});
$("#nav-link-kanban_fazendo").on('click', '.btnMoverEsquerda', function() {
    mover.eu = $(this);
    mover.moverFazendoAFazer('formacoesFazendo');
});
$("#nav-link-kanban_feitas").on('click', '.btnMoverDireita', function() {
    mover.eu = $(this);
    mover.moverFeitasAFazer('formacoesFeitas');
});
$("#nav-link-kanban_feitas").on('click', '.btnMoverEsquerda', function() {
    mover.eu = $(this);
    mover.moverFeitasFazendo('formacoesFeitas');
});

//Contar a quantidade de cartões em cada lista
const contarFormacoes = new ContarFormacoes();
const _addKanbanView = new KanbanView('');
var observaAFazer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) { 
        contarFormacoes.update();
    })
});observaAFazer.observe(document.querySelector("#nav-link-kanban_aFazer"), { childList: true });
var observaFazendo = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {     
        contarFormacoes.update();
    })
});observaFazendo.observe(document.querySelector("#nav-link-kanban_fazendo"), { childList: true });
var observaFeitas = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {       
        contarFormacoes.update();
    })
});observaFeitas.observe(document.querySelector("#nav-link-kanban_feitas"), { childList: true });


//Skills
$("#novaSkill").on('click', '.btnDeletar', function() {
    deletar.eu = $(this);
    deletar.deletarSkill('skills');
});
$("#novaSkill").on('click', '.btnEditar', function() {
    editar.eu = $(this);
    //editar.editarSkill();
});