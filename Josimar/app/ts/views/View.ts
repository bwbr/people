export abstract class View<T> {

    protected _elemento: Element;
    private _escapar: boolean;

    constructor(seletor: string, escapar?: boolean) {

        this._elemento = document.querySelector(seletor);
        this._escapar = escapar;
    }

    update(model: T) {

        this._elemento.innerHTML = this.template(model);
        let template = this.template(model);
        if(this._escapar)
        template = template.replace(/<script>[\s\S]*?<\/script>/, '');
    }

    abstract template(model: T): string;

}