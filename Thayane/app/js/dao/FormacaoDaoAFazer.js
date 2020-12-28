System.register(["./Dao"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Dao_1, FormacaoDaoAFazer;
    return {
        setters: [
            function (Dao_1_1) {
                Dao_1 = Dao_1_1;
            }
        ],
        execute: function () {
            FormacaoDaoAFazer = class FormacaoDaoAFazer extends Dao_1.Dao {
                constructor(connection) {
                    super(connection);
                    this._connection = connection;
                    this._store = 'formacoesAFazer';
                }
            };
            exports_1("FormacaoDaoAFazer", FormacaoDaoAFazer);
        }
    };
});
