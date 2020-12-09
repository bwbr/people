//remove alert apos exibir
$('#form_activity').submit(e =>{
  $('[data-form]').removeClass('show');
  $('[data-card]').addClass('show');
  e.preventDefault();
    $('#mensagemView').removeClass('show');
    setTimeout(function() {
      $('#mensagemView').remove()
    }, 4000); 
});