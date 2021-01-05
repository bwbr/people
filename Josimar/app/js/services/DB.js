System.register([], function (exports_1, context_1) {
    "use strict";
    var DB;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            DB = class DB {
                constructor() {
                    this._name = 'people';
                    this._version = '1.0';
                    this._description = 'bwbr';
                    this._size = 2 * 1024 * 1024;
                    this._db = window.openDatabase(this._name, this._version, this._description, this._size);
                }
                conn() {
                    this._db = window.openDatabase(this._name, this._version, this._description, this._size);
                    return this._db;
                }
                createTable(table, columns) {
                    return new Promise((resolve, reject) => {
                        this._db.transaction(function (tx) {
                            tx.executeSql(`CREATE TABLE IF NOT EXISTS ${table} (${columns})`, [], (tx, results) => { resolve({}); }, (tx, err) => { reject(err); return false; });
                        });
                    });
                }
                dropTable(table) {
                    this._db.transaction(function (tx) {
                        tx.executeSql(`DROP TABLE ${table}`);
                    });
                }
                insert(table, columns, values) {
                    return new Promise((resolve, reject) => {
                        this._db.transaction(function (tx) {
                            tx.executeSql(`INSERT INTO ${table} (${columns}) VALUES (${values})`, [], (tx, result) => { resolve({}); }, (tx, err) => { reject(err); return false; });
                        });
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
            };
            exports_1("DB", DB);
        }
    };
});
