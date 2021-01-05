export class FormAlert{

  form_alert(){
    $('#cards').submit(e => {
      alerts(e);
    });
                                      
    function alerts(e: Event){
      e.preventDefault();
      $('[data-form]').removeClass('show');
      $('[data-cards]').addClass('show');
      setTimeout(function () {
          $('#mensagemView .alert').removeClass('show');
          $('#mensagemView .alert').addClass('hide');
          $('#mensagemView').html('');
      }, 4000);
    }
  }  
  
}




