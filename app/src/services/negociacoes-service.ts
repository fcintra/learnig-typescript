import { NegociacoesDoDia } from "../interfaces/negociacaoDia.js";
import { Negociacao } from "../models/negociacao.js";

export class NegociacoesService{
    public obterNegociacoesDoDia(): Promise<Negociacao[]>{
       return fetch('http://localhost:8080/dados')
            .then(res => res.json())
            .then((dados: NegociacoesDoDia[]) =>{
               return dados.map(dadosFormatado => {
                    return new Negociacao(
                        new Date(), 
                        dadosFormatado.vezes, 
                        dadosFormatado.montante
                    )
                })
            })
    }
}