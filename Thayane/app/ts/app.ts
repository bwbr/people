const controller = new AddFormacaoController();
$('[data-form]').submit(controller.adiciona.bind(controller))