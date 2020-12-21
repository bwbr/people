import { AddFormacaoController, MudarClasseResponsivo, AddSkillController, BotoesDeletarEditar, ContarFormacoes, MoverKanban, Expandir} from './controllers/index';
import { ModalController } from './controllers/index';
import { AddSkillsView } from './views/index';

const muda = new MudarClasseResponsivo();
$.when(window).then(() => muda.tamanho());
$(window).resize(() => muda.tamanho());
    
const controllerFormacoes = new AddFormacaoController();
$('[data-form-formacao]').submit(controllerFormacoes.adiciona.bind(controllerFormacoes));

const controllerSkills = new AddSkillController();
$('[data-form-skill]').submit(controllerSkills.adiciona.bind(controllerSkills));

const modal = new ModalController();
$('#btn-modal').click(() => modal.esconderModal());

const contarFormacoes = new ContarFormacoes();
const editarDeletarKanban = new BotoesDeletarEditar();
const expandir = new Expandir();
const mover = new MoverKanban();
var observaAFazer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) { 
        console.log("A fazer...")         
        $("#addAqui").find(".btnExpandir").click(function(){
            expandir.eu = $(this);
            expandir.expandir();        
        });
        
        $("#addAqui").find(".btnDeletar").click(function(){
            editarDeletarKanban.eu = $(this);

            if(editarDeletarKanban.eu.hasClass('btnDeletar')){
                editarDeletarKanban.deletar();
            }
            else if(editarDeletarKanban.eu.hasClass('btnEditar')){
                editarDeletarKanban.editar();                       
            }
        });

        $("#addAqui").find(".btnMoverDireita").click(function(){
            mover.eu = $(this);
            mover.moverFazendo();     
        });

        $("#addAqui").find(".btnMoverEsquerda").click(function(){
            mover.eu = $(this);
            mover.moverFeitas();     
        });

        contarFormacoes.update();
    })
});observaAFazer.observe(document.querySelector("#addAqui"), { childList: true });

var observaFazendo = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {     
        console.log("Fazendo...")   
        $("#nav-link-kanban_fazendo").find(".btnExpandir").click(function(){
            var eu = $(this);        
            var irmao = $(eu).siblings();        
            var sobrinho = $(irmao).children();

            if(sobrinho.hasClass('iconeDeletar')){
                sobrinho.removeClass('iconeDeletar').addClass('iconeEditar');
                irmao.removeClass('btnDeletar').addClass('btnEditar');
                
            }
            else if(sobrinho.hasClass('iconeEditar')){
                sobrinho.removeClass('iconeEditar').addClass('iconeDeletar');
                irmao.removeClass('btnEditar').addClass('btnDeletar');
            }
        });
        
        $("#nav-link-kanban_fazendo").find(".btnDeletar").click(function(){
            editarDeletarKanban.eu = $(this);

            if(editarDeletarKanban.eu.hasClass('btnDeletar')){
                editarDeletarKanban.deletar();
            }
            else if(editarDeletarKanban.eu.hasClass('btnEditar')){
                editarDeletarKanban.editar();      
            }
        });

        $("#nav-link-kanban_fazendo").find(".btnMoverDireita").click(function(){
            mover.eu = $(this);
            mover.moverFeitas();     
        });

        $("#nav-link-kanban_fazendo").find(".btnMoverEsquerda").click(function(){
            mover.eu = $(this);
            mover.moverAFazer();     
        });

        contarFormacoes.update();
    })
});observaFazendo.observe(document.querySelector("#nav-link-kanban_fazendo"), { childList: true });

var observaFeitas = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {     
        console.log("Feitas...")     
        $("#nav-link-kanban_feitas").find(".btnExpandir").click(function(){
            var eu = $(this);        
            var irmao = $(eu).siblings();        
            var sobrinho = $(irmao).children();

            if(sobrinho.hasClass('iconeDeletar')){
                sobrinho.removeClass('iconeDeletar').addClass('iconeEditar');
                irmao.removeClass('btnDeletar').addClass('btnEditar');
                
            }
            else if(sobrinho.hasClass('iconeEditar')){
                sobrinho.removeClass('iconeEditar').addClass('iconeDeletar');
                irmao.removeClass('btnEditar').addClass('btnDeletar');
            }
        });
        
        $("#nav-link-kanban_feitas").find(".btnDeletar").click(function(){
            editarDeletarKanban.eu = $(this);

            if(editarDeletarKanban.eu.hasClass('btnDeletar')){
                editarDeletarKanban.deletar();
            }
            else if(editarDeletarKanban.eu.hasClass('btnEditar')){
                editarDeletarKanban.editar();       
            }
        });

        $("#nav-link-kanban_feitas").find(".btnMoverDireita").click(function(){
            mover.eu = $(this);
            mover.moverAFazer();     
        });

        $("#nav-link-kanban_feitas").find(".btnMoverEsquerda").click(function(){
            mover.eu = $(this);
            mover.moverFazendo();     
        });

        contarFormacoes.update();
    })
});observaFeitas.observe(document.querySelector("#nav-link-kanban_feitas"), { childList: true });

var observador = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        $("#novaSkill").find(".btnDeletar").click(function(){
            editarDeletarKanban.eu = $(this);
            editarDeletarKanban.deletarSkill();
        });

        $("#novaSkill").find(".btnEditar").click(function(){
            editarDeletarKanban.eu = $(this); 
            editarDeletarKanban.editarSkill();
        });
    })
});observador.observe(document.querySelector("#novaSkill"), { childList: true });