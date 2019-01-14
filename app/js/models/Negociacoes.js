class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    // <Nome da função>(): <Tipo de Retorno>
    paraArray() {
        return [].concat(this._negociacoes);
    }
}
