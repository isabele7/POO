import { Aluguel } from "./aluguel";
import { Bicicleta } from "./bicicleta";

export class Usuario {
    nome: string;
    dinheiro: number;

    constructor(nome: string, dinheiro: number) {
        this.nome = nome;
        this.dinheiro = dinheiro;
    }

    alugar(bicicleta: Bicicleta, dataInicio: Date, dataTermino: Date){
        if (bicicleta.disponivel && bicicleta.usuarioAtual === null) {
            const aluguel = new Aluguel(dataInicio, dataTermino); 
            bicicleta.usuarioAtual = this.nome;
            bicicleta.disponivel = false;
            return aluguel;
        }
    }

    pagar(preco: number): void {
        if (this.dinheiro >= preco) {
            this.dinheiro -= preco;
        }
    }
}
