import { AddFormacaoController, MudarClasseResponsivo, AddSkillController} from './controllers/index';
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


var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        
        $("#addAqui").find(".btnExpandir").click(function(){
            var eu = $(this);
            console.log(eu);
        
            var irmao = $(eu).siblings();
            console.log(irmao);
        
            var sobrinho = $(irmao).children();
            console.log(sobrinho);

            if(sobrinho.hasClass('iconeDeletar'))
                sobrinho.removeClass('iconeDeletar').addClass('iconeEditar');
            else if(sobrinho.hasClass('iconeEditar'))
                sobrinho.removeClass('iconeEditar').addClass('iconeDeletar');
        });
        
    })
});observer.observe(document.querySelector("#addAqui"), { childList: true });

