var contato1 = document.querySelector('#contato1');
var contato2 = document.querySelector('#contato2');

var kanbam = document.querySelector('#kanbanTab');
var navKanban = document.querySelector('#navKanban');
var navKanbanLink = document.querySelector('#navKanban .nav-link');
var aFazer = document.querySelector('#accordion_fazer');
var fazendo = document.querySelector('#accordion_fazendo');
var feitas = document.querySelector('#accordion_feita');

tamanho();
function tamanho(){
    if(document.body.clientWidth >= 576){
        contato1.className = 'input-group mb-2';
        contato2.className = 'input-group mb-2';
    }else{
        contato1.className = 'form-group mb-2';
        contato2.className = 'form-group mb-2';
    }    

    if(document.body.clientWidth >= 768){
        kanbam.className = 'row card-deck';
        navKanban.className = 'nav nav-tabs invisible';
        navKanbanLink.classList.add('oi')
        aFazer.className = 'kanbam col-sm-4 pt-3 m-1 bg-danger';
        fazendo.className = 'kanbam col-sm-4 pt-3 m-1 bg-warning';
        feitas.className = 'kanbam col-sm-4 pt-3 m-1 bg-success';
    }else{
        kanbam.className = 'tab-content';
        navKanban.className = 'nav nav-tabs justify-content-end';
        navKanbanLink.classList.add('oi')
        aFazer.className = 'container tab-pane active col-sm-4 pt-3 m-1 bg-danger';
        fazendo.className = 'container tab-pane fade col-sm-4 pt-3 m-1 bg-warning';
        feitas.className = 'container tab-pane fade col-sm-4 pt-3 m-1 bg-success';
    }
}
document.body.onresize = () => tamanho();