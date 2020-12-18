import { AddFormacaoController, MudarClasseResponsivo, AddSkillController, BotoesDeletarEditar, ContarFormacoes} from './controllers/index';
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
            var eu = $(this);

            if(eu.hasClass('btnDeletar')){
                var card = $(eu).siblings(); 
                card.remove();
                //editarDeletarKanban.deletar();
            }
            else if(eu.hasClass('btnEditar')){
                var voltando = $(eu).parents('.botoes');
                console.log(voltando)
                var titulo = $(voltando).children('.quebrarTexto');
                console.log(titulo)
                titulo.text('Oi');
                //editarDeletarKanban.editar();       
            }
        });

        $("#addAqui").find(".btnMoverDireita").click(function(){
            var eu = $(this);
            var card = eu.parents('.card');
            console.log(card);
        });

        $("#addAqui").find(".btnMoverEsquerda").click(function(){
            var eu = $(this);
            var card = eu.parents('.card');
            console.log(card);     
        });

        contarFormacoes.update();
    })
});observer.observe(document.querySelector("#addAqui"), { childList: true });