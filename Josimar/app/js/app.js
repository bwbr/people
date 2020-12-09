const controller = new AtividadeController();
document
    .querySelector('#form_activity')
    .addEventListener('submit', controller.adiciona.bind(controller));
