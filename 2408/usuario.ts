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
        if (bicicleta.isDisponivel() && this.dinheiro >= bicicleta.preco) {
            const aluguel = new Aluguel(dataInicio, dataTermino, bicicleta.preco);
            bicicleta.iniciarAluguel(this.nome);
            this.dinheiro -= aluguel.calcularValorTotal();
            return aluguel;
        }
    }

    devolver(bicicleta: Bicicleta) {
        if (!bicicleta.isDisponivel() && bicicleta.usuarioAtual === this.nome) {
            bicicleta.finalizarAluguel();
        }
    }
}
