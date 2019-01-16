// App que irá realizar o teste

import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();

// configurando o documento.
$(".form").submit(controller.adiciona.bind(controller));