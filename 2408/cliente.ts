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
            aluguel.bicicleta = bicicleta;
            aluguel.usuario = this;
            bicicleta.usuarioAtual = this.nome;
            bicicleta.disponivel = false;
            this.dinheiro -= bicicleta.preco;
            return aluguel;
        }
    }

    devolver(bicicleta: Bicicleta): void {
        if (!bicicleta.disponivel && bicicleta.usuarioAtual === this.nome) {
            bicicleta.usuarioAtual = null;
            bicicleta.disponivel = true;
            console.log("Bicicleta devolvida com sucesso.");
        } else {
            console.log("Você não pode devolver esta bicicleta.");
        }
    }
}
