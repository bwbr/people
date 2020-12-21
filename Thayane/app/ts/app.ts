import { AddFormacaoController, MudarClasseResponsivo, AddSkillController, BotoesDeletarEditar, ContarFormacoes, MoverKanban} from './controllers/index';
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
const mover = new MoverKanban();
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {        
        $("#addAqui").find(".btnExpandir").click(function(){
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
});observer.observe(document.querySelector("#addAqui"), { childList: true });

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