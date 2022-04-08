import { Negociacao } from './../models/negociacao.js';


export function imprimir(...objetos: Array<Negociacao>): void
{
    for(let objeto of objetos){
        console.log(objeto);
    }
}