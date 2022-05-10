export class Dados {

  constructor(id_transferencia: number, valor_transferencia: number, tipo_transferencia: string, nome_emissor: string, 
    agencia_emissor: number, conta_emissor: number, cpfEmissor: string, nome_receptor: string, agencia_receptor: number,
    conta_receptor: number, cpf_receptor: number, saldo_emissor: number, saldo_receptor: number ) {
    this.id_transferencia = id_transferencia;
    this.valor_transferencia = valor_transferencia;
    this.tipo_transferencia = tipo_transferencia;
    this.nome_emissor = nome_emissor;
    this.agencia_emissor = agencia_emissor;
    this.conta_emissor = conta_emissor;
    this.cpfEmissor = cpfEmissor;
    this.nome_receptor = nome_receptor;
    this.agencia_receptor = agencia_receptor;
    this.conta_receptor = conta_receptor;
    this.cpf_receptor = cpf_receptor;
    this.saldo_emissor = saldo_emissor;
    this.saldo_receptor = saldo_receptor;
  }

  id_transferencia: number;
  valor_transferencia: number;
  tipo_transferencia: string;
  nome_emissor: string;
  agencia_emissor: number;
  conta_emissor: number;
  cpfEmissor: string;
  nome_receptor: string;
  agencia_receptor: number;
  conta_receptor: number;
  cpf_receptor: number;
  saldo_emissor: number;
  saldo_receptor: number;
}
