import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/core/services/auth/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  public email  !: FormControl;
  public password !: FormControl;
  public loginForm !: FormGroup;
  constructor(private readonly authSrv: Auth, private readonly roter: Router) {
    this.initForm();
   }

  ngOnInit() {
  }

  private initForm(){
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.loginForm = new FormGroup({
      user: this.email,
      password: this.password,
    });
  }
  public async onSubmit(){
    try {
      await this.authSrv.loginWithEmailAndPassword(this.email.value, this.password.value);
      this.roter.navigate(['/home']);
    } catch (error) {
      console.log((error as any).message);
    }
  }

  public goToRegister(){
    this.roter.navigate(['/register']);
  }
}
