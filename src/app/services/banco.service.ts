import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BancoService {
  getBancos(): Banco[] {
    // Simulação de dados dos bancos
    return [
      { id: 1, status: 'Ativo', codigo: '001', descricao: 'Banco A' },
      { id: 2, status: 'Inativo', codigo: '002', descricao: 'Banco B' },
      { id: 3, status: 'Ativo', codigo: '003', descricao: 'Banco C' }
    ];
  }
}

export interface Banco {
  id: number;
  status: string;
  codigo: string;
  descricao: string;
}
