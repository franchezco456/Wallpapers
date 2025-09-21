import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'src/app/core/services/toast/toast';
import { UserService } from 'src/app/shared/services/user-service';

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
  constructor(private readonly userSrv: UserService, private readonly roter: Router, private toast: Toast) {
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
      await this.userSrv.LoginUser(this.email.value, this.password.value);
      this.roter.navigate(['/home']);
      this.toast.show("Login successful", "long");
    } catch (error) {
      this.toast.showError((((error as any).message)) || "Login failed");
    }
  }

  public goToRegister(){
    this.roter.navigate(['/register']);
  }
}
