export interface Fatura {
    id?: number;
    codCli: number;
    descricao: string;
    valor: number;
    dataEmissao?: Date;
    pago: boolean;
  }