import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor() {
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
  public onSubmit(){
    console.log(this.loginForm.value);
  }

  public goToRegister(){
    console.log("Go to register");
  }
}
