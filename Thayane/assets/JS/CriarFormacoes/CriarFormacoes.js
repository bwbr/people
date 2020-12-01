var campos = document.querySelector('[data-form-formacao]');
var tarefas = document.querySelector('#accordion_fazer');
var $ = document.querySelector.bind(document);
$('[data-form-btn]').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Fui clicado')
    var z = document.createElement('div');
    if(campos != null){
        let formacao = 
        `<div class="card formacoes" data-formacao draggable="true">
            <div class="card-header">
                <a class="card-link" data-toggle="collapse" href="#collapse1">
                   ${campos.value}
                </a>
            </div>
            <div id="collapse1" class="collapse" data-parent="#accordion_fazer">
                <div class="card-body">
                    'Lorem ipsum...'
                </div>
            </div>
        </div>`
        
        z.innerHTML += formacao;
        tarefas.appendChild(z);
}}); 