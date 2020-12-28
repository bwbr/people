System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HttpService;
    return {
        setters: [],
        execute: function () {
            HttpService = class HttpService {
                get(url) {
                    return new Promise((resolve, reject) => {
                        let xhr = new XMLHttpRequest();
                        xhr.open('GET', url);
                        xhr.onreadystatechange = () => {
                            if (xhr.readyState == 4) {
                                if (xhr.status == 200)
                                    resolve(JSON.parse(xhr.responseText));
                                else
                                    reject(xhr.responseText);
                            }
                        };
                        xhr.send();
                    });
                }
            };
            exports_1("HttpService", HttpService);
        }
    };
});
