export class Assinatura {
    constructor(
        public codigo: number,
        public codPlano: number,
        public codCli: number,
        public inicioFidelidade: Date,
        public fimFidelidade: Date,
        public dataUltimoPagamento: Date | null,
        public custoFinal: number,
        public descricao: string
    ) {}
}