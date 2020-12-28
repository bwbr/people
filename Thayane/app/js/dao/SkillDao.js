System.register(["./Dao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Dao_1, SkillDao;
    return {
        setters: [
            function (Dao_1_1) {
                Dao_1 = Dao_1_1;
            }
        ],
        execute: function () {
            SkillDao = class SkillDao extends Dao_1.Dao {
                constructor(connection) {
                    super(connection);
                    this._connection = connection;
                    this._store = 'skills';
                }
            };
            exports_1("SkillDao", SkillDao);
        }
    };
});
