System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ScrollSmooth;
    return {
        setters: [],
        execute: function () {
            ScrollSmooth = class ScrollSmooth {
                scroll_smooth() {
                    let ancoras = document.querySelectorAll('a[href^="#"]');
                    let heightSlider = $('.nav').height();
                    for (let item of ancoras) {
                        item.addEventListener('click', (e) => {
                            let hashval = item.getAttribute('href');
                            let target = document.querySelector(hashval);
                            target.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start',
                            });
                            history.pushState(null, null, hashval);
                            e.preventDefault();
                        });
                    }
                }
            };
            exports_1("ScrollSmooth", ScrollSmooth);
        }
    };
});
