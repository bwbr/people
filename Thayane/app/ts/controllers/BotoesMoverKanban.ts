document.addEventListener('click', evento => {
const cartoes = document.querySelectorAll('.arrastar_js');
const listas = document.querySelectorAll('[data-kanbam]');


function mover(){
    listas.forEach(lista => lista.classList.add('destaqueQueda'));
    this.classList.add('movendo');

    console.log("oi")
}
})

export class BotoesMoverKanban{
    private _btnMoverDireita: JQuery;
    private _btnMoverEsquerda: JQuery;

    constructor(){
        this._btnMoverDireita = $('.btnMoverDireita');
        this._btnMoverEsquerda = $('.btnMoverEsquerda');
    }

    moverDireita(){

    }

    moverEsquerda(){

    }
}