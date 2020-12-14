$('#form_activity_add').submit(e => {
  alerts(e);
});

$('#form_activity_edit').submit(e => {
  alerts(e);
});


function alerts(e: any){
  e.preventDefault();
  $('[data-form]').removeClass('show');
  $('[data-card]').addClass('show');
  setTimeout(function () {
      $('#mensagemView .alert').removeClass('show');
      $('#mensagemView .alert').addClass('hide');
      $('#mensagemView').html('');
  }, 4000);
}
