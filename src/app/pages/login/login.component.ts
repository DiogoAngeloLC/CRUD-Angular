import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  username!: string;
  password!: string;

  constructor(private router: Router, private http: HttpClient) {}

  login() {
    const clientId = 'sinple-web';
    const clientSecret = 'ZzVCevKWN9kQ1SNjahS6HhQ6yB4bqdc6';
    const username = this.username;
    const password = this.password;

    const requestBody = new URLSearchParams();
    requestBody.set('grant_type', 'password');
    requestBody.set('client_id', clientId);
    requestBody.set('client_secret', clientSecret);
    requestBody.set('username', username);
    requestBody.set('password', password);
    requestBody.set('scope', 'user-sinple-web-roles');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    this.http
      .post(
        'http://auth-keycloak-dev.us-east-1.elasticbeanstalk.com/realms/princeton-lemitar/protocol/openid-connect/token',
        requestBody.toString(),
        { headers }
      )
      .subscribe(
        (response: any) => {
          const accessToken = response.access_token;
        },
        (error) => {
          console.error('Erro de autenticação:', error);
        }
      );

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
