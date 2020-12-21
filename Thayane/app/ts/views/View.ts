export abstract class View<T>{
    private _elemento: JQuery;

    constructor(seletor: string){
        this._elemento = $(seletor);
    }    

    update(model: T){
        console.log('update');
        console.log(this._elemento);
        let content = this.template(model);
        console.log(content)
        this._elemento.html(content);
    }

    abstract template(model: T): string;
}