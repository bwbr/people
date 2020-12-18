System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var db, DBStorage;
    return {
        setters: [],
        execute: function () {
            db = window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024);
            DBStorage = class DBStorage {
                SQLexe(args) {
                    db.transaction(function (tx) {
                        tx.executeSql(args);
                    });
                }
            };
            exports_1("DBStorage", DBStorage);
        }
    };
});
