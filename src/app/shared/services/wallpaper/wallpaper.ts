import { Injectable } from '@angular/core';
import { File } from 'src/app/core/services/file/file';
import { Uploader } from 'src/app/core/services/uploader/uploader';
import { UserService } from '../user-service';
import { Preferences } from 'src/app/core/services/preferences/preferences';
import myCustomPlugin from 'src/app/Plugins/myCustomPlugin';

@Injectable({
  providedIn: 'root',
})
export class Wallpaper {
  constructor(
    private readonly fileSrv: File,
    private readonly uploaderSrv: Uploader,
    private readonly userSrv: UserService,
    private readonly preferencesSrv : Preferences
  ) {}

  public async uploadWallpaper() {
    const image = await this.fileSrv.pickImage();
    const currentUid = this.userSrv.getCurrentuid();
    const url = await this.uploaderSrv.uploadImage(
      'Wallpapers',
      'images/' + currentUid,
      `${Date.now()}-${image.name}`,
      image.data || '',
      image.mimeType
    );
    console.log('TAG_IMAGE', JSON.stringify(image));
    return url;
  }

  public async loadWallpapers() {
    const currentUid = this.userSrv.getCurrentuid();
    const urls = await this.uploaderSrv.loadAllImagesFromFolder(
      'Wallpapers',
      'images/' + currentUid
    );
    return urls;
  }

  public async homeScreen(imageUrl : string){
    await this.preferencesSrv.setPreferences(
      'data',
      JSON.stringify({url: imageUrl})
    );
    const response = await myCustomPlugin.setHomeScreenWallpaper();
    console.log("RESPONSE PLUGIN" + JSON.stringify(response));
  }

  public async lockScreen(imageUrl : string){
    await this.preferencesSrv.setPreferences(
      'data',
      JSON.stringify({url: imageUrl})
    );
    const response = await myCustomPlugin.setLockScreenWallpaper();
    console.log("RESPONSE PLUGIN" + JSON.stringify(response));
  }
}
