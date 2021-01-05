System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HideNav;
    return {
        setters: [],
        execute: function () {
            HideNav = class HideNav {
                hide_nav() {
                    $(document).on('click', '.navbar-collapse', e => {
                        if ($(e.target).is('a')) {
                            $('.navbar-collapse').removeClass('show');
                        }
                    });
                }
            };
            exports_1("HideNav", HideNav);
        }
    };
});
