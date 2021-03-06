import { View } from './View';
import { Negociacoes } from '../models/Negociacoes';

export class NegociacoesView extends View<Negociacoes>{
    template(modelo: Negociacoes) : string{
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>

            </tbody>
                ${modelo.paraArray().map(negociacao=>
                    `
                        <tr>
                            <td>${negociacao.data.getDate()}/${negociacao.data.getMonth() + 1}/${negociacao.data.getFullYear()}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>R$${negociacao.valor}</td>
                            <td>R$${negociacao.volume}</td>
                        </tr>
                    `
                ).join('')}
            <tfoot>
            </tfoot>
        </table>`;
    }
}