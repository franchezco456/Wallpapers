import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'src/app/core/services/auth/auth';
import { UserService } from 'src/app/shared/services/user-service';
import { Wallpaper } from 'src/app/shared/services/wallpaper/wallpaper';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor(private readonly userSrv: UserService, private readonly router : Router, private readonly wallpaperSrv:Wallpaper) {}

  async logOut() {
    await this.userSrv.logOutUser();
    this.router.navigate(['/login'])
  }

  async addImage() {
    await this.wallpaperSrv.uploadWallpaper();
  }

  goUpdater() {
    this.router.navigate(['/updater'])
  }

}
