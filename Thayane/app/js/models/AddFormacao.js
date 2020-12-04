class AddFormacao {
    constructor(_formacao, a, b) {
        this._formacao = _formacao;
        this.a = a;
        this.b = b;
    }
    get formacao() {
        return this._formacao;
    }
    get numA() {
        return this.a++;
    }
    get numB() {
        return this.b++;
    }
}
