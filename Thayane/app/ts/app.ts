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

//Deletar os cartões
const editarDeletarKanban = new BotoesDeletarEditar();
$("#nav-link-kanban_aFazer").on('click', '.btnDeletar', function() {
    editarDeletarKanban.eu = $(this);
    editarDeletarKanban.deletar();
});
$("#nav-link-kanban_fazendo").on('click', '.btnDeletar', function() {
    editarDeletarKanban.eu = $(this);
    editarDeletarKanban.deletar();
});
$("#nav-link-kanban_feitas").on('click', '.btnDeletar', function() {
    editarDeletarKanban.eu = $(this);
    editarDeletarKanban.deletar();
});

//Editar os cartões
$("#nav-link-kanban_aFazer").on('click', '.btnEditar', function() {
    editarDeletarKanban.eu = $(this);
    editarDeletarKanban.editar();
});
$("#nav-link-kanban_fazendo").on('click', '.btnEditar', function() {
    editarDeletarKanban.eu = $(this);
    editarDeletarKanban.editar();
});
$("#nav-link-kanban_feitas").on('click', '.btnEditar', function() {
    editarDeletarKanban.eu = $(this);
    editarDeletarKanban.editar();
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
const mover = new MoverKanban();
$("#nav-link-kanban_aFazer").on('click', '.btnMoverDireita', function() {
    mover.eu = $(this);
    mover.moverFazendo();
});
$("#nav-link-kanban_aFazer").on('click', '.btnMoverEsquerda', function() {
    mover.eu = $(this);
    mover.moverFeitas();
});
$("#nav-link-kanban_fazendo").on('click', '.btnMoverDireita', function() {
    mover.eu = $(this);
    mover.moverFeitas();
});
$("#nav-link-kanban_fazendo").on('click', '.btnMoverEsquerda', function() {
    mover.eu = $(this);
    mover.moverAFazer();
});
$("#nav-link-kanban_feitas").on('click', '.btnMoverDireita', function() {
    mover.eu = $(this);
    mover.moverAFazer();
});
$("#nav-link-kanban_feitas").on('click', '.btnMoverEsquerda', function() {
    mover.eu = $(this);
    mover.moverFazendo();
});

//Contar a quantidade de cartões em cada lista
const contarFormacoes = new ContarFormacoes();
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