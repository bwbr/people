export class HideNav{
    hide_nav(){
        //Esconde menu ao clicar na opção para versão mobile
        $(document).on('click','.navbar-collapse', e => {
            if( $(e.target).is('a') ) {
                $('.navbar-collapse').removeClass('show');
            }
        });
    }
}

