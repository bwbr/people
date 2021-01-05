System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ProxyFactory;
    return {
        setters: [],
        execute: function () {
            ProxyFactory = class ProxyFactory {
                static create(objeto, props, acao) {
                    return new Proxy(objeto, {
                        get(target, prop, receiver) {
                            if (props.includes(prop) && ProxyFactory._ehFuncao(target[prop])) {
                                return function () {
                                    console.log(`interceptando ${prop.toString}`);
                                    let retorno = Reflect.apply(target[prop], target, arguments);
                                    acao(target);
                                    return retorno;
                                };
                            }
                            return Reflect.get(target, prop, receiver);
                        },
                        set(target, prop, value, receiver) {
                            let retorno = Reflect.set(target, prop, value, receiver);
                            if (props.includes(prop))
                                acao(target);
                            return retorno;
                        }
                    });
                }
                static _ehFuncao(func) {
                    return typeof (func) == typeof (Function);
                }
            };
            exports_1("ProxyFactory", ProxyFactory);
        }
    };
});
