import { Bicicleta } from "./bicicleta";
import { Aluguel } from "./aluguel";

export class Usuario {
    nome: string;
    dinheiro: number;

    constructor(nome: string, dinheiro: number) {
        this.nome = nome;
        this.dinheiro = dinheiro;
    }

    alugar(bicicleta: Bicicleta, dataInicio: Date, dataTermino: Date) {
        if (bicicleta.disponivel && bicicleta.usuarioAtual === null && this.dinheiro >= bicicleta.preco) {
            const aluguel = new Aluguel(dataInicio, dataTermino);
            bicicleta.usuarioAtual = this.nome;
            bicicleta.disponivel = false;
            this.dinheiro -= bicicleta.preco;
            return aluguel;
        }
    }

    devolver(bicicleta: Bicicleta) {
        if (!bicicleta.disponivel && bicicleta.usuarioAtual === this.nome) {
            bicicleta.usuarioAtual = null;
            bicicleta.disponivel = true;
        }
    }
}
