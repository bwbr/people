var campos = document.querySelector('[data-form-formacao]');
var tarefas = document.querySelector('#accordion_fazer');

document.querySelector('[data-form-btn]').addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Fui clicado')
    var z = document.createElement('div');
    if(campos != null){
        let formacao = '<div class="card formacoes" data-formacao draggable="true">'
            formacao += '<div class="card-header">'
                formacao += '<a class="card-link" data-toggle="collapse" href="#collapse1">' 
                    formacao += campos.value;
                formacao += '</a>'
            formacao += '</div>'
            formacao += '<div id="collapse1" class="collapse" data-parent="#accordion_fazer">'
                formacao += '<div class="card-body">'
                    formacao+= 'Lorem ipsum...'
                formacao += '</div>'
            formacao += '</div>'
        formacao += '</div>'
        
        z.innerHTML += formacao;
        tarefas.appendChild(z);
}}); 