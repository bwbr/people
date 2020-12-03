var campos = document.querySelector('[data-form-formacao]');
var tarefas = document.querySelector('#addAqui');
var $ = document.querySelector.bind(document);
let i = 0;

$('[data-form-btn]').addEventListener('click', (event) => {
    event.preventDefault();
    var z = document.createElement('div');
    z.className = 'card formacoes arrastar_js';
    z.draggable = true;
    if(campos != null){
        
        let formacao = 
            `<div class="card-header">
                    <a class="card-link" data-toggle="collapse" href="#collapse${i}">
                       ${campos.value}
                    </a>
                </div>
                <div id="collapse${i}" class="collapse" data-parent="#accordion_fazer">
                    <div class="card-body">
                        'Lorem ipsum...'
                    </div>
                </div>
            </div>`
        i++;
        z.innerHTML += formacao;
        tarefas.appendChild(z);        
        campos.value = '';
}}); 

const BotaoEditar = () => {
    const botaoEditar = document.createElement('button');

    botaoEditar.addEventListener('click', () => {
        console.log('fui clicado');
    })

    return botaoEditar;
}