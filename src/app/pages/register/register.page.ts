import { Component, OnInit } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Auth } from 'src/app/core/services/auth/auth';
import { Loading } from 'src/app/core/services/loading/loading';
import { Query } from 'src/app/core/services/query/query';
import { Toast } from 'src/app/core/services/toast/toast';
import { Translate } from 'src/app/core/services/trasnlate/translate';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: false,
})
export class RegisterPage implements OnInit {
  public name!: FormControl;
  public lastName!: FormControl;
  public email!: FormControl;
  public password!: FormControl;
  public registerForm!: FormGroup;
  constructor(
    private readonly router: Router,
    private toast: Toast,
    private readonly userSrv: UserService,
    private readonly loadingSrv: Loading,
    private readonly translateSrv: Translate
  ) {
    this.initForm();
  }

  ngOnInit() {}

  private initForm() {
    this.name = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.registerForm = new FormGroup({
      name: this.name,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    });
  }

  public async onSubmit() {
    try {
      await this.loadingSrv.showLoading();
      await this.userSrv.RegisterUser(
        this.name.value,
        this.lastName.value,
        this.email.value,
        this.password.value
      );
      this.router.navigate(['/login']);
      this.toast.show('Register successful', 'short');
    } catch (error) {
      this.toast.showError((error as any).message || 'Registration failed');
    }finally{
      await this.loadingSrv.dismissLoading();
    }
  }
  public goToLogin() {
    this.router.navigate(['/login']);
  }
}
