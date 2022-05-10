import { AbstractControl } from '@angular/forms';

export class Validacoes {
  static ValidaCpf(controle: AbstractControl) {
    const cpf = controle.value;

    let soma: number = 0;
    let resto: number;
    let valido: boolean;

    const regex = new RegExp('[0-9]{11}');

    if (
      cpf == '00000000000' ||
      cpf == '11111111111' ||
      cpf == '22222222222' ||
      cpf == '33333333333' ||
      cpf == '44444444444' ||
      cpf == '55555555555' ||
      cpf == '66666666666' ||
      cpf == '77777777777' ||
      cpf == '88888888888' ||
      cpf == '99999999999' ||
      !regex.test(cpf)
    )
      valido = false;
    else {
      for (let i = 1; i <= 9; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(9, 10))) valido = false;

      soma = 0;
      for (let i = 1; i <= 10; i++)
        soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
      resto = (soma * 10) % 11;

      if (resto == 10 || resto == 11) resto = 0;
      if (resto != parseInt(cpf.substring(10, 11))) valido = false;
      valido = true;
    }

    if (valido) return null;

    return { cpfInvalido: true };
  }

  static EmissorReceptor(controle: AbstractControl) {
    let nome_emissor = controle.get('nome_emissor').value;
    let nome_receptor = controle.get('nome_receptor').value;

    if (nome_emissor !== nome_receptor) return null;

    controle.get('confirmar').setErrors({ emissor_receptor: true });
  }

  static contaEmissor(controle: AbstractControl) {
    let conta_emissor = controle.get('conta_emissor').value;
    let conta_receptor = controle.get('conta_receptor').value;

    if (conta_emissor !== conta_receptor) return null;

    controle.get('confirmarContar').setErrors({ conta_diferente: true });
  }

  static valorTransferencia (controle: AbstractControl) {

    let valorTransferencia = controle.get('valor_transferencia').value;
    let tipotransferencia = controle.get('tipo_transferencia').value;
    

    if (valorTransferencia <= 5000) {
      return tipotransferencia === "Pix";
    }

     else if (valorTransferencia <= 10000 ) {
      return tipotransferencia === "TED";
    }

    else if (valorTransferencia > 10000 ) {
      return tipotransferencia === "DOC";
    }

    return { tipo: true };
  }
}
