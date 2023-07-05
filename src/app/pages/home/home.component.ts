import { Component } from '@angular/core';
import { BancoService, Banco } from 'src/app/services/banco.service';
import { AuthService } from 'src/app/services/auth.service';

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

  constructor(
    private bancoService: BancoService,
    private authService: AuthService
  ) {}

  async verificarToken() {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      const tokenValido = await this.authService.verificarTokenValido(
        accessToken
      );

      if (tokenValido) {
        console.log('Token válido');
      } else {
        console.log('Token inválido');
      }
    } else {
      console.log('Token não encontrado');
    }
  }

  adicionarNovoBanco(novoBanco: Banco) {
    this.verificarToken();
    this.bancos.push(novoBanco);
    this.mostrarBancos = true;
    this.novoBanco = false;
    this.editarBanco = false;
  }

  atualizarBanco(bancoAtualizado: any) {
    this.verificarToken();
    const index = this.bancos.findIndex(
      (banco: any) => banco.id === bancoAtualizado.id
    );

    if (index !== -1) {
      this.bancos[index] = { ...bancoAtualizado };
    }
    this.exibirBancos();
  }

  exibirBancos() {
    this.verificarToken();
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
    this.verificarToken();
    this.mostrarBancos = false;
    this.editarBanco = false;
    this.novoBanco = true;
  }

  exibirFormularioEditarBanco(banco: Banco) {
    this.verificarToken();
    this.bancoSelecionado = banco;
    this.mostrarBancos = false;
    this.novoBanco = false;
    this.editarBanco = true;
  }

  excluirBanco(banco: any) {
    this.verificarToken();
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
