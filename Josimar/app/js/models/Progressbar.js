System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Progressbar;
    return {
        setters: [],
        execute: function () {
            Progressbar = class Progressbar {
                constructor() {
                    this._total_toDo = $('[data-toDo] .activity').length;
                    this._total_inProgress = $('[data-InProgress] .activity').length;
                    this._total_done = $('[data-Done] .activity').length;
                    this._total_activities = this._total_toDo + this._total_inProgress + this._total_done;
                }
                progressbar() {
                    let percent_toDo = this.percent(this._total_toDo, this._total_activities);
                    let percent_inProgress = this.percent(this._total_inProgress, this._total_activities);
                    let percent_done = this.percent(this._total_done, this._total_activities);
                    $("#progress-to-do").css("width", `${(percent_toDo)}%`);
                    $("#progress-in-progress").css("width", `${(percent_inProgress)}%`);
                    $("#progress-done").css("width", `${(percent_done)}%`);
                    $(".percent-to-do").text(`${(percent_toDo).toFixed()}%`);
                    $(".percent-in-progress").text(`${(percent_inProgress).toFixed()}%`);
                    $(".percent-done").text(`${(percent_done).toFixed()}%`);
                    this.colorBgProgress(percent_toDo, document.querySelector("#progress-to-do"));
                    this.colorBgProgress(percent_inProgress, document.querySelector("#progress-in-progress"));
                    this.colorBgProgress(percent_done, document.querySelector("#progress-done"));
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
                        progress_name.classList.remove('progress-bar-blue');
                        progress_name.classList.add('progress-bar-success');
                    }
                    else {
                        progress_name.classList.remove('progress-bar-success');
                        progress_name.classList.add('progress-bar-blue');
                    }
                }
            };
            exports_1("Progressbar", Progressbar);
        }
    };
});
