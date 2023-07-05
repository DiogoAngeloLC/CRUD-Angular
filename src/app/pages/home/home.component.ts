import { Component } from '@angular/core';
import { BancoService, Banco } from 'src/app/services/banco.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  mostrarBancos = false;
  novoBanco = false;
  editarBanco = false;
  bancos: Banco[] = [];
  bancoSelecionado: any = null;
  verificarService = false;

  constructor(private bancoService: BancoService) {}

  adicionarNovoBanco(novoBanco: Banco) {
    this.bancos.push(novoBanco);
    this.mostrarBancos = true;
    this.novoBanco = false;
    this.editarBanco = false;
  }

  atualizarBanco(bancoAtualizado: any) {
    const index = this.bancos.findIndex(
      (banco: any) => banco.id === bancoAtualizado.id
    );

    if (index !== -1) {
      this.bancos[index] = { ...bancoAtualizado };
    }
    this.exibirBancos();
  }

  exibirBancos() {
    if (this.verificarService == false) {
      this.bancos = this.bancoService.getBancos();
    }
    this.mostrarBancos = true;
    this.novoBanco = false;
    this.editarBanco = false;
    this.verificarService = true;
  }

  ocultarBancos() {
    this.mostrarBancos = false;
    this.novoBanco = false;
    this.editarBanco = false;
  }

  exibirFormularioNovoBanco() {
    this.mostrarBancos = false;
    this.editarBanco = false;
    this.novoBanco = true;
  }

  exibirFormularioEditarBanco(banco: Banco) {
    this.bancoSelecionado = banco;
    this.mostrarBancos = false;
    this.novoBanco = false;
    this.editarBanco = true;
  }

  excluirBanco(banco: any) {
    const confirmacao = window.confirm(
      'Tem certeza que deseja excluir o banco?'
    );
    if (confirmacao) {
      const index = this.bancos.findIndex((b: any) => b.id === banco.id);
      if (index !== -1) {
        this.bancos.splice(index, 1);
      }
    }
  }
}
