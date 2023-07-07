import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenEndpoint =
    'http://auth-keycloak-dev.us-east-1.elasticbeanstalk.com/realms/princeton-lemitar/protocol/openid-connect/token';

  constructor(private http: HttpClient) {}

  async verificarTokenValido(accessToken: string): Promise<boolean> {
    try {
      const response = await this.http
        .post<any>(this.tokenEndpoint, {
          token: accessToken,
        })
        .toPromise();

      return response.valid;
    } catch (error) {
      console.error('Erro ao verificar a validade do token:', error);
      return false;
    }
  }
}
