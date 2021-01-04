System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Media;
    return {
        setters: [],
        execute: function () {
            Media = class Media {
                constructor() {
                    this.navTabContent = $("#nav-tabContent");
                    this.navToDo = $('#nav-to-do');
                    this.navInProgress = $('#nav-in-progress');
                    this.navDone = $('#nav-done');
                    this.cardToDo = $('#ToDo');
                    this.cardInProgress = $('#InProgress');
                    this.cardDone = $('.card-done .card-header div');
                }
                layout() {
                    let winWidth = $(window).width();
                    if (winWidth <= 760) {
                        if (this.navTabContent.hasClass("tab-content") == false) {
                            this.addClasses();
                        }
                    }
                    else {
                        if (this.navTabContent.hasClass("tab-content") == true) {
                            this.removeClasses();
                        }
                    }
                    console.log(document.body.clientWidth, this.navTabContent.hasClass("tab-content"));
                }
                addClasses() {
                    this.navTabContent.addClass('tab-content');
                    this.navToDo.addClass('tab-pane');
                    this.navInProgress.addClass('tab-pane');
                    this.navDone.addClass('tab-pane');
                }
                removeClasses() {
                    this.navTabContent.removeClass('tab-content');
                    this.navToDo.removeClass('tab-pane');
                    this.navInProgress.removeClass('tab-pane');
                    this.navDone.removeClass('tab-pane');
                    this.cardToDo.removeClass('w-100');
                    this.cardInProgress.removeClass('w-100');
                    this.cardDone.removeClass('w-100');
                }
            };
            exports_1("Media", Media);
        }
    };
});
