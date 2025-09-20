import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/core/services/auth/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  public name !: FormControl;
  public lastName !: FormControl;
  public email !: FormControl;
  public password !: FormControl;
  public registerForm !: FormGroup;
  constructor(private readonly authSrv: Auth, private readonly roter: Router) { 
    this.initForm();
  }

  ngOnInit() {
  }
  
  private initForm(){
    this.name = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [Validators.required, Validators.minLength(8)]);
    this.registerForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    });
  }

  public async onSubmit(){
    try {
      await this.authSrv.register(this.email.value, this.password.value);
      this.roter.navigate(['/login']);
    } catch (error) {
      console.log((error as any).message);
    }
  }
  public goToLogin(){
    this.roter.navigate(['/login']);
  }

}
