import { Component, Output } from '@angular/core';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { DefaultLoginComponent } from '../../components/default-login/default-login.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports:
  [DefaultLoginComponent,
  ReactiveFormsModule,
  PrimaryInputComponent

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm !: FormGroup;


constructor(
  private formBuilder:FormBuilder)
{
  this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
}



}
