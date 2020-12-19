export class ModalController{
    private _modalSkill = $('#myModal');
    
    mostrarModal(){
        this._modalSkill.addClass('show');
        this._modalSkill.prop("aria-hidden", "false");
        this._modalSkill.prop("aria-modal", "true");
        this._modalSkill.prop("role", "dialog");
        this._modalSkill.css({display:"block"});
    }

    esconderModal(){
        this._modalSkill.removeClass('show');
        this._modalSkill.prop("aria-hidden", "true");
        this._modalSkill.prop("aria-modal", "false");
        this._modalSkill.prop("role", "none");
        this._modalSkill.css({display:"none"});
    }
}