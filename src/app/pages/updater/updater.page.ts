import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Preferences } from 'src/app/core/services/preferences/preferences';
import { Toast } from 'src/app/core/services/toast/toast';
import { UserService } from 'src/app/shared/services/user-service';

@Component({
  selector: 'app-updater',
  templateUrl: './updater.page.html',
  styleUrls: ['./updater.page.scss'],
  standalone: false,
})
export class UpdaterPage implements OnInit {
  public name !: FormControl;
  public lastName !: FormControl;
  public updaterForm !: FormGroup;

  constructor(private readonly UserSrv: UserService , private readonly toast: Toast, private readonly router: Router, private readonly preferencesSrv: Preferences) {
    this.initForm();
   }

  ngOnInit() {
  }

  private initForm(){
    this.name = new FormControl('', [Validators.required]);
    this.lastName = new FormControl('', [Validators.required]);
    this.updaterForm = new FormGroup({
      name: this.name,
      lastName: this.lastName
    });
  }

  public async onSubmit(){
    try{
      await this.UserSrv.UpdateUser(this.name.value, this.lastName.value);
      this.router.navigate(['/home']);
      this.toast.show("Updater successful", "short");
    }catch(error){
      this.toast.showError(((error as any).message) || "Update failed");
    } 
  }

  public goToHome(){
    this.router.navigate(['/home']);
  }

}
