import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-novo-banco',
  templateUrl: './novo-banco.component.html',
  styleUrls: ['./novo-banco.component.css']
})
export class NovoBancoComponent {
  codigo!: number;
  descricao!: string;
  status!: string;

  @Output() novoBancoAdicionado = new EventEmitter<any>();
  @Output() cancelarBanco = new EventEmitter<void>();

  salvarBanco() {
    const novoBanco = {
      id: this.gerarIdUnico(),
      codigo: this.codigo,
      descricao: this.descricao,
      status: this.status
    };

    this.novoBancoAdicionado.emit(novoBanco);
  }

  cancelarCadastro() {
    this.cancelarBanco.emit();
  }

  private gerarIdUnico(): string {
    return Math.floor(Math.random() * 101).toString();
  }
}
