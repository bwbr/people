export class ContarFormacoes{
    private _quantAFazer: number;
    private _quantFazendo: number;
    private _quantFeitas: number;

    update(){
        var filhosAFazer = $('#addAqui').children().length;
        this._quantAFazer = filhosAFazer;
        $('#quantAFazer').text(this._quantAFazer);
        $('#span_aFazer').text(this._quantAFazer);

        var filhosFazendo = $('#nav-link-kanban_fazendo').children().length;
        this._quantFazendo = filhosFazendo;
        $('#quantFazendo').text(this._quantFazendo);
        $('#span_fazendo').text(this._quantFazendo);

        var filhosFeitas = $('#nav-link-kanban_feitas').children().length;
        this._quantFeitas = filhosFeitas;
        $('#quantFeitas').text(this._quantFeitas);
        $('#span_feitas').text(this._quantFeitas);
    }
}