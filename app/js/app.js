// App que irá realizar o teste
const controller = new NegociacaoController();
// configurando o documento.
$(".form").submit(controller.adiciona.bind(controller));
