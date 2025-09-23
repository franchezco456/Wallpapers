import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Loading } from 'src/app/core/services/loading/loading';
import { Toast } from 'src/app/core/services/toast/toast';
import { ActionSheet } from 'src/app/shared/providers/ActionSheet/action-sheet';
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
  public imageUrlFromChild: string = "";
  constructor(
    private readonly userSrv: UserService,
    private readonly router: Router,
    private readonly wallpaperSrv: Wallpaper,
    private readonly loadingSrv: Loading,
    private readonly toastSrv: Toast,
    private readonly actionSheetPrv : ActionSheet
  ) {}

  async ngOnInit() {
    try {
      await this.loadingSrv.showLoading();
      await this.loadWallpapers();
    } catch (error) {
      await this.toastSrv.show("Error loading wallpapers");
    }finally{
      await this.loadingSrv.dismissLoading();
    }
    
  
  }
  
  async logOut() {
    await this.userSrv.logOutUser();
    this.urls = [];
    this.router.navigate(['/login']);
  }

  public async manejarClickDeImagen(imageUrl: string): Promise<void> {
    this.imageUrlFromChild = imageUrl;
    const action = await this.actionSheetPrv.presentActionSheet();
    switch (action.data.action){
      case 'home':
        console.log("se selecciono home");
        this.changeHomeScreen();
        break;
      case 'lock':
        console.log("se selecciono lock");
        this.changeLockScreen();
        break;
      default:
        console.log("se cancelo la operacion");
        break;

    }
  }

  async addImage() {
    try {
      await this.loadingSrv.showLoading();
      const newUrl = await this.wallpaperSrv.uploadWallpaper();
      this.urls.push(newUrl);
    } catch (error) {
      await this.toastSrv.show("Error uploading wallpapers");
    }finally{
      await this.loadingSrv.dismissLoading();
    }
  }

  async loadWallpapers() {
    this.urls = await this.wallpaperSrv.loadWallpapers();
  }

  goUpdater() {
    this.router.navigate(['/updater']);
  }

  public async changeHomeScreen(){
    this.wallpaperSrv.homeScreen(this.imageUrlFromChild);
  }

  public async changeLockScreen(){
    this.wallpaperSrv.lockScreen(this.imageUrlFromChild);
    
  }
}
