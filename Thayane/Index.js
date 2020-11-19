const cartoes = document.querySelectorAll('[data-formacao]');
const listas = document.querySelectorAll('[data-kanbam]');

function arrastarSobre() {
    const cartaoIniciandoMover = document.querySelector('.movendo');
    this.classList.add('fim');
    this.appendChild(cartaoIniciandoMover);
}
  
function arrastarFim() {
    this.classList.remove('fim');
}
  
function soltar() {
    this.classList.remove('fim');
}
  
function iniciarArrastar() {
    listas.forEach(lista => lista.classList.add('destaqueQueda'));
    this.classList.add('movendo');
}
  
function finalizarArrastar() {
    listas.forEach(lista => lista.classList.remove('destaqueQueda'));
    this.classList.remove('movendo');
}

cartoes.forEach(cartoes => {
    //Mouse
    cartoes.addEventListener('dragstart', iniciarArrastar);
    cartoes.addEventListener('dragend', finalizarArrastar);
    //Touch
    cartoes.addEventListener("touchstart", iniciarArrastar, false);
    cartoes.addEventListener("touchend", finalizarArrastar, false);
});
  
listas.forEach( lista => {
    //Mouse
    lista.addEventListener('dragover', arrastarSobre);
    lista.addEventListener('dragleave', arrastarFim);
    lista.addEventListener('drop', soltar);
    //Touch (não está funcionando)
    //lista.addEventListener("touchcancel", arrastarSobre, false);
    //lista.addEventListener("touchleave", arrastarFim, false);
    //lista.addEventListener("touchmove", soltar, false);
})