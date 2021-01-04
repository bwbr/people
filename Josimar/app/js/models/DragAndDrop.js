System.register(["../models/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, DragAndDrop;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            DragAndDrop = class DragAndDrop {
                constructor(activitySel) {
                    this.activitySel = activitySel;
                    this._activity = $('.activity');
                    this._card_body = $('.activities');
                    this._draggedActivity = activitySel;
                }
                drag_and_drop() {
                    var draggedActivity = null;
                    for (let i = 0; i < this._activity.length; i++) {
                        let a = this._activity[i];
                        a.addEventListener('click', function () {
                            draggedActivity = this;
                            this.classList.remove("show");
                            this.classList.add("hide");
                        });
                        a.addEventListener('dragend', function () {
                            draggedActivity.classList.remove("hide");
                            draggedActivity.classList.add("show");
                            draggedActivity = null;
                        });
                        for (let j = 0; j < this._card_body.length; j++) {
                            var cb = this._card_body[j];
                            cb.addEventListener('dragstart', function () {
                            });
                            cb.addEventListener('dragover', function (e) {
                                e.preventDefault();
                            });
                            cb.addEventListener('dragenter', function (e) {
                                e.preventDefault();
                            });
                            cb.addEventListener('drop', function () {
                                this.appendChild(draggedActivity);
                                const _atividades = new index_1.Atividades();
                                const _progressbar = new index_1.Progressbar();
                                const _badge = new index_1.Badges();
                                _atividades.move(draggedActivity.id, this.id);
                                _badge.badge();
                                _progressbar.progressbar();
                            });
                        }
                    }
                }
            };
            exports_1("DragAndDrop", DragAndDrop);
        }
    };
});
