import { DiasSemana } from './../enums/diasSemana.js';
import { MensagemView } from './../views/mensagem-view.js';
import { NegociacoesView } from './../views/negociacoes-view.js';
import { Negociacao } from "../models/negociacao.js";
import { Negociacoes } from "../models/Negociacoes.js";

export class NegociacaoController {
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
  
    constructor() {
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    
    public adiciona(): void 
     {
         const negociacao = Negociacao.criaDe(
             this.inputData.value,
             this.inputQuantidade.value,
             this.inputValor.value
         );
          
        if(!this.DiaUtil(negociacao.data)){  
            this.mensagemView.update('Apenas negociacões em dias úteis são aceitas!')
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limparFormulario();
        this.atualizaView(); 
    }

    private DiaUtil(data: Date): boolean
    {
        return data.getDay() > DiasSemana.DOMINGO && data.getDay() < DiasSemana.SABADO;
    }

    private limparFormulario(): void
    {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView(): void
    {
       this.negociacoesView.update(this.negociacoes);
       this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}