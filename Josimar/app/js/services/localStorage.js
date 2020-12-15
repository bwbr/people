System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var LocalStorage;
    return {
        setters: [],
        execute: function () {
            LocalStorage = class LocalStorage {
                addStorage(key, value) {
                    try {
                        localStorage.setItem(key, JSON.stringify(value));
                    }
                    catch (error) {
                        console.error(error);
                    }
                }
                listStorage(key) {
                    if (JSON.parse(localStorage.getItem(key)) != null) {
                        return JSON.parse(localStorage.getItem(key));
                    }
                }
            };
            exports_1("LocalStorage", LocalStorage);
        }
    };
});
