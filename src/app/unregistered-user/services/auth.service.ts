import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';


const LOGIN_URL = environment.baseUrl + "/login";
const CADASTRO_URL = environment.baseUrl + "/register";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  public login(email: string, password: string) {
    return this.http.post(LOGIN_URL, {
      email: email,
      password: password
    });
  }

  public cadastro (nome: string, email: string, emailConfirmacao: string, senha: string, senhaConfirmacao: string, telefone: number) {
    return this.http.post(CADASTRO_URL, {
      nome: nome,
      email: email,
      emailConfirmacao: emailConfirmacao,
      senha: senha,
      senhaConfirmacao: senhaConfirmacao,
      telefone: telefone
    });
  }
}
