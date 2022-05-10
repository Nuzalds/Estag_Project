import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Dados } from './dados';
import { Validacoes } from './valicadoes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formularioDeUsuario: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.criarFormularioDeUsuario();
  }

  enviarDados() {
    const dadosFormulario = this.formularioDeUsuario.value;

    const usuario = new Dados(
      dadosFormulario.id_transferencia,
      dadosFormulario.valor_transferencia,
      dadosFormulario.tipo_transferencia,
      dadosFormulario.nome_emissor,
      dadosFormulario.agencia_emissor,
      dadosFormulario.conta_emissor,
      dadosFormulario.cpfEmissor,
      dadosFormulario.nome_receptor,
      dadosFormulario.agencia_receptor,
      dadosFormulario.conta_receptor,
      dadosFormulario.cpf_receptor,
      dadosFormulario.saldo_emissor,
      dadosFormulario.saldo_receptor
      

    );

    alert(`Sua transferência foi realizada com sucesso! Valor da transferência:${usuario.valor_transferencia} \n Dados: ${JSON.stringify(usuario)}`);

    this.formularioDeUsuario.reset();
  }

  criarFormularioDeUsuario() {
    this.formularioDeUsuario = this.fb.group(
      {
        nome_emissor: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ])
        ],
         nome_receptor: [
          '',
          Validators.compose([
            Validators.required,
            Validators.minLength(3),
            Validators.maxLength(100),
          ])
        ],
        saldo_emissor: [
          'R$: 0,00',
          Validators.compose([
          ])
        ],
        saldo_receptor: [
          'R$: 0,00',
          Validators.compose([
          ])
        ],
        tipo_transferencia: [
          '',
          Validators.compose([Validators.required])
        ],
        conta_emissor: [
          '',
          Validators.compose([Validators.required,
            Validators.minLength(6),Validators.maxLength(6),])
        ],
        conta_receptor: [
          '',
          Validators.compose([Validators.required,
            Validators.minLength(6),Validators.maxLength(6),])
        ],
        cpfEmissor: [
          '',
          Validators.compose([Validators.required, Validacoes.ValidaCpf])
        ],
        cpf_receptor: [
          '',
          Validators.compose([Validators.required, Validacoes.ValidaCpf])
        ],
        id_transferencia: [
          '',
          Validators.compose([])
        ],
        valor_transferencia: [
          '',
          Validators.compose([])
        ]
      },
      {
        validator: Validacoes.valorTransferencia
      }
    );
  }

  get id_transferencia() {
    return this.formularioDeUsuario.get('id_transferencia');
  }

  get valor_transferencia() {
    return this.formularioDeUsuario.get('valor_transferencia');
  }

  get tipo_transferencia() {
    return this.formularioDeUsuario.get('tipo_transferencia');
  }

  get nome_emissor() {
    return this.formularioDeUsuario.get('nome_emissor');
  }

  get agencia_emissor() {
    return this.formularioDeUsuario.get('agencia_emissor');
  }

  get conta_emissor() {
    return this.formularioDeUsuario.get('conta_emissor');
  }
  get cpfEmissor() {
    return this.formularioDeUsuario.get('cpfEmissor');
  }
  get nome_receptor() {
    return this.formularioDeUsuario.get('nome_receptor');
  }
  get agencia_receptor() {
    return this.formularioDeUsuario.get('agencia_receptor');
  }
  get conta_receptor() {
    return this.formularioDeUsuario.get('conta_receptor');
  }
  get cpf_receptor() {
    return this.formularioDeUsuario.get('cpf_receptor');
  }
  get saldo_emissor() {
    return this.formularioDeUsuario.get('saldo_emissor');
  }
  get saldo_receptor() {
    return this.formularioDeUsuario.get('saldo_receptor');
  }

}