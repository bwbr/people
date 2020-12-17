System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var BotoesMoverKanban;
    return {
        setters: [],
        execute: function () {
            document.addEventListener('click', evento => {
                const cartoes = document.querySelectorAll('.arrastar_js');
                const listas = document.querySelectorAll('[data-kanbam]');
                function mover() {
                    listas.forEach(lista => lista.classList.add('destaqueQueda'));
                    this.classList.add('movendo');
                    console.log("oi");
                }
            });
            BotoesMoverKanban = class BotoesMoverKanban {
                constructor() {
                    this._btnMoverDireita = $('.btnMoverDireita');
                    this._btnMoverEsquerda = $('.btnMoverEsquerda');
                }
                moverDireita() {
                }
                moverEsquerda() {
                }
            };
            exports_1("BotoesMoverKanban", BotoesMoverKanban);
        }
    };
});
