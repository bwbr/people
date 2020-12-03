const controller = new AddFormacaoController();

document.querySelector('[data-form]').addEventListener('submit', controller.adiciona.bind(controller));