import { View } from './view.js';
import { Negociacoes } from "../models/negociacoes.js";

export class NegociacoesView extends View <Negociacoes>
{   
   
    protected template(model: Negociacoes): string
    {
        return `
            <table class="table table-hover table-bordered">
                <thead class="text-center">
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${model.lista().map(negociacao => {
                        return `
                        <tr class="text-center">
                            <td>
                            ${this.formatar(negociacao.data)}
                            </td>
                            <td>
                            ${negociacao.quantidade}
                            </td>
                            <td>
                            ${negociacao.valor}
                            </td>
                        </tr>
                        `;
                    }).join('')}
                </tbody>
            </table>
        `;
    }

    private formatar(data: Date): string
    {
        return new Intl.DateTimeFormat().format(data)
    }
}