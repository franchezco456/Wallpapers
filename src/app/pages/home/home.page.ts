import { Component, OnInit } from '@angular/core';
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
export class HomePage implements OnInit {
  public urls: string[] = [];
  constructor(
    private readonly userSrv: UserService,
    private readonly router: Router,
    private readonly wallpaperSrv: Wallpaper
  ) {}

  async ngOnInit() {
    await this.loadWallpapers();
  }
  
  async logOut() {
    await this.userSrv.logOutUser();
    this.router.navigate(['/login']);
  }

  async addImage() {
    await this.wallpaperSrv.uploadWallpaper();
    await this.loadWallpapers();
  }

  async loadWallpapers() {
    this.urls = await this.wallpaperSrv.loadWallpapers();
  }

  goUpdater() {
    this.router.navigate(['/updater']);
  }
}
