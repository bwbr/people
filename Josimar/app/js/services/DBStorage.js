System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var DBStorage;
    return {
        setters: [],
        execute: function () {
            DBStorage = class DBStorage {
                deleteTable() {
                    const db = window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024);
                    db.transaction(function (tx) {
                        tx.executeSql('DROP TABLE Atividades');
                    });
                }
                insert(table, columns, values) {
                    const db = window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024);
                    db.transaction(function (tx) {
                        tx.executeSql('CREATE TABLE IF NOT EXISTS Atividades (id INTEGER PRIMARY KEY, titulo, descricao, idCard)');
                        tx.executeSql(`INSERT INTO ${table} (${columns}) VALUES (${values})`);
                    });
                }
                list(table) {
                    const db = window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024);
                    let items = [];
                    db.transaction(function (tx) {
                        tx.executeSql(`SELECT * FROM ${table}`, [], function (tx, results) {
                            var len = results.rows.length, i;
                            for (i = 0; i < len; i++) {
                                items.push(results.rows.item(i));
                            }
                        }, null);
                    });
                    console.log(items);
                    return items;
                }
                search(table, condition) {
                    const db = window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024);
                    let items = [];
                    db.transaction(function (tx) {
                        tx.executeSql(`SELECT * FROM ${table} WHERE ${condition}`, [], function (tx, results) {
                            var len = results.rows.length, i;
                            for (i = 0; i < len; i++) {
                                items.push(results.rows.item(i));
                            }
                        }, null);
                    });
                    return items;
                }
                update(table, values, condition) {
                    const db = window.openDatabase('people', '1.0', 'bwbr', 2 * 1024 * 1024);
                    let items = [];
                    db.transaction(function (tx) {
                        tx.executeSql(`SELECT * FROM ${table} WHERE ${condition}`, [], function (tx, results) {
                            var len = results.rows.length, i;
                            for (i = 0; i < len; i++) {
                                tx.executeSql(`UPDATE INTO ${table} SET ${values} VALUES (${condition})`);
                            }
                        }, null);
                    });
                }
            };
            exports_1("DBStorage", DBStorage);
        }
    };
});
