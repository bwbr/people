import { AddFormacaoController } from './controllers/AddFormacaoController';

const controller = new AddFormacaoController();
$('[data-form]').submit(controller.adiciona.bind(controller))