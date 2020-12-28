$(document).on('click', '.navbar-collapse', e => {
    if ($(e.target).is('a')) {
        $('.navbar-collapse').removeClass('show');
    }
});
