System.register(["../controllers/AtividadeController", "../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AtividadeController_1, index_1, DragAndDrop;
    return {
        setters: [
            function (AtividadeController_1_1) {
                AtividadeController_1 = AtividadeController_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            DragAndDrop = class DragAndDrop {
                drag_and_drop() {
                    this.activity = $('.activity');
                    this.card_body = $('.activities');
                    let draggedActivity;
                    const controller = new AtividadeController_1.AtividadeController();
                    for (let i = 0; i < this.activity.length; i++) {
                        let a = this.activity[i];
                        a.addEventListener('dragstart', function () {
                            draggedActivity = this;
                            this.classList.remove("show");
                            this.classList.add("hide");
                        });
                        a.addEventListener('dragend', function () {
                            draggedActivity.classList.remove("hide");
                            draggedActivity.classList.add("show");
                            draggedActivity = null;
                        });
                        for (let j = 0; j < this.card_body.length; j++) {
                            const cb = this.card_body[j];
                            cb.addEventListener('dragstart', function () {
                            });
                            cb.addEventListener('dragover', function (e) {
                                e.preventDefault();
                            });
                            cb.addEventListener('dragenter', function (e) {
                                e.preventDefault();
                            });
                            cb.addEventListener('drop', function (e) {
                                this.appendChild(draggedActivity);
                                const _atividades = new index_1.Atividades();
                                _atividades.move(draggedActivity.id, this.id);
                                controller.lista();
                            });
                        }
                    }
                }
            };
            exports_1("DragAndDrop", DragAndDrop);
        }
    };
});
