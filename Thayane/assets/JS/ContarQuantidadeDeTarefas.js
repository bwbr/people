var link_aFazer = document.querySelector('#addAqui');
var link_fazendo = document.querySelector('#nav-link-kanban_fazendo');
var link_feitas = document.querySelector('#nav-link-kanban_feitas');

var span_aFazer = document.querySelector('#span_aFazer');
var span_fazendo = document.querySelector('#span_fazendo');
var span_feitas = document.querySelector('#span_feitas');

document.addEventListener('click', () => {
    function aumentarQuantidade(){
        span_aFazer.textContent = link_aFazer.childNodes.length -1;
        span_fazendo.textContent = link_fazendo.childNodes.length -1;
        span_feitas.textContent = link_feitas.childNodes.length -1;
    }    

    aumentarQuantidade();
})