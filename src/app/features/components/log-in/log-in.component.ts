import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  imports: [ReactiveFormsModule],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.scss'
})
export class LogInComponent {

  _AuthService = inject(AuthService);
  _Router = inject(Router);

  isErrorMes: boolean = false;
  isloading: boolean = false;


  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Z].{6,15}$/)]),
  })

  login(form : any) {
    if (form.valid) {
      this.isloading = true;
      this._AuthService.singIn(form.value).subscribe({
        next: (res) => {
          console.log(res);
          this.isloading = false;
          this.isErrorMes = false;
          localStorage.setItem('myToken', res.token);
          this._AuthService.isLogin.next(true);
          this._Router.navigate(['/home']);
        },
        error: (err) => {
          console.log(err);
          this.isloading = false;
          this.isErrorMes = true;
        }
      });
    }else{
      alert('Something Wrong')
    }}
}