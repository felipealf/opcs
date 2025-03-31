export class Pagamento {
    constructor(
        public codigo: number,
        public codAss: number,
        public valorPago: number,
        public dataPagamento: Date
    ) {}
}