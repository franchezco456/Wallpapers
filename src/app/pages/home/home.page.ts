import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/core/services/auth/auth';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private readonly authSrv: Auth, private readonly router : Router) {}

  async SeeYou(){
  await this.authSrv.logOut()
  this.router.navigate(['/login'])
} 

}
