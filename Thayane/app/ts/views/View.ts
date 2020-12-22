export abstract class View<T>{
    private _elemento: JQuery;

    constructor(seletor: string){
        this._elemento = $(seletor);
    }    

    update(model: T){
        let content = this.template(model);
        this._elemento.html(content);
    }

    abstract template(model: T): string;
}