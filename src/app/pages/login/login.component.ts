import { Component, Output } from '@angular/core';
import { DefaultLoginComponent } from '../../components/default-login/default-login.component';
import { ReactiveFormsModule, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-login',
  imports:
  [DefaultLoginComponent,
  ReactiveFormsModule,

  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
loginForm !: FormGroup;
@Output() loginEvent = new EventEmitter();

constructor(
  private formBuilder:FormBuilder)
{
  this.loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required])
  })
}



}
