import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private router: Router) {}

  login() {
    if (this.username === 'admin' && this.password === 'admin') {
      console.log(
        'Autenticação bem-sucedida! Redirecionando para a página principal...'
      );
      this.router.navigate(['/home']);
    } else {
      console.log('Falha na autenticação! Verifique suas credenciais.');
    }
  }
}
