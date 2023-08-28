export class Aluguel {
    dataInicio: Date;
    dataTermino: Date;

    constructor(dataInicio: Date, dataTermino: Date) {
        this.dataInicio = dataInicio;
        this.dataTermino = dataTermino;
    }

    calcularValorTotal() {
        const horasAluguel = (this.dataTermino.getTime() - this.dataInicio.getTime()) / (1000 * 60 * 60);
        const valorTotal = this.preco * horasAluguel;
        return valorTotal;
    }
}
