class MensagemView extends View<string> {

    template(model: string){
        return `
        <div class="alert alert-info text-center alert-dismissible fade show" role="alert">
            ${model}
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>`;
    }

}