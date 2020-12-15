System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var AddSkills;
    return {
        setters: [],
        execute: function () {
            AddSkills = class AddSkills {
                constructor() {
                    this._skills = [];
                }
                adiciona(skill) {
                    this._skills.push(skill);
                }
                paraArray() {
                    return [].concat(this._skills);
                }
            };
            exports_1("AddSkills", AddSkills);
        }
    };
});
