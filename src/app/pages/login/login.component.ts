
import { Router } from '@angular/router';
import { Component, Output } from '@angular/core';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { DefaultLoginComponent } from '../../components/default-login/default-login.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-login',
  imports:
  [DefaultLoginComponent,
  ReactiveFormsModule,
  PrimaryInputComponent,
  ],
  providers:[LoginService],

  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm !: FormGroup;


constructor(
  private formBuilder:FormBuilder,
  private Router:Router,
  private loginService:LoginService,
  private toastService: ToastrService

)
{
  this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
}



enviar(){
  this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe({
    next:(value) => this.toastService.success("Login efetuado com sucesso"),
    error:(error) => this.toastService.error("Erro")
  });



}

navegate(){
  this.Router.navigate(['singup']);
}

}
