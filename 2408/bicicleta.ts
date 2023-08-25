export class Bicicleta {
    codigo: string;
    marca: string;
    preco: number;
    disponivel: boolean;
    usuarioAtual: string | null = null;

    constructor(codigo: string, preco: number, disponivel: boolean, marca: string) {
        this.codigo = codigo;
        this.marca = marca;
        this.preco = preco;
        this.disponivel = disponivel;
    }
}
