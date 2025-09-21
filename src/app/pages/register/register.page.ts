import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/core/services/auth/auth';
import { Query } from 'src/app/core/services/query/query';
import { Toast } from 'src/app/core/services/toast/toast';

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
  constructor(private readonly authSrv: Auth, private readonly roter: Router, private toast: Toast, private readonly querySrv: Query) { 
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
      const uid = await this.authSrv.register(this.email.value, this.password.value);
      await this.querySrv.create('users', {
        name: this.name.value, 
        lastName: this.lastName.value, 
        email: this.email.value}, uid);
      this.roter.navigate(['/login']);
      this.toast.show("Register successful", "long");
    } catch (error) {
      this.toast.showError((this.extractTextInParentheses((error as any).message)) || "Registration failed");
      console.log((error as any).message);
    }
  }
  public goToLogin(){
    this.roter.navigate(['/login']);
  }
  
  public extractTextInParentheses(text: string): string | null {
  const match = text.match(/\((.*?)\)/);
  return match ? match[1] : null;
  }

}
