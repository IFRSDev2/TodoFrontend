import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  formularioDeCadastro: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    emailConfirmacao: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)]),
    senhaConfirmacao: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit(userData: any) {
    console.log(userData);
    
    if (!this.verifyIfPasswordsMatch()) {
      this.formularioDeCadastro.setErrors({senhasDiferentes: true});
      
      return;
    }

    if(!this.verificarEmailsIguais()){
      this.formularioDeCadastro.setErrors({emailsDiferentes: true})

      return;
    }

  

    this.authService.cadastro(userData.nome, userData.email, userData.emailConfirmacao, userData.senha, userData.senhaConfirmacao).subscribe(
      (response) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      (error) => {
        console.log(error);

      }
    );
  }

  verifyIfPasswordsMatch() {
    const senha = this.formularioDeCadastro.get('senha');
    const senhaConfirmacao = this.formularioDeCadastro.get('senhaConfirmacao');

    if (senha?.value === senhaConfirmacao?.value) {
      return true;
    } else {
      return false;
    }
  }

  verificarEmailsIguais() {
    const email = this.formularioDeCadastro.get('email');
    const emailConfirmacao = this.formularioDeCadastro.get('emailConfirmacao');

    if (email?.value === emailConfirmacao?.value) {
      return true;
    } else {
      return false;
    }
  }

}
