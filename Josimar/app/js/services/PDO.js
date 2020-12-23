System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var PDO;
    return {
        setters: [],
        execute: function () {
            PDO = class PDO {
                constructor() {
                    this._name = 'people';
                    this._version = '1.0';
                    this._description = 'bwbr';
                    this._size = 2 * 1024 * 1024;
                    this._db = window.openDatabase(this._name, this._version, this._description, this._size);
                }
                createTable(table, columns) {
                    this._db.transaction(function (tx) {
                        tx.executeSql(`CREATE TABLE IF NOT EXISTS ${table} (${columns})`);
                    });
                }
                dropTable(table) {
                    this._db.transaction(function (tx) {
                        tx.executeSql(`DROP TABLE ${table}`);
                    });
                }
                insert(table, columns, values) {
                    this._db.transaction(function (tx) {
                        tx.executeSql(`INSERT INTO ${table} (${columns}) VALUES (${values})`);
                    });
                }
                update(table, values, condition) {
                    this._db.transaction(function (tx) {
                        tx.executeSql(`UPDATE ${table} SET ${values} WHERE ${condition}`);
                    });
                }
                delete(table, condition) {
                    this._db.transaction(function (tx) {
                        tx.executeSql(`DELETE FROM ${table} WHERE ${condition}`);
                    });
                }
                list(columns, table, condition) {
                    var allItems = [];
                    var item = {};
                    this._db.transaction(function (tx) {
                        tx.executeSql(`SELECT ${columns} FROM ${table} ${condition}`, [], function (tx, results) {
                            var len = results.rows.length, i;
                            for (i = 0; i < len; i++) {
                                item = results.rows.item(i);
                                allItems.push(item);
                            }
                        }, null);
                    });
                    console.log(allItems);
                    return allItems;
                }
            };
            exports_1("PDO", PDO);
        }
    };
});
