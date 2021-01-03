System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Badges;
    return {
        setters: [],
        execute: function () {
            Badges = class Badges {
                constructor() {
                    this._total_toDo = $('[data-toDo] .activity').length;
                    this._total_inProgress = $('[data-InProgress] .activity').length;
                    this._total_done = $('[data-Done] .activity').length;
                }
                badge() {
                    let total_activities = this._total_toDo +
                        this._total_inProgress +
                        this._total_done;
                    console.log(total_activities);
                    $('.badge-to-do').text(this.limitBadge(this._total_toDo));
                    $('.badge-in-progress').text(this.limitBadge(this._total_inProgress));
                    $('.badge-done').text(`${this.limitBadge(this._total_done)} / ${total_activities}`);
                }
                limitBadge(qtd) {
                    let limitQtd = "99+";
                    if (qtd > 99) {
                        return limitQtd;
                    }
                    else {
                        return qtd;
                    }
                }
            };
            exports_1("Badges", Badges);
        }
    };
});
