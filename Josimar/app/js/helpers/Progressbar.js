System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Progressbar;
    return {
        setters: [],
        execute: function () {
            Progressbar = class Progressbar {
                constructor() {
                    this.percent_toDo = 0;
                    this.percent_inProgress = 0;
                    this.percent_done = 0;
                }
                progressbar() {
                    this.total_toDo = $('#cardToDo .card').length;
                    this.total_inProgress = $('#cardInProgress .activity').length;
                    this.total_done = $('#cardDone .activity').length;
                    this.total_activities = this.total_toDo + this.total_inProgress + this.total_done;
                    this.progress_toDo = $("#progress-to-do");
                    this.progress_inProgress = $("#progress-in-progress");
                    this.progress_done = $("#progress-done");
                    this.percent_toDo = this.percent(this.total_toDo, this.total_activities);
                    this.percent_inProgress = this.percent(this.total_inProgress, this.total_activities);
                    this.percent_done = this.percent(this.total_done, this.total_activities);
                    this.progress_toDo.css("width", `${(this.percent_toDo)}%`);
                    this.progress_inProgress.css("width", `${(this.percent_inProgress)}%`);
                    this.progress_done.css("width", `${(this.percent_done)}%`);
                    this.colorBgProgress(this.percent_toDo, this.progress_toDo);
                    this.colorBgProgress(this.percent_inProgress, this.progress_inProgress);
                    this.colorBgProgress(this.percent_done, this.progress_done);
                }
                percent(n, total) {
                    return (n / total) * 100;
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
