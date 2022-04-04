export class Negociacao
{

    constructor(
        public readonly data: Date, 
        private readonly quantidade: number, 
        private readonly valor: number
    ){}


    get volume(): number 
    {
        return this.quantidade * this.valor;
    }
  

}