//remove alert apos exibir
$('#form_activity').submit(e =>{
  e.preventDefault();
    $('#mensagemView').removeClass('show');
    setTimeout(function() {
      $('#mensagemView').remove()
    }, 4000); 
});