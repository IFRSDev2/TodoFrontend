import { AuthService } from './../services/auth.service';
import { Component, OnInit, NgModule } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {

  formularioDeLogin: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    senha: new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {

  }

  onSubmit(userData: any) {
    console.log(userData);

    this.authService.login(userData.email, userData.senha).subscribe(
      (sucess) => {
        console.log(sucess);
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
