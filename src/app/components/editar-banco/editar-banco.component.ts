import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-editar-banco',
  templateUrl: './editar-banco.component.html',
  styleUrls: ['./editar-banco.component.css']
})
export class EditarBancoComponent {
  codigo!: number;
  descricao!: string;
  status!: string;

  @Input() banco: any;
  @Output() atualizarBanco = new EventEmitter<any>();
  @Output() cancelarBanco = new EventEmitter<void>();

  salvarBancoEditado() {
    this.atualizarBanco.emit(this.banco);
  }

  cancelarCadastro() {
    this.cancelarBanco.emit();
  }

  private gerarIdUnico(): string {
    return Math.floor(Math.random() * 101).toString();
  }
}
