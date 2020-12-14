System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor, escapar) {
                    this._elemento = document.querySelector(seletor);
                    this._escapar = escapar;
                }
                update(model) {
                    this._elemento.innerHTML = this.template(model);
                    let template = this.template(model);
                    if (this._escapar)
                        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
                }
            };
            exports_1("View", View);
        }
    };
});
