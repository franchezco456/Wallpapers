import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Toast } from 'src/app/core/services/toast/toast';
import { Translate } from 'src/app/core/services/trasnlate/translate';
import { RadioOption } from 'src/app/shared/components/toggle/toggle.component';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {
  public email!: FormControl;
  public password!: FormControl;
  public loginForm!: FormGroup;

  languageOptions: RadioOption[] = [
      { value: 'es', label: 'es' },
      { value: 'en', label: 'en' },
    ];
  
    selectedLanguage : string = 'en'

  constructor(
    private readonly userSrv: UserService,
    private readonly roter: Router,
    private toast: Toast,
    private translateSrv : Translate
  ) {
    this.initForm();
  }

  ngOnInit() {}

  private initForm() {
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]);
    this.loginForm = new FormGroup({
      user: this.email,
      password: this.password,
    });
  }

  handleLanguageChange(newLanguage: string | number) {
    console.log('EL lenguaje seleccionada es:', newLanguage);
    this.selectedLanguage = newLanguage as string;
    this.translateSrv.setLanguage(this.selectedLanguage);
  }


  public async onSubmit() {
    try {
      await this.userSrv.LoginUser(this.email.value, this.password.value);
      this.roter.navigate(['/home']);
      this.toast.show('Login successful', 'short');
    } catch (error) {
      this.toast.showError((error as any).message || 'Login failed');
    }
  }

  public goToRegister() {
    this.roter.navigate(['/register']);
  }
}
