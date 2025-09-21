import { Injectable } from '@angular/core';
import { File } from 'src/app/core/services/file/file';
import { Uploader } from 'src/app/core/services/uploader/uploader';
import { UserService } from '../user-service';

@Injectable({
  providedIn: 'root',
})
export class Wallpaper {
  constructor(
    private readonly fileSrv: File,
    private readonly uploaderSrv: Uploader,
    private readonly userSrv: UserService
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
    console.log(url);
  }
}
