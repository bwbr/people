System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor) {
                    this._elemento = $(seletor);
                }
                update(model) {
                    console.log('update');
                    console.log(this._elemento);
                    let content = this.template(model);
                    console.log(content);
                    this._elemento.html(content);
                }
            };
            exports_1("View", View);
        }
    };
});
