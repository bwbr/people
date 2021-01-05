System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Badge;
    return {
        setters: [],
        execute: function () {
            Badge = class Badge {
                badge() {
                    this.total_toDo = $('#cardToDo .card').length;
                    this.total_inProgress = $('#cardInProgress .activity').length;
                    this.total_done = $('#cardDone .activity').length;
                    this.total_activities = this.total_toDo + this.total_inProgress + this.total_done;
                    this.badge_toDo = $('.badge-to-do');
                    this.badge_inProgress = $('.badge-in-progress');
                    this.badge_done = $('.badge-done');
                    this.badge_toDo.text(this.limitBadge(this.total_toDo));
                    this.badge_inProgress.text(this.limitBadge(this.total_inProgress));
                    this.badge_done.text(`${this.limitBadge(this.total_done)} / ${this.total_activities}`);
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
            exports_1("Badge", Badge);
        }
    };
});
