var contato1 = document.querySelector('#contato1');
var contato2 = document.querySelector('#contato2');

tamanho();
function tamanho(){
    if(document.body.clientWidth >= 576){
        contato1.className = 'input-group mb-2';
        contato2.className = 'input-group mb-2';
    }
    
    else{
        contato1.className = 'form-group mb-2';
        contato2.className = 'form-group mb-2';
    }    
}
document.body.onresize = () => tamanho();