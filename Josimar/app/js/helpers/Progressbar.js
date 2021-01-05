System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Progressbar;
    return {
        setters: [],
        execute: function () {
            Progressbar = class Progressbar {
                progressbar() {
                    this.total_toDo = $('#cardToDo .card').length;
                    this.total_inProgress = $('#cardInProgress .activity').length;
                    this.total_done = $('#cardDone .activity').length;
                    this.total_activities = this.total_toDo + this.total_inProgress + this.total_done;
                    this.progress_toDo = $("#progress-to-do");
                    this.progress_inProgress = $("#progress-in-progress");
                    this.progress_done = $("#progress-done");
                    this.percent_toDo = $(".percent-to-do");
                    this.percent_inProgress = $(".percent-in-progress");
                    this.percent_done = $(".percent-done");
                    if (this.total_activities == null) {
                        this.total_toDo = 0.0;
                        this.total_inProgress = 0.0;
                        this.total_done = 0.0;
                    }
                    let percent_toDo = this.percent(this.total_toDo, this.total_activities);
                    let percent_inProgress = this.percent(this.total_inProgress, this.total_activities);
                    let percent_done = this.percent(this.total_done, this.total_activities);
                    this.progress_toDo.css("width", `${(percent_toDo)}%`);
                    this.progress_inProgress.css("width", `${(percent_inProgress)}%`);
                    this.progress_done.css("width", `${(percent_done)}%`);
                    this.percent_toDo.text(`${(percent_toDo).toFixed()}%`);
                    this.percent_inProgress.text(`${(percent_inProgress).toFixed()}%`);
                    this.percent_done.text(`${(percent_done).toFixed()}%`);
                    this.colorBgProgress(percent_toDo, this.progress_toDo);
                    this.colorBgProgress(percent_inProgress, this.progress_inProgress);
                    this.colorBgProgress(percent_done, this.progress_done);
                }
                percent(n, total) {
                    let p;
                    if (p < 1) {
                        p = 0;
                    }
                    else {
                        p = (n / total) * 100;
                    }
                    return p;
                }
                colorBgProgress(percent_name, progress_name) {
                    if (parseFloat(percent_name) == 100) {
                        progress_name.removeClass('progress-bar-blue');
                        progress_name.addClass('progress-bar-success');
                    }
                    else {
                        progress_name.removeClass('progress-bar-success');
                        progress_name.addClass('progress-bar-blue');
                    }
                }
            };
            exports_1("Progressbar", Progressbar);
        }
    };
});
