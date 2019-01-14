class Negociacoes{

    private _negociacoes: Array<Negociacao> = [];

    constructor(){}

    adiciona(negociacao: Negociacao){
        this._negociacoes.push(negociacao);
    }

    // <Nome da função>(): <Tipo de Retorno>
    paraArray(): Negociacao[]{
        return [].concat(this._negociacoes);
    }
}